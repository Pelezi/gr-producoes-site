import React, { useRef, useState, useEffect } from "react";
import styles from "./ClientCarousel.module.css";

import client1 from "../../Assets/img/client1.png";
import client2 from "../../Assets/img/client2.png";
import client3 from "../../Assets/img/client3.png";
import client4 from "../../Assets/img/client4.png";
import client5 from "../../Assets/img/client5.png";
import client6 from "../../Assets/img/client6.png";
import client7 from "../../Assets/img/client7.png";
import client8 from "../../Assets/img/client8.png";
import client9 from "../../Assets/img/client9.png";
import client10 from "../../Assets/img/client10.png";

const ClientCarousel = () => {
  const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Ensure the scroll starts in the middle for infinite scroll
    if (carousel) {
      carousel.scrollLeft = carousel.scrollWidth / 2;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Reset scroll position for infinite effect
    if (carousel.scrollLeft === 0) {
      carousel.scrollLeft = carousel.scrollLeft + (carousel.scrollWidth / 4);
    } else if (carousel.scrollLeft >= maxScrollLeft / 2) {
      carousel.scrollLeft = carousel.scrollLeft - (carousel.scrollWidth / 4);
    }
  };

  return (
    <div className={styles.background}>
      <h2 className={styles.text}>Nossos Clientes</h2>
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onScroll={handleScroll}
      >
        <div className={styles.carousel}>
          {/* Duplicate content for seamless infinite scrolling */}
          {clients.concat(clients).concat(clients).concat(clients).map((client, index) => (
            <img key={index} src={client} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
