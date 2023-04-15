const { Load } = require('../models');

class LoadController {
	async getAll(req, res, next) {
		const allLoads = await Load.findAll({});

		return res.status(200).json({
			loads: allLoads,
		});
	}
	async getOne(req, res, next) {
		const { email, password, role } = req.body;
		if (!email || !password) {
			return next(ApiError.badRequest('Некорректный email или password'));
		}
		const candidate = await User.findOne({ where: { email } });
		if (candidate) {
			return next(
				ApiError.badRequest('Пользователь с таким email уже существует')
			);
		}
		const hashPassword = await bcrypt.hash(password, 5);
		const user = await User.create({ email, role, password: hashPassword });
		const basket = await Basket.create({ userId: user.id });
		const token = generateJwt(user.id, user.email, user.role);
		return res.json({ token });
	}
	async create(req, res, next) {
		const { name, destination, client } = req.body;

		try {
			const newLoad = await Load.create({
				name: name,
				destination,
				client,
			});

			return res.status(201).json({
				load: newLoad,
			});
		} catch (error) {
			return res.status(400).json({
				error,
			});
		}
	}

	async update(req, res, next) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return next(ApiError.internal('Пользователь не найден'));
		}
		let comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(ApiError.internal('Указан неверный пароль'));
		}
		const token = generateJwt(user.id, user.email, user.role);
		return res.json({ token });
	}

	async delete(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role);
		return res.json({ token });
	}
}

module.exports = new LoadController();
