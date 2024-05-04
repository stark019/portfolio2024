// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';


// const Arrow = ({ onClick, direction }) => (
//   <div
//     className={`absolute ${direction === "left" ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 cursor-pointer`}
//     onClick={onClick}
//   >
//     {direction === "left" ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
//   </div>
// );


// const Projects = ({projects}) => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Show 3 slides at a time on large screens
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768, // Breakpoint for phone screens
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     prevArrow: <Arrow  direction="left" />,
//     nextArrow: <Arrow direction="right" />,
//   };

//   return (
//     <Slider {...settings}>

//     {projects.map((project, index) => (
//     <div className='p-1'>
//     <div key={index} className="bg-purple-200 p-2 rounded-lg m-0 mx-10">
//           <img src={project.image} alt={project.name} className="w-full mb-4 rounded" />
//           <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//           <p className="mb-4">{project.description}</p>
//           <div className="flex flex-col gap-2">
//             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-800 flex items-center justify-center">
//               <FontAwesomeIcon icon={faGithub} className="mr-2" /> Source Code
//             </a>
//             <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-800 flex items-center justify-center">
//               <FontAwesomeIcon icon={faGlobe} className="mr-2" /> Live Demo
//             </a>
//             <a href={project.videoDemoLink} target="_blank" rel="noopener noreferrer" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-800 flex items-center justify-center">
//               <FontAwesomeIcon icon={faYoutube} className="mr-2" /> Video Demo
//             </a>
//           </div>
//     </div>
//     </div>
//     ))}
//     </Slider>
//   );
// };

// export default Projects;
