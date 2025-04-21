"use client";

import React, { useState } from "react";
import { StarIcon } from "./Icons";
import Image from "next/image";

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  verified?: boolean;
  images?: string[];
}

interface CustomerReviewsProps {
  productId: string;
  averageRating: number;
  reviewCount: number;
  reviews: Review[];
  onSubmitReview?: (review: Omit<Review, "id" | "date" | "verified">) => Promise<void>;
}

export default function CustomerReviews({
  productId,
  averageRating,
  reviewCount,
  reviews = [],
  onSubmitReview,
}: CustomerReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [filter, setFilter] = useState<number | null>(null);

  // Filtered reviews based on rating filter
  const filteredReviews = filter === null 
    ? reviews 
    : reviews.filter(review => Math.round(review.rating) === filter);

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => Math.round(review.rating) === rating).length;
    const percentage = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
    return { rating, count, percentage };
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const reviewData = {
        author: formData.get('name') as string,
        rating: Number(formData.get('rating')),
        title: formData.get('title') as string,
        body: formData.get('review') as string,
        images: [],
        productId,
      };

      if (onSubmitReview) {
        await onSubmitReview(reviewData);
      }

      // Reset form and hide it
      e.currentTarget.reset();
      setShowReviewForm(false);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full" id="reviews">
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
        Customer Reviews
      </h2>

      {/* Rating Summary */}
      <div className="bg-gray-50 p-6 rounded-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Average Rating */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            <div className="flex items-center my-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  filled={i < Math.floor(averageRating)}
                  halfFilled={i === Math.floor(averageRating) && !Number.isInteger(averageRating)}
                  className="w-5 h-5 text-amber-400"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">Based on {reviewCount} reviews</div>
          </div>

          {/* Right Column - Rating Distribution */}
          <div className="flex flex-col space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center">
                <button
                  onClick={() => setFilter(filter === rating ? null : rating)}
                  className={`flex items-center text-sm ${
                    filter === rating ? 'font-medium text-[#FFC0CB]' : 'text-gray-700'
                  }`}
                >
                  <span className="w-10">{rating} star</span>
                  <div className="w-48 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFC0CB]"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-600">({count})</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Write a Review Button */}
        {!showReviewForm && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowReviewForm(true)}
              className="px-6 py-2 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors"
            >
              Write a Review
            </button>
          </div>
        )}
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-sm p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Write a Review</h3>
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-sm mb-4">
              {submitError}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="flex flex-col items-center mr-4 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      className="sr-only"
                      required
                    />
                    <StarIcon
                      className="peer h-8 w-8 text-gray-300 peer-checked:text-amber-400 cursor-pointer"
                      filled={false}
                    />
                    <StarIcon
                      className="absolute h-8 w-8 text-amber-400 peer-checked:opacity-100 opacity-0 pointer-events-none"
                      filled={true}
                    />
                    <span className="text-xs mt-1">{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Review Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
              />
            </div>

            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB]"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Reviews List */}
      {filter !== null && filteredReviews.length === 0 ? (
        <div className="text-center py-8 text-gray-700">
          No reviews with {filter} stars. <button onClick={() => setFilter(null)} className="text-[#FFC0CB] hover:underline">Show all reviews</button>
        </div>
      ) : filteredReviews.length > 0 ? (
        <div className="space-y-6">
          {filter !== null && (
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-2">Filtering by: {filter} stars</span>
              <button onClick={() => setFilter(null)} className="text-[#FFC0CB] hover:underline">
                Clear filter
              </button>
            </div>
          )}
          
          {filteredReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        filled={i < Math.floor(review.rating)}
                        halfFilled={i === Math.floor(review.rating) && !Number.isInteger(review.rating)}
                        className="w-4 h-4 text-amber-400"
                      />
                    ))}
                  </div>
                  <h4 className="ml-2 text-lg font-medium text-gray-900">
                    {review.title}
                  </h4>
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              
              <div className="mt-2">
                <p className="text-sm text-gray-700">{review.body}</p>
              </div>
              
              {review.images && review.images.length > 0 && (
                <div className="mt-3 flex space-x-2">
                  {review.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={image}
                        alt={`Review image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-3 flex items-center">
                <span className="text-sm font-medium text-gray-700">
                  {review.author}
                </span>
                {review.verified && (
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">
                    Verified Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-700">
          No reviews yet. Be the first to review this product!
        </div>
      )}
    </div>
  );
} 