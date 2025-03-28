import { Github, Twitter } from "lucide-react";

import AGIEWeb from "/public/images/AgieWeb.png";
import AnimalVitalsWeb from "/public/images/AnimalVitals_Web.png";
import BlogWebSite from "/public/images/BlogWebSite.png";
import PeerLearnXLogo from "/public/images/PeerLearnX.png";
import Tech4LogicWebLogo from "/public/images/Tech4Logic.png";
import CMSFANTV from "/public/images/CMSFanTV.png";
import LogoKreditBee from "/public/images/keditBeeLogo.png";
import KismatBazzar from "/public/images/kismatBazzarweb.png";
import LogoFanTiger from "/public/images/logofantiger.jpeg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import MartPuramWeb from "/public/images/Martpuramweb.png";
import NJCWebImage from "/public/images/NJCWeb.png";
import SmartShieldWeb from "/public/images/SmartShield_Web.png";
import StremVibeWeb from "/public/images/StreamVibe1.png";
import MoneefloLogo from "/public/images/Moneeflo.jpg";
import LogoFreelance from "/public/images/Freelancerlogo.svg";
import StrapeDarkLogo from "/public/images/logos/Strapidark.svg";

import AvatarDummy from "/public/images/avatar-dummy.svg";
import AvatarEugen from "/public/images/nikhil_Kumar.jpg";
import AvatarKrisztian from "/public/images/Kaishu_Sahu.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/pankaj061999",
  GITHUB_REPO: "https://github.com/pankaj061999/portfolio",
  TWITTER: "https://x.com/pankajk66711680"
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Work",
    href: "#work"
  },
  {
    label: "Testimonials",
    href: "#testimonials"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/pankaj061999"
  },
  {
    icon: Twitter,
    url: "https://x.com/pankajk66711680"
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/"
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/"
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/"
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en"
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/"
  },
  {
    label: "Strapi",
    logo: StrapeDarkLogo,
    darkModeLogo: StrapeDarkLogo,
    url: "https://strapi.io/"
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/"
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/"
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/"
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/"
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/"
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/"
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKreditBee,
    darkModeLogo: LogoKreditBee,
    logoAlt: "KreditBee logo",
    position: "Full Stack Developer",
    startDate: new Date(2020, 8),
    endDate: new Date(2021, 8),
    summary: [
      "Worked as a full stack developer (Next.js, Material UI, React.js, Golang, MySQL, AWS - API Gateway, SNS, S3).",
      "Wrote frontend test cases using Cypress.",
      "Completed an email verification project through OTP verification.",
      "Spearheaded Product Development Lifecycle from understanding the Business Case to Implementation.",
      "Modified the app/website according to product requirements to deliver new features and enhancements.",
      "Conceptualized and implemented a plan to integrate a 3rd-party Channel Manager."
    ]
  },
  {
    logo: LogoFanTiger,
    darkModeLogo: LogoFanTiger,
    logoAlt: "FanTiger logo",
    position: "Full Stack Developer",
    startDate: new Date(2022, 2),
    endDate: new Date(2023, 8),
    summary: [
      "FanTiger: Contributed to a music NFT marketplace for creating, buying, and selling digital collectibles.",
      "Front-End: Developed responsive web components and payment features using JavaScript, React.js, Next.js, and Redux.js.",
      "Back-End: Built APIs and server-side apps with Node.js, Express.js, and MongoDB (Mongoose). Implemented CRUD operations and secure authentication.",
      "CMS: Led Strapi-based CMS development, ensuring security and scalability.",
      "Community: Created React components, real-time features with Socket.io, and optimized user engagement.",
      "Analytics: Implemented Google Tag Manager and Analytics. Built systems with search, sort, edit, and payment functionalities."
    ]
  },
  {
    logo: LogoFreelance,
    darkModeLogo: LogoFreelance,
    logoAlt: "Freelancing",
    position: "Freelance Software Developer",
    startDate: new Date(2023, 9),
    endDate: new Date(2025, 0),
    summary: [
      "Designed, developed, and deployed full-stack applications across various industries, focusing on AI, fintech, e-commerce, and media streaming.",
      "Created AGIE, a Generative AI platform utilizing Next.js, Material UI, and AI integration for intelligent content generation.",
      "Built NJC Platform, an AI-powered legal tool for case filtering and document analysis using Next.js.",
      "Developed a feature-rich e-commerce platform using Medusa, integrating Cashfree/Stripe for seamless payments and gamified shopping experiences.",
      "Engineered Blogify, a full-stack blogging platform with MongoDB, Express.js, React.js, and secure user authentication.",
      "Built MartPuram, an innovative e-commerce site featuring OTP-less login and Ola Maps integration for enhanced user experience.",
      "Developed StreamVibe, an OTT platform with a custom Video.js player, optimized for high-performance streaming using Node.js and Next.js.",
      "Led multiple personal and client projects, leveraging AI-driven automation, fintech integrations, and scalable web solutions."
    ]
  },
  {
    logo: MoneefloLogo,
    darkModeLogo: MoneefloLogo,
    logoAlt: "MoneeFlo logo",
    position: "Full Stack Developer",
    startDate: new Date(2025, 0),
    endDate: undefined,
    summary: [
      "MoneeFlo: Contributing to an RBI-licensed fintech platform simplifying cross-border payments, processing over USD 30 million.",
      "Front-End: Developing secure, high-performance fintech applications using React.js, Next.js, and TypeScript.",
      "Back-End: Building robust backend systems with Node.js and MongoDB. Implemented real-time transaction tracking, KYC, and API authentication.",
      "API Integration: Integrated third-party APIs for forex rates and payment processing.",
      "Performance Optimization: Enhanced transaction speeds and reduced page load times for a seamless user experience."
    ]
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Agie",
    description:
      "AGIE empowers enterprises with Generative AI, featuring responsive frontend components and AI model integration using Next.js and Material UI. It enhances UI/UX for performance monitoring, improves usability, security, and scalability, and supports business innovation through ongoing updates.",
    url: "https://agie.ai/",
    previewImage: AGIEWeb,
    technologies: ["React", "Typescript", "Material Ui", "Redux", "Tailwindcss"]
  },
  {
    name: "Blogify",
    description:
      'Conceptualized and developed "Blogify" a full-stack personal blog website. Utilized Express.js, Node.js, MongoDB, React.js, and Redux.js. Features include user authentication, social sharing, favorites, content reporting, and a follow system. Designed a responsive UI/UX to enhance user engagement and experience.',
    url: "https://full-stackrepo-practice.vercel.app/",
    previewImage: BlogWebSite,
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
      "Git"
    ]
  },
  {
    name: "Nigeria Judicial",
    description:
      "A platform for the National Judicial Council of Nigeria (NJC), developed using Next.js and AI technologies. It features AI-driven case filtering, law book navigation, and region-specific listings, with detailed court and judgment pages. The platform enhances legal resource accessibility and user engagement through an intuitive, responsive interface, leveraging Material UI and advanced AI/LLM technologies.",
    url: "http://4.231.121.68:3000/",
    previewImage: NJCWebImage,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwindcss"
    ]
  },
  {
    name: "CMS Services",
    description:
      "Developed a custom content management system (CMS) with user authentication and role-based access control. Created RESTful APIs for flexible content delivery and a dynamic admin panel using React or Next.js. Utilized Node.js and MongoDB for backend development.",
    url: "https://cms.fantv.in/",
    previewImage: CMSFANTV,
    technologies: [
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "React.js",
      "Next.js",
      "Webpack",
      "Tailwind CSS",
      "ReduxToolkit",
      "Git",
      "MongoDB"
    ]
  },
  // {
  //   name: "MartPuram",
  //   description:
  //     "Developed 'MartPuram' a comprehensive e-commerce platform where shopkeepers can list their shop information and products. This platform enables users to visit, browse, and easily find products and verify the existence of shops. The platform integrates Ola Map for location services and uses an OTP-less platform for user verification.",
  //   url: "https://martpuram.com/",
  //   previewImage: MartPuramWeb,
  //   technologies: [
  //     "Express.js",
  //     "Node.js",
  //     "MongoDB",
  //     "React.js",
  //     "Redux.js",
  //     "ReduxToolkit",
  //     "Socket.io",
  //     "HTML",
  //     "CSS",
  //     "Git",
  //     "firebase",
  //     "Ola Map",
  //     "OTPLess"
  //   ]
  // },
  {
    name: "Streamvibe",
    description:
      "Developed 'Streamvibe,' a personal OTT platform featuring a custom-built video.js player. The platform leverages Node.js and Next.js for backend and frontend development, with Material-UI for styling. Streamvibe provides seamless streaming services, offering a smooth and modern user experience.",
    url: "https://jupistreamvibe.netlify.app/",
    previewImage: StremVibeWeb,
    technologies: [
      "Node.js",
      "Next.js",
      "video.js",
      "Material-UI",
      "Express.js",
      "MongoDB",
      "React.js",
      "Redux.js",
      "ReduxToolkit",
      "Socket.io",
      "HTML",
      "CSS",
      "Git"
    ]
  },
  {
    name: "AnimalVitals",
    description:
      "Developed 'animalVitals,' an IoT and AI-powered platform for animal health monitoring and virtual fencing. It enables farmers to track vitals, set AI boundaries, and enhance safety and efficiency. Built with Node.js, Next.js, and Material-UI, it provides real-time data, improving animal welfare and farm management.",
    url: "https://animal-vitals.vercel.app/",
    previewImage: AnimalVitalsWeb,
    technologies: [
      "Node.js",
      "Next.js",
      "MongoDB",
      "Material-UI",
      "Express.js",
      "React.js",
      "Redux.js",
      "ReduxToolkit",
      "Socket.io",
      "HTML",
      "CSS",
      "Git",
      "IoT",
      "AI",
      "Machine Learning"
    ]
  },
  {
    name: "Tech4Logic",
    description:
      "Future-Proof Your Business with Tech4Logic Since 2018, Tech4Logic has delivered innovative technology solutions to help businesses excel in the digital era. We specialize in modernizing applications and workloads for cloud-first SaaS environments, offering tailored services, strategic partnerships, and ongoing support to maximize your technology investments.",
    url: "https://tech4logic.com/",
    previewImage: Tech4LogicWebLogo,
    technologies: [
      "Node.js",
      "Next.js",
      "MongoDB",
      "React.js",
      "Redux.js",
      "ReduxToolkit",
      "Material-UI",
      "HTML",
      "CSS",
      "Git"
    ]
  },
  // {
  //   name: "SmartShield",
  //   description:
  //     "SmartShield is a startup leveraging AI and IoT to offer intelligent solutions. Our platform enhances security, monitoring, and operational efficiency across industries. By using AI algorithms and IoT devices, SmartShield creates smarter, safer environments, pushing the boundaries of technology to improve both business and individual performance.",
  //   url: "https://smartshield.netlify.app/",
  //   previewImage: SmartShieldWeb,
  //   technologies: [
  //     "Artificial Intelligence",
  //     "IoT",
  //     "Node.js",
  //     "Next.js",
  //     "MongoDB",
  //     "React.js",
  //     "Redux.js",
  //     "ReduxToolkit",
  //     "Material-UI",
  //     "Socket.io",
  //     "HTML",
  //     "CSS",
  //     "Git"
  //   ]
  // },
  // {
  //   name: "KismatBazzar",
  //   description:
  //     "Developed a dynamic ecommerce platform using Medusa in NodeJS with a Next.js frontend. The project featured a responsive UI/UX built with TypeScript, Tailwind CSS, and Material UI. Integrated Cashfree and Stripe for payment processing. Included a post-purchase game feature to boost user engagement and satisfaction.",
  //   url: "#",
  //   previewImage: KismatBazzar,
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Material UI",
  //     "Medusa",
  //     "Cashfree",
  //     "Stripe",
  //     "ReduxToolkit"
  //   ]
  // },
  {
    name: "PeerLearnX",
    description:
      "PeerLearnX is a decentralized peer-to-peer learning platform where users can create, share, and collaborate on courses. Built with Next.js and Node.js, it offers real-time communication, secure authentication, and dynamic course management to enhance the learning experience.",
    url: "https://peerlearnx.netlify.app/",
    previewImage: PeerLearnXLogo,
    technologies: [
      "Artificial Intelligence",
      "Socket-client.io",
      "Node.js",
      "Next.js",
      "MongoDB",
      "React.js",
      "Redux.js",
      "ReduxToolkit",
      "Material-UI",
      "Socket.io",
      "GA tracking",
      "HTML",
      "CSS",
      "Git"
    ]
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Kaishu Sahu",
    personAvatar: AvatarKrisztian,
    title: "Co-Founder, Farmako Healthcare",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Pankaj Kumar Meena and will rehire in the future for Frontend development."
  },
  {
    personName: "Nikhil Kumar",
    personAvatar: AvatarEugen,
    title: "Founder & CIO, Farmako",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team."
  },
  {
    personName: "Surendera Kumar",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Pankaj was extremely easy and pleasant to work with and he truly cares about the project being a success. Pankaj has a high level of knowledge and was able to work on my MERN stack application without any issues."
  }
];
