import { Github, Twitter } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoFanTiger from '/public/images/logofantiger.jpeg';
import LogoAgie from '/public/images/logo-agie.webp';
import LogoKreditBee from '/public/images/keditBeeLogo.png';
import AGIEWeb from "/public/images/AgieWeb.png"
import NJCWebImage from "/public/images/NJCWeb.png"
import CMSFANTV from "/public/images/CMSFanTV.png"
import BlogWebSite from "/public/images/BlogWebSite.png"
import KismatBazzar from '/public/images/kismatBazzarweb.png'
import MartPuramWeb from '/public/images/Martpuramweb.png'

import StrapeDarkLogo from '/public/images/logos/Strapidark.svg';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/pankaj061999',
  GITHUB_REPO: 'https://github.com/pankaj061999/portfolio',
  TWITTER: 'https://x.com/pankajk66711680',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/pankaj061999',
  },
  {
    icon: Twitter,
    url: 'https://x.com/pankajk66711680',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Strapi',
    logo: StrapeDarkLogo,
    darkModeLogo: StrapeDarkLogo,
    url: 'https://strapi.io/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKreditBee,
    darkModeLogo: LogoKreditBee,
    logoAlt: 'KreditBee logo',
    position: 'Full Stack Developer',
    startDate: new Date(2020, 8),
    endDate: new Date(2021, 8),
    summary: [
      'Worked as a full stack developer (Next.js, Material UI, React.js, Golang, MySQL, AWS - API Gateway, SNS, S3).',
      'Wrote frontend test cases using Cypress.',
      'Completed an email verification project through OTP verification.',
      'Spearheaded Product Development Lifecycle from understanding the Business Case to Implementation.',
      'Modified the app/website according to product requirements to deliver new features and enhancements.',
      'Conceptualized and implemented a plan to integrate a 3rd-party Channel Manager.'
    ]
  },
  {
    logo: LogoFanTiger,
    darkModeLogo: LogoFanTiger,
    logoAlt: 'FanTiger logo',
    position: 'Full Stack Developer',
    startDate: new Date(2022, 2),
    endDate: new Date(2023, 8),
    summary: [
      'FanTiger: Contributed to a music NFT marketplace for creating, buying, and selling digital collectibles.',
      'Front-End: Developed responsive web components and payment features using JavaScript, React.js, Next.js, and Redux.js.',
      'Back-End: Built APIs and server-side apps with Node.js, Express.js, and MongoDB (Mongoose). Implemented CRUD operations and secure authentication.',
      'CMS: Led Strapi-based CMS development, ensuring security and scalability.',
      'Community: Created React components, real-time features with Socket.io, and optimized user engagement.',
      'Analytics: Implemented Google Tag Manager and Analytics. Built systems with search, sort, edit, and payment functionalities.'
    ]
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Agie',
    description: 'AGIE empowers enterprises with Generative AI, featuring responsive frontend components and AI model integration using Next.js and Material UI. It enhances UI/UX for performance monitoring, improves usability, security, and scalability, and supports business innovation through ongoing updates.',
    url: 'https://agie.ai/',
    previewImage: AGIEWeb,
    technologies: [
      'React',
      'Typescript',
      'Material Ui',
      'Redux',
      'Tailwindcss',
    ],
  },
  {
    name: 'Nigeria Judicial',
    description: 'A platform for the National Judicial Council of Nigeria (NJC), developed using Next.js and AI technologies. It features AI-driven case filtering, law book navigation, and region-specific listings, with detailed court and judgment pages. The platform enhances legal resource accessibility and user engagement through an intuitive, responsive interface, leveraging Material UI and advanced AI/LLM technologies.',
    url: 'http://4.231.121.68:3000/',
    previewImage: NJCWebImage,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Material UI',
      'Tailwindcss',
    ]
  },
  {
    name: 'KismatBazzar',
    description: 'Developed a dynamic ecommerce platform using Medusa in NodeJS with a Next.js frontend. The project featured a responsive UI/UX built with TypeScript, Tailwind CSS, and Material UI. Integrated Cashfree and Stripe for payment processing. Included a post-purchase game feature to boost user engagement and satisfaction.',
    url: 'http://example.com/',
    previewImage: KismatBazzar,
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Medusa',
      'Cashfree',
      'Stripe',
      'ReduxToolkit',
    ]
  },
  {
    name: 'CMS Services',
    description: 'Developed a custom content management system (CMS) with user authentication and role-based access control. Created RESTful APIs for flexible content delivery and a dynamic admin panel using React or Next.js. Utilized Node.js and MongoDB for backend development.',
    url: 'https://cms.fantv.in/',
    previewImage: CMSFANTV,
    technologies: [
      'JavaScript',
      'HTML/CSS',
      'Node.js',
      'React.js',
      'Next.js',
      'Webpack',
      'Tailwind CSS',
      'ReduxToolkit',
      'Git',
      'MongoDB'
    ]
  },
  {
    name: 'Blogify',
    description: 'Conceptualized and developed "Blogify" a full-stack personal blog website. Utilized Express.js, Node.js, MongoDB, React.js, and Redux.js. Features include user authentication, social sharing, favorites, content reporting, and a follow system. Designed a responsive UI/UX to enhance user engagement and experience.',
    url: 'http://example.com/',
    previewImage: BlogWebSite,
    technologies: [
      'Express.js',
      'Node.js',
      'MongoDB',
      'React.js',
      'Redux.js',
      'ReduxToolkit',
      'Socket.io',
      'HTML',
      'CSS',
      'Git'
    ]
  },
  {
    name: "MartPuram",
    description: "Developed 'MartPuram' a comprehensive e-commerce platform where shopkeepers can list their shop information and products. This platform enables users to visit, browse, and easily find products and verify the existence of shops. The platform integrates Ola Map for location services and uses an OTP-less platform for user verification.",
    url: "http://example.com/",
    previewImage: MartPuramWeb,
    technologies: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "React.js",
      "Redux.js",
      "ReduxToolkit",
      "Socket.io",
      "HTML",
      "CSS",
      "Git",
      "firebase",
      "Ola Map",
      "OTPLess"
    ]
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
