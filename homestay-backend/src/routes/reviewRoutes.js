const express = require('express');
const { body, query } = require('express-validator');

const { getReviews, createReview, updateReviewStatus } = require('../controller/reviewController');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.get(
  '/',
  [
    query('status')
      .optional()
      .isIn(['pending', 'approved', 'rejected', 'all'])
      .withMessage('Invalid status filter value.'),
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 100 }),
    query('withMeta').optional().isBoolean().toBoolean(),
  ],
  validateRequest,
  getReviews
);

router.post(
  '/',
  [
    body('guestName').trim().notEmpty().withMessage('Guest name is required.').isLength({ max: 80 }),
    body('guestEmail').optional().isEmail().withMessage('Please provide a valid email address.'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5.'),
    body('comment')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage('Comment must be between 10 and 2000 characters.'),
    body('avatarUrl').optional().isURL().withMessage('Avatar URL must be valid.'),
  ],
  validateRequest,
  createReview
);

router.patch(
  '/:id/status',
  [
    body('status')
      .isIn(['pending', 'approved', 'rejected'])
      .withMessage('Status must be pending, approved, or rejected.'),
  ],
  validateRequest,
  updateReviewStatus
);

module.exports = router;

