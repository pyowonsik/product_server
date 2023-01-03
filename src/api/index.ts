// index.ts

import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/user', require('./user'));
router.use('/product',require('./product'));

module.exports = router;