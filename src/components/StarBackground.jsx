import { useEffect, useState } from "react";

const generateStars = () => {
  const starCount = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000,
  );

  return Array.from({ length: starCount }, (_, id) => ({
    id,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
    animationDelay: Math.random() * 5,
  }));
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const updateStars = () => setStars(generateStars());
    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
