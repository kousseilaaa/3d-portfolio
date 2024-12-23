import {
  animesheaven, livework
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Web Developper",
    company_name: "BigNova",
    date: "09/2024 - 12/2024",
    details: [
      "Expertise in developing responsive web applications using modern frameworks such as <span style='color: white;'>Next.js</span> and <span style='color: white;'>React.js</span>, ensuring seamless user experiences across devices.",
      "Skilled in integrating <span style='color: white;'>Prisma</span> and <span style='color: white;'>PostgreSQL</span> for efficient database management, delivering robust and scalable solutions for web platforms..",
      "Proficient in implementing real-time features and managing application states effectively with <span style='color: white;'>Redux Toolkit</span>, optimizing performance and user interactions.",
    ],
  },
  {
    title: "Internship",
    company_name: "Tchin-Lait",
    date: "05/2024 - 07/2024",
    details: [
      "Conducted inspections of the network infrastructure at <span style='color: white;'> Tchin-Lait </span>, ensuring optimal performance and security.",
      "Administered network devices and systems, maintaining seamless connectivity across the organization.",
      "Implemented solutions to enhance the reliability and efficiency of the network infrastructure.",
    ],
  },
  {
    title: "Networks and Security",
    company_name: "Univ Abderrahmane Mira",
    date: "2019 - 2024",
    details: [
      "Holder of a degree in Computer Science, specializing in networks and security, with a thesis focused on detecting attacks using artificial intelligence.",
      "Developed strong skills in programming, networking, and cybersecurity, enabling the design of secure and efficient systems.",
      "Gained practical experience in web development, building responsive and modern applications tailored to user needs.",
    ],
  },
];

const portfolio = [
  {
    name: "Streaming Plateform",
    description: "A website created for streaming anime and reading manga, attracting over 1,000 daily visitors with an engaging user experience and a growing community of enthusiasts.",
    image: animesheaven
}
,
{
  name: "Enterprise Social Media",
  description: "A full-stack web application using Next.js designed for enterprises, enabling real-time communication and event management. Developed with a focus on seamless user interactions and robust backend functionality.",
  image: livework
}

];

export { experiences, portfolio };

