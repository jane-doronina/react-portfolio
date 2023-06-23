import remost1 from "../assets/remost1.png";
import remost2 from "../assets/remost2.png";
import remost3 from "../assets/remost3.png";
import remost4 from "../assets/remost4.png";

import furniture1 from "../assets/furniture1.png";
import furniture2 from "../assets/furniture2.png";
import furniture3 from "../assets/furniture3.png";
import furniture4 from "../assets/furniture4.png";

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
    images: [ remost1, remost2, remost3, remost4 ],
    url: "https://www.remost.io/"
  },
  {
    id: "obscure",
    name: "Obscure Furniture",
    type: "Full-Stack Rails App",
    description: "Obscure is a furniture rental marketplace (desktop version only for now!) built for educational purposes using Ruby on Rails framework. The main purpose of this project was to practice creating a marketplace using Ruby on Rails framework and modern web development workflow. It was a great way to master all basic CRUD actions, practice using AJAX for dynamic searching as well as using Turbo Streams to apply rails validations and render errors to users.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ furniture1, furniture2, furniture3, furniture4 ],
    url: "https://obscure.up.railway.app/"
  },
  {
    id: "mclub",
    name: "Mclub online-shop",
    type: "React/Redux App",
    description: "Remost is a Ruby on Rails App for remote and hybrid teams which allows employees to find and meet their colleagues in different cities and get the best of both worlds: the freedom of a digital nomad's life and the human touch of an office's watercooler area.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ remost1, remost2, remost3, remost4 ],
    url: "https://www.remost.io/"
  },
  {
    id: "watchlist",
    name: "Movies Watchlist",
    type: "Full-Stack Rails App",
    description: "Remost is a Ruby on Rails App for remote and hybrid teams which allows employees to find and meet their colleagues in different cities and get the best of both worlds: the freedom of a digital nomad's life and the human touch of an office's watercooler area.",
    techStack: "Ruby on Rails, HTML, SASS, Stimulus JS, APIs, Bootstrap, PostgreSQL",
    images: [ remost1, remost2, remost3, remost4 ],
    url: "https://www.remost.io/"
  },
];


export const gallery = [gallery1, gallery2, gallery7, gallery3, gallery4, gallery9, gallery5, gallery6, gallery8]

export const me = {
  bio: "Hi, I’m Zhanna! It took me five years and three career paths to find my passion and perfect professional combination – using my marketing background and user-centric approach to create Web Apps with beautiful UI and seamless user experience. I began my coding journey a year ago and during this time, I graduated from Le Wagon's intensive Full-stack Web Development Bootcamp, learnt multiple new technologies, started teaching and mentoring other students, and had the opportunity to work on a number of Full-stack and Front-end projects, broadening my experience and skill set.",
  questions: [
    {
      topic: "At work I'm best at...",
      answer: "Learning and adapting fast. I strongly believe in life-long learning and really thrive on environments that require me to constantly grasp new concepts and improve in order to excel at my job."
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
