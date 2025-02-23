import profile from "/profile.png";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Marc",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Marc",
  description:
    "Full-Stack Developer passionate about creating efficient and scalable web applications.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "/cv-Marc.pdf", // CV stored in the project
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I hold a Python Developer degree from OpenClassrooms, where I gained advanced programming skills and industry best practices. Prior to that, I earned a Bac+2 in Computer Science from the Université Libre de Bruxelles – Promotion Sociale, which provided me with a strong foundation in software development. Passionate about web development and software engineering, I am constantly expanding my expertise in modern technologies. I thrive on building scalable, efficient, and user-friendly applications, always seeking to improve and push my limits.",
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Full-Stack Development",
      description:
        "I design and develop robust, scalable, and high-performance web applications, handling both frontend and backend with a strong focus on usability and efficiency.",
      icons: null,
    },
    {
      title: "Backend & API Development",
      description:
        "I create secure, optimized, and well-structured backend architectures, ensuring seamless communication between systems and efficient data management.",
      icons: null,
    },
    {
      title: "Database Design & Optimization",
      description:
        "I structure, manage, and optimize databases for performance, scalability, and reliability, ensuring seamless data flow and integrity.",
      icons: null,
    },
    {
      title: "Frontend Design & User Experience",
      description:
        "I craft clean, modern, and intuitive user interfaces, focusing on aesthetics, responsiveness, and accessibility for an optimal user experience.",
      icons: null,
    },
    {
      title: "Automation & Workflow Optimization",
      description:
        "I streamline project workflows through automation, repository management, and CI/CD processes to enhance efficiency and collaboration.",
      icons: null,
    },
    {
      title: "Python Development & Scripting",
      description:
        "I develop efficient scripts and applications using Python for data processing, automation, and backend services.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
};

export const contact = {
  title: "Get in touch",
  description:
    "Feel free to schedule a meeting or reach out directly via email at mtakoumba@gmail.com. I’m always open to discussions, collaborations, and new opportunities!",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:mtakoumba@gmail.com",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Marc Takoumba | Computer Engineer | FullStack developer",
  description:
    "I develop scalable web applications, design efficient backend systems, and craft intuitive user experiences, backed by my expertise in Python, full-stack development, and automation.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@marc",
  description:
    "Full-Stack Developer | Python & Web Development | Backend & API Design | UI/UX Enthusiast | Automation & Digital Solutions",
  cards: [
    {
      title: "My website",
      link: "https://marc-takoumba.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/youorus/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/marc-takoumba/",
    },
  ],
};
