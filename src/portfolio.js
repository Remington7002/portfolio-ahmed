/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmed Raza's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ahmed Raza Portfolio",
    type: "website",
    url: "http://ahmedraza.com/",
  },
};

//Home Page
const greeting = {
  title: "Ahmed Raza",
  logo_name: "AhmedRaza",
  nickname: "ahmed_raza",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Remington7002/masterPortfolio",
  githubProfile: "https://github.com/Remington7002",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Remington7002",
  // linkedin: "https://www.linkedin.com/in/ahmed-raza-a16b1b256/",
  // gmail: "ahmedraza.pola1234@gmail.com"

  {
    name: "Github",
    link: "https://github.com/Remington7002",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmed-raza-a16b1b256/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahmedraza.pola1234@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building intelligent solutions using Python, machine learning, and data analysis",
        "⚡ Developing and training predictive models with scikit-learn and TensorFlow",
        "⚡ Turning complex data into practical insights through clean, reliable workflows",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "transparent",
            color: "#FF6F00",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front-end interfaces using React.js and modern JavaScript",
        "⚡ Creating backend services with Node.js and REST APIs for application logic",
        "⚡ Developing clean, structured web pages using HTML, CSS, and component-driven UI design",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
      ],
    },
    {
      title: "Mobile App Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building cross-platform mobile applications with Flutter and Dart",
        "⚡ Creating reusable, responsive interfaces and app flows with React Native",
        "⚡ Delivering smooth mobile experiences across Android and iOS using Git and GitHub",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Barani Institute of Information Technology",
      subtitle: "Software Engineering",
      duration: "2023 - Ongoing",
      descriptions: [
        "⚡ Learning core software engineering fundamentals with practical problem-solving exposure.",
        "⚡ Building a strong foundation in programming, development workflows, and real-world project thinking.",
        "⚡ Improving my understanding of teamwork, system design, and professional software development practices.",
      ],
    },
    {
      title: "Gems World College",
      subtitle: "Intermediate in Computer Science",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Built a strong foundation in basic computer concepts, software usage, and digital workflow.",
        "⚡ Learned how computers work at a fundamental level, including hardware, software, and data processing.",
        "⚡ Developed confidence in using essential computer tools and understanding how everyday technology functions.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Generative AI for Project Managers",
      subtitle: "- Udemy",
      logo_path:
        "https://about.udemy.com/wp-content/uploads/2022/02/Udemy_logo_2.svg",
      certificate_link: "https://www.udemy.com/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I am a software engineer with hands-on experience in development, problem-solving, and building practical solutions. I am currently looking for internship or job opportunities where I can contribute, grow, and continue developing my technical skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I’m a fresher developer building practical projects to strengthen my skills in web development, problem-solving, and software design. These projects reflect my learning journey and my ability to turn ideas into working solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to reach out to me via email or connect with me on LinkedIn. I’m happy to discuss opportunities, collaborations, and new projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
