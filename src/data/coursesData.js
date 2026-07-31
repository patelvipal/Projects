const coursesData = [
  {
    id: 1,
    title: "Complete React.js Bootcamp",
    instructor: "John Smith",
    category: "Frontend",
    duration: "8 Weeks",
    level: "Beginner",
    price: "₹2,999",
    rating: 4.8,
    students: "12,540",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description:
      "Learn React.js from scratch by building real-world projects including Hooks, Routing, Context API, Redux, and API Integration.",

    learning: [
      "React Components",
      "React Hooks",
      "React Router",
      "Redux Toolkit",
      "REST API",
      "Deployment",
    ],

    includes: [
      "60+ Hours Video",
      "Certificate",
      "Lifetime Access",
      "Assignments",
      "Projects",
    ],
  },

  {
    id: 2,
    title: "Advanced JavaScript Mastery",
    instructor: "David Miller",
    category: "JavaScript",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹2,499",
    rating: 4.7,
    students: "10,320",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    description:
      "Master JavaScript concepts including ES6+, Async/Await, Closures, Event Loop, DOM, and advanced problem solving.",
  },

  {
    id: 3,
    title: "Node.js & Express API Integrate",
    instructor: "Michael Brown",
    category: "Backend",
    duration: "7 Weeks",
    level: "Intermediate",
    price: "₹3,499",
    rating: 4.9,
    students: "9,850",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    description:
      "Build scalable REST APIs using Node.js, Express.js, MongoDB, JWT Authentication and MVC Architecture.",
    learning: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API",
      "Deployment",
    ],

    includes: [
      "45+ Hours Video",
      "Certificate",
      "Source Code",
      "Assignments",
      "API Projects",
    ],
  },

  {
    id: 4,
    title: "MERN Stack Web Development",
    instructor: "Sarah Wilson",
    category: "Full Stack",
    duration: "12 Weeks",
    level: "Advanced",
    price: "₹5,999",
    rating: 4.9,
    students: "18,200",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
    description:
      "Complete MERN Stack course including MongoDB, Express.js, React.js, Node.js and deployment.",
  },

  {
    id: 5,
    title: "Python Programming",
    instructor: "Robert Johnson",
    category: "Programming",
    duration: "10 Weeks",
    level: "Beginner",
    price: "₹2,199",
    rating: 4.8,
    students: "20,450",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop",
    description:
      "Learn Python and  programming from basics to advanced concepts with practical coding exercises.",
    learning: [
      "Python Basics",
      "Functions",
      "OOP",
      "File Handling",
      "NumPy",
      "Pandas",
    ],

    includes: [
      "50+ Hours Video",
      "Certificate",
      "Coding Exercises",
      "Assignments",
      "Mini Projects",
    ],
  },

  {
    id: 6,
    title: "Java Full Stack",
    instructor: "Ankit Sharma",
    category: "Full Stack",
    duration: "14 Weeks",
    level: "Advanced",
    price: "₹6,499",
    rating: 4.8,
    students: "14,780",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&auto=format&fit=crop",
    description:
      "Master of Java, Spring Boot, MySQL, React.js and build enterprise-level  build Web applications.",
  },

  {
    id: 7,
    title: "UI/UX Design",
    instructor: "Emily Davis",
    category: "Design",
    duration: "6 Weeks",
    level: "Beginner",
    price: "₹1,999",
    rating: 4.7,
    students: "7,800",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
    description:
      "Learn Figma, wireframing, prototyping and modern UI/UX design principles.",
  },

  {
    id: 8,
    title: "Data Science with Python",
    instructor: "Rahul Verma",
    category: "Data Science",
    duration: "10 Weeks",
    level: "Intermediate",
    price: "₹4,499",
    rating: 4.8,
    students: "11,300",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    description:
      "Learn NumPy, Pandas, Matplotlib, Machine Learning and data visualization.",
  },

  {
    id: 9,
    title: "AWS Cloud Learning and Fundamentals",
    instructor: "Chris Anderson",
    category: "Cloud",
    duration: "5 Weeks",
    level: "Beginner",
    price: "₹3,299",
    rating: 4.6,
    students: "6,900",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    description:
      "Introduction to AWS services including EC2, S3, IAM, Lambda and Cloud Deployment.",
  },

  {
    id: 10,
    title: "DevOps with Docker & Kubernetes",
    instructor: "Aman Gupta",
    category: "DevOps",
    duration: "9 Weeks",
    level: "Advanced",
    price: "₹4,999",
    rating: 4.9,
    students: "8,400",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    description:
      "Learn Docker, Kubernetes, CI/CD, Jenkins and deployment automation.",
  },

  {
    id: 11,
    title: "SQL Database Advanced Masterclass",
    instructor: "Priya Patel",
    category: "Database",
    duration: "4 Weeks",
    level: "Beginner",
    price: "₹5,799",
    rating: 4.7,
    students: "9,100",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
    description:
      "Master SQL queries, joins, indexing, stored procedures and database optimization.",
  },

  {
    id: 12,
    title: "Advanced Flutter App Development",
    instructor: "Kevin Thomas",
    category: "Mobile",
    duration: "10 Weeks",
    level: "Intermediate",
    price: "₹6,299",
    rating: 4.8,
    students: "7,250",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    description: "Build Android and iOS apps using Flutter, Dart and Firebase.",
  },
];

export default coursesData;
