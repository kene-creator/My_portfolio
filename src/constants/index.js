import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rails,
  meta,
  starbucks,
  tesla,
  shopify,
  microverse,
  self,
  overboard_media,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ruby on rails",
    icon: rails,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Mentor",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#fff",
    date: "August 2022 - Present",
    points: [
      "Assisted three junior web developers weekly",
      "Providing technical support through code reviews and assisting other developers to create high-quality products.",
      "Proposed improvements to code organization to improve code quality and overall performance",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Overboard Media",
    icon: overboard_media,
    iconBg: "#feded1",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js, Next,js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Self Employed",
    company_name: "Kene Agagwu",
    icon: self,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Made use of tailwind css, React.js and firebase to create a prototype of an e-commerce website",
      "Gained soft skills such as communication, pair-programming",
      "Developed a blog app using ruby on rails",
      "Developed a fullstack MERN AI image generation App",
      "Built a Google Docs clone that coverts strike-through text into links using Quill.js and React.js",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kenechukwu's work ethic is absolutely out of this world. Glad to watch him grow and build exciting products that are beyond outstanding. Go Kene. Thank you for being awesome!",
    name: "Tochukwu Agagwu",
    designation: "CEO",
    company: "Overboard Media",
    image:
      "https://media.licdn.com/dms/image/C5603AQEa_hRNE7LyHg/profile-displayphoto-shrink_800_800/0/1583962717856?e=1684368000&v=beta&t=86s-pW2TMPbgW1I4zJLfS1wK04OGmoZ9LbZ_yDgVOsI",
  },
  {
    testimonial:
      "Kenechukwu is a self driven and hardworking individual. Over time his growth in software development has shown through his dedication to work and his willingness to learn.",
    name: "Ashaka Egerega",
    designation: "Backend Engineer",
    company: "IQ.Wiki",
    image: "https://files.fm/thumb_show.php?i=ehntm8nh8",
  },
  {
    testimonial:
      "I and Kene worked on a group capstone together and we made a great team, we faced many challenges but we managed to solve them and successfully completed the project as a team.",
    name: "Faranosh Amini",
    designation: "Mentor",
    company: "Microverse",
    image: "https://ca.slack-edge.com/T47CT8XPG-U03ERCXTV60-a025fba72936-512",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
