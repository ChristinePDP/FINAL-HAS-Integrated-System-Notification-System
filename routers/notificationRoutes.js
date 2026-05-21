import express from 'express';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

export const limiter = rateLimiter();

export default router;

