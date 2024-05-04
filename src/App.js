import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Banner from './Components/Banner';
import ExperienceSection from './Components/ExperienceSection';
import AbstractPattern from './Components/AbstractPattern';
import EducationSection from './Components/Education';
import ExperienceAndEducation from './Components/ExperienceAndEducation';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import ProjectList from './Components/ProjectComponent';
import ExperienceEducation from './Components/Timeline';

// <a href="https://ibb.co/KK3mXcC"><img src="https://i.ibb.co/Sf9JPDq/1.png" alt="1" border="0"></a>
// <a href="https://ibb.co/d6n2Kc3"><img src="https://i.ibb.co/ctzFTvp/2.png" alt="2" border="0"></a>
// <a href="https://ibb.co/3zRbfwg"><img src="https://i.ibb.co/zJ6g81q/3.png" alt="3" border="0"></a>
// <a href="https://ibb.co/Qk5bJB2"><img src="https://i.ibb.co/zFknmcy/4.png" alt="4" border="0"></a>
// <a href="https://ibb.co/wwh7MKP"><img src="https://i.ibb.co/Nm2rZLJ/5.png" alt="5" border="0"></a>
// <a href="https://ibb.co/r7q13Th"><img src="https://i.ibb.co/2nRfSmr/6.png" alt="6" border="0"></a>
// <a href="https://ibb.co/D90xffC"><img src="https://i.ibb.co/R3RxTT0/7.png" alt="7" border="0"></a>
function App() {
  const projects = [
    {
      image: "https://i.ibb.co/Sf9JPDq/1.png",
      name: 'Streamz',
      description: 'Streamz is a video viewing webapp that uses Youtube API to give most popular videos of a region (shown in menu), and when a particular video is clicked the user can see a live chat that is generated with random names and random comments and also a list of auto-generated nested comments',
      githubLink: 'https://github.com/stark019/Streamz',
      liveDemoLink: 'https://streamz-lime.vercel.app/',
      videoDemoLink: 'https://youtube.com/project1'
    },
    {
      image: "https://i.ibb.co/ctzFTvp/2.png",
      name: 'Joobsy',
      description: 'This is a job portal developed by using React and FireBase, were we have role based authentication of job seekers and hiring organizations, the job seekers can view and apply for the job and the organizations can select or reject them',
      githubLink: 'https://github.com/stark019/jobssy',
      liveDemoLink: 'https://jobssy.vercel.app/',
      videoDemoLink: 'https://youtube.com/project2'
    },
    {
      image: "https://i.ibb.co/zJ6g81q/3.png",
      name: 'adminDashboard-MUI',
      description: 'This is an admin dashboard developed using Material UI and React where the user can see different data in tabular form with all sort of filtering and sorting functionalities, also there are various charts that helps us to visualize data,, and an event calendar feature is added which is similar to google calendar.',
      githubLink: 'https://github.com/stark019/adminDashboard-MUI',
      liveDemoLink: 'https://zesty-dieffenbachia-8daff5.netlify.app/',
      videoDemoLink: 'https://youtube.com/project2'
    },
    {
      image: "https://i.ibb.co/zFknmcy/4.png",
      name: 'Hulu clone',
      description: 'Hulu-inspired streaming platform clone, crafted with HTML, CSS, and JavaScript. Dive into a world of entertainment with seamless navigation, stunning visuals, and an intuitive user interface. Explore a vast library of movies and shows, all designed to elevate your viewing experience. Welcome to your new favorite destination for endless entertainment!"',
      githubLink: 'https://github.com/example/project2',
      liveDemoLink: 'https://example.com/project2',
      videoDemoLink: 'https://youtube.com/project2'
    },
    {
      image: "https://i.ibb.co/Nm2rZLJ/5.png",
      name: 'Project 2',
      description: 'Praesent sed diam eget risus varius blandit sit amet non magna.',
      githubLink: 'https://github.com/example/project2',
      liveDemoLink: 'https://example.com/project2',
      videoDemoLink: 'https://youtube.com/project2'
    },
    {
      image: "https://i.ibb.co/2nRfSmr/6.png",
      name: 'Project 2',
      description: 'Praesent sed diam eget risus varius blandit sit amet non magna.',
      githubLink: 'https://github.com/example/project2',
      liveDemoLink: 'https://example.com/project2',
      videoDemoLink: 'https://youtube.com/project2'
    },
    {
      image: "https://i.ibb.co/R3RxTT0/7.png",
      name: 'Project 2',
      description: 'Praesent sed diam eget risus varius blandit sit amet non magna.',
      githubLink: 'https://github.com/example/project2',
      liveDemoLink: 'https://example.com/project2',
      videoDemoLink: 'https://youtube.com/project2'
    },
    
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Banner/>
      <ExperienceEducation/>
      <ProjectList projects={projects} />
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
