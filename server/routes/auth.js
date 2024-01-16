import express from 'express';

import { helloFunction, createUser } from '../controllers/auth.js';

const router = express.Router();

router.get('/', helloFunction);
router.post('/', createUser);

export default router;