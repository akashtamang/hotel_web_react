const Review = require('../models/Review');
const asyncHandler = require('../utils/asyncHandler');

const buildFilter = (status) => {
  if (!status || status === 'approved') {
    return { status: 'approved' };
  }

  if (status === 'all') {
    return {};
  }

  return { status };
};

const getReviews = asyncHandler(async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
  const includeMeta = req.query.withMeta === 'true';
  const filter = buildFilter(req.query.status);

  const [reviews, total] = await Promise.all([
    Review.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    Review.countDocuments(filter),
  ]);

  if (includeMeta) {
    return res.json({
      data: reviews,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit) || 1,
        limit,
      },
    });
  }

  return res.json(reviews);
});

const createReview = asyncHandler(async (req, res) => {
  const { guestName, guestEmail, rating, comment, avatarUrl } = req.body;

  const review = await Review.create({
    guestName,
    guestEmail,
    rating,
    comment,
    avatarUrl,
  });

  res.status(201).json({
    message: 'Review submitted successfully and is pending approval.',
    review,
  });
});

const updateReviewStatus = asyncHandler(async (req, res) => {
  if (!process.env.ADMIN_SECRET) {
    return res.status(500).json({ message: 'ADMIN_SECRET is not configured on the server.' });
  }

  const providedSecret = req.header('x-admin-secret');
  if (providedSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ message: 'Unauthorized: invalid admin secret.' });
  }

  const { status } = req.body;
  const { id } = req.params;

  const review = await Review.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );

  if (!review) {
    return res.status(404).json({ message: 'Review not found.' });
  }

  res.json({
    message: `Review has been marked as ${status}.`,
    review,
  });
});

module.exports = {
  getReviews,
  createReview,
  updateReviewStatus,
};

