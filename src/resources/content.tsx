import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Haze",
  lastName: "Crypt",
  name: `Haze Crypt`,
  role: "Software Engineer/Fullstack Developer",
  avatar: "/images/avatar.jpeg",
  email: "sigmawolf150@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/loneprog",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ismail-yakubu-5a6304311",
    essential: true,
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/+2349059372883",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building production ready systems.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Fullstack Developer</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Systems Focused
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Haze. I’m a full-stack developer focused on building modern web
      applications and backend systems. I work across the stack <br /> from
      frontend interfaces to APIs, databases, and infrastructure.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/+2349059372883",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a full-stack developer working with modern JavaScript frameworks and
        backend systems. My focus is on building clean, scalable applications
        and understanding how systems work end-to-end — from UI to
        infrastructure. I’ve worked with tools and technologies across the stack
        including React, Vue, Next.js, Express, PostgreSQL, MongoDB, Docker, and
        AWS. Right now, I’m actively building projects, experimenting with
        architectures, and improving how I design and structure applications. <br />
        <br />
        I value: <br />
        - Clean and maintainable code <br />
        - Practical system design <br />
        - Continuous learning through building.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "QZ Platform",
        timeframe: "2024 — Present",
        role: "Backend Developer (API & System Design)",
        achievements: [
          <>
            Contributed to the backend architecture of an online assessment platform supporting Admin, Test Creator, and Test Taker roles.
          </>,
          <>
            Designed and implemented RESTful APIs for authentication, user management, test management, and result processing.
          </>,
          <>
            Worked with role-based access control and JWT authentication for secure user sessions.
          </>,
          <>
            Structured backend logic for test creation, question management, and automated result handling.
          </>,
          <>
            Participated in database design using MongoDB, including schema modeling for users, tests, questions, and attempts.
          </>,
          <>
            Assisted in frontend integration by ensuring API consistency and usability across dashboards.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/QZPlatformImage.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple
      //       platforms, improving design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line,
      //       contributing to a 15% increase in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Federal University of Abeokuta",
        description: <>Currently Studying software engineering.</>,
      },
      {
        name: "Federal Polytechnic Ilaro",
        description: <>Studied Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Technologies & Tools",
        // description: (
        //   <>Able to create Frontend Design Using React</>
        // ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Javascript",
            icon: "javascript",
          },
          {
            name: "Typescript",
            icon: "typescript",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
                    {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql"
          },
                    {
            name: "ExpressJs",
            icon: "expressjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb"
          },
          {
            name: "VScode",
            icon: "vscode",
          },
          {
            name: "Render",
            icon: "render"
          },
          {
            name: "Vercel",
            icon: "vercel",
          },
          {
            name: "Netlify",
            icon: "netlify",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/QZPlatformImage-two.png",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
