import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ useStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleclick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(useStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleclick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            size={50}
          />
        );
      })}
    </div>
  );
}
