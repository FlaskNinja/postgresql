import express from 'express';
import {
  getUser,
  postUser,
  getUserId,
  updateUser,
  deleteUser
} from '../controllers/usercontrollers.js';
import { body, param } from 'express-validator';

const router = express.Router();

const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('age').isInt().withMessage('Age must be an integer'),
  body('occupation').notEmpty().withMessage('Occupation is required')
];

const validateIdParam = [
  param('id').isUUID().withMessage('Invalid user ID format')
];

router.get('/', getUser);
router.post('/', validateUser, postUser);
router.get('/:id', validateIdParam, getUserId);
router.put('/:id', [...validateIdParam, ...validateUser], updateUser);
router.delete('/:id', validateIdParam, deleteUser);

export default router;
