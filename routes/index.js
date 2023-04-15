const Router = require('express');
const router = new Router();

const clientsRouter = require('./clientRoutes.ts');
const currierRouter = require('./currierRoutes.ts');
const loadRouter = require('./loadRoutes.ts');

router.use('/clients', clientsRouter);
// router.use('/currier', currierRouter);
router.use('/load', loadRouter);

module.exports = router;
