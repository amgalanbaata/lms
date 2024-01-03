"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                let currentRating = index + 1;
                return (
                    <label>
                        <input
                            className="hidden"
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className="cursor-pointer"
                            color={
                                currentRating <= (hover || rating)
                                    ? "#1E96FC"
                                    : "#e4e5e9"
                            }
                        />
                    </label>
                );
            })}
        </div>
    );
}
