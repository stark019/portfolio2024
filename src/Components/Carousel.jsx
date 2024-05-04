// import React, { useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Carousel = ({ children }) => {
//   const containerRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     containerRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper" ref={containerRef}>
//         {children}
//       </div>
//       <button className="carousel-arrow left" onClick={() => scroll(-300)}>
//         <FontAwesomeIcon icon={faArrowLeft} />
//       </button>
//       <button className="carousel-arrow right" onClick={() => scroll(300)}>
//         <FontAwesomeIcon icon={faArrowRight} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
