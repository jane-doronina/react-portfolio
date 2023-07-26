import remost1 from "../assets/remost1.png";
import remost2 from "../assets/remost2.png";
import remost3 from "../assets/remost3.png";
import remost4 from "../assets/remost4.png";
import remost5 from "../assets/remost5.png";
import remost6 from "../assets/remost6.png";
import remostmob from "../assets/remostmob.png";

import furniture1 from "../assets/furniture1.png";
import furniture2 from "../assets/furniture2.png";
import furniture3 from "../assets/furniture3.png";
import furniture4 from "../assets/furniture4.png";
import furniture5 from "../assets/furniture5.png";

import mclub1 from "../assets/mclub1.png";
import mclub2 from "../assets/mclub2.png"
import mclub3 from "../assets/mclub3.png"
import mclub4 from "../assets/mclub4.png"
import mclubmob from "../assets/mclubmob.png"

import watchlist1 from "../assets/watchlist1.png";
import watchlist2 from "../assets/watchlist2.png"
import watchlist3 from "../assets/watchlist3.png"
import watchlist4 from "../assets/watchlist4.png"

import news1 from "../assets/news1.png";
import newsmob from "../assets/newsmob.png"

import hoobank1 from "../assets/hoobank1.png";
import hoobank2 from "../assets/hoobank2.png";
import hoobank3 from "../assets/hoobank3.png";
import hoobank4 from "../assets/hoobank4.png";
import hoobank5 from "../assets/hoobank5.png"

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";

export const projects = [
  {
    id: "remost",
    name: "Remost",
    type: "Full-Stack Rails App",
    description: "Remost is a Ruby on Rails App for remote and hybrid teams which allows employees to find and meet their colleagues in different cities and get the best of both worlds: the freedom of a digital nomad's life and the human touch of an office's watercooler area.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ {img: remost5, type: "desktop"}, {img: remost6, type: "desktop"}, {img: remost1, type: "desktop"}, {img: remostmob, type: "mobile"}, {img: remost2, type: "desktop"}, {img: remost3, type: "desktop"}, {img: remost4, type: "desktop"} ],
    url: "https://www.remost.io/",
    color: "bg-pink text-white",
  },
  {
    id: "obscure",
    name: "Obscure Furniture",
    type: "Full-Stack Rails App",
    description: "Obscure is a furniture rental marketplace (desktop version only for now!) built for educational purposes using Ruby on Rails framework. The main purpose of this project was to practice creating a marketplace using Ruby on Rails framework and modern web development workflow. It was a great way to master all basic CRUD actions, practice using AJAX for dynamic searching as well as using Turbo Streams to apply rails validations and render errors to users.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ {img: furniture1, type: "desktop"}, {img: furniture2, type: "desktop"}, {img: furniture4, type: "desktop"}, {img: furniture3, type: "desktop"}, {img: furniture5, type: "desktop"} ],
    url: "https://obscure.up.railway.app/",
    github: "https://github.com/Marionator/furniture",
    color: "bg-yellow text-white",
  },
  {
    id: "mclub",
    name: "Mclub online-shop",
    type: "React/Redux App",
    description: "An online shop built to practice React functional components (with Hooks) and state management using Redux.",
    techStack: "React JS (with Hooks), styled components (CSS in JS), Redux, Firebase, Stripe.",
    images: [ {img: mclub1, type: "desktop"}, {img: mclubmob, type: "mobile"}, {img: mclub2, type: "desktop"}, {img: mclub3, type: "desktop"}, {img: mclub4, type: "desktop"} ],
    url: "https://mclub-shop.netlify.app/",
    github: "https://github.com/jane-doronina/react-online-shop",
    color: "bg-green text-darkGrey",
  },
  {
    id: "watchlist",
    name: "Movies Watchlist",
    type: "Full-Stack Rails App",
    description: "Remost is a Ruby on Rails App for remote and hybrid teams which allows employees to find and meet their colleagues in different cities and get the best of both worlds: the freedom of a digital nomad's life and the human touch of an office's watercooler area.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ {img: watchlist1, type: "desktop"}, {img: watchlist2, type: "desktop"}, {img: watchlist3, type: "desktop"}, {img: watchlist4, type: "desktop"} ],
    url: "https://www.remost.io/",
    github: "https://github.com/jane-doronina/rails-watch-list",
    color: "bg-red text-white"
  },
  {
    id: "hoobank",
    name: "Hoobank",
    type: "Landing page",
    description: "A landing page for modern online bank built with React functional components. Project implementation based on tutorial by JS Mastery Pro - https://jsmastery.pro 🎨 Design by: https://www.oneweekwonders.com | https://dribbble.com/OWWStudio",
    techStack: "React, Tailwind CSS",
    images: [ {img: hoobank1, type: "desktop"}, {img: hoobank2, type: "desktop"}, {img: hoobank3, type: "desktop"}, {img: hoobank4, type: "desktop"}, {img: hoobank5, type: "desktop"} ],
    url: "https://hoobank-modern-bank-react.netlify.app/",
    github: "https://github.com/jane-doronina/react-modern-bank",
    color: "bg-blue text-white"
  },
  {
    id: "news",
    name: "News Homepage",
    type: "Landing page",
    description: "This is a solution to the News homepage challenge on Frontend Mentor. The main purpose for completing this project was to practice creating responsive layouts with pure CSS using Grids and Flexbox. The primary challenges included making the optimal layout decisions based on JPEG design files and implementing the toggle for mobile menu with vanilla JS.",
    techStack: "HTML, CSS, JavaScript",
    images: [ {img: news1, type: "desktop"}, {img: newsmob, type: "mobile"} ],
    url: "https://fabulous-bunny-7039f6.netlify.app/",
    github: "https://github.com/jane-doronina/news-homepage",
    color: "bg-brightBlue text-white"
  }
];


export const gallery = [gallery1, gallery2, gallery7, gallery3, gallery4, gallery9, gallery5, gallery6, gallery8]

export const me = {
  bio: "Hi, I’m Zhanna! It took me five years and three career paths to find my passion and perfect professional combination – using my marketing background and user-centric approach to create Web Apps with beautiful UI and seamless user experience. I began my coding journey a year ago and during this time, I graduated from Le Wagon's intensive Full-stack Web Development Bootcamp, learnt multiple new technologies, started teaching and mentoring other students, and had the opportunity to work on a number of Full-stack and Front-end projects, broadening my experience and skill set.",
  questions: [
    {
      topic: "At work I'm best at...",
      answer: "learning and adapting fast. I strongly believe in life-long learning and really thrive on environments that require me to constantly grasp new concepts and improve in order to excel at my job."
    },
    {
      topic: "I want to work for a company that...",
      answer: "values collaboration and fosters a positive, supportive work environment. I'm excited about working in a purpose-driven team that shares my passion for delivering exceptional products."
    },
    {
      topic: "I enjoy coding because...",
      answer: "I found my passion in combining my previous design and marketing skills with technical problem-solving to create aesthetically pleasing, functional user interfaces."
    }
  ]
}
