"use client";
import { useUser } from "@/context/userProvider";
import { useAddReviewMutations } from "@/hook/order.hook";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewPage = () => {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("reviewId");
  console.log("Review ID:", reviewId);
  console.log(reviewId);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const { user } = useUser();

  const { mutate: handleReview } = useAddReviewMutations(reviewId as string);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewData = {
      id: user?.id,
      userName: user?.name,
      userProfilePicture: user?.avatar,
      comment: reviewText,
      ratings: rating,
      timestamp: Date.now(),
    };

    handleReview(reviewData);

    // Mock submit logic
    console.log("Rating:", rating);
    console.log("Review:", reviewText);

    // Clear form after submission
    setRating(0);
    setHover(0);
    setReviewText("");
    alert("Thank you for your review!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 my-48">
      <h2 className="text-2xl font-bold text-center mb-4">Leave a Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating Component */}
        <div className="flex justify-center items-center space-x-2">
          <span className="text-lg font-semibold">Your Rating:</span>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                  className="hidden"
                />
                <FaStar
                  className="cursor-pointer transition-colors duration-200"
                  color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={30}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>

        {/* Review Textarea */}
        <div>
          <label htmlFor="review" className="block font-semibold mb-2">
            Your Review:
          </label>
          <textarea
            id="review"
            rows={5}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="button-primary w-full">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
3;
