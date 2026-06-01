export const personalInfo = {
  name: "Hamza Shafique",
  title: "Full Stack Mobile App Developer",
  tagline: "React Native | Flutter | Node JS | .NET Core | MySQL | MongoDB",
  bio: "Passionate Full Stack Mobile App Developer with 6+ years of experience building cross-platform mobile and web applications. I specialize in React Native & Flutter for mobile, Node JS & .NET Core for backend, and integrate powerful databases like MySQL, MongoDB & Firebase to deliver complete end-to-end solutions.",
  email: "hamzashafiqueofficial@gmail.com",
  emailAlt: "hamza@cybvegit.com",
  phone: "+92-3492055477",
  location: "Karachi, Pakistan",
  image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=564,fit=crop/dWxvxbypWohl3XlB/hamza-mP4O4Q1aL5FVZww8.png",
  cvLink: "/cv.pdf",
  social: {
    github:   "https://github.com/CybvegitSoftwareSolutions",
    linkedin: "https://www.linkedin.com/in/hamza-shafique-cybveigt/",
    upwork:   "https://www.upwork.com/freelancers/~0162ca4cf2aaaf6def",
    email:    "mailto:hamzashafiqueofficial@gmail.com",
  },
};

export const education = [
  {
    id: 1,
    degree: "Masters in Project Management",
    institution: "Bahria University, Karachi",
    period: "Graduated",
    icon: "FaGraduationCap"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "Bahria University, Karachi",
    period: "Graduated",
    icon: "FaUniversity"
  }
];

export const skills = [
  { name: "React Native", level: 95, icon: "FaReact",    category: "Mobile"    },
  { name: "Flutter",      level: 88, icon: "SiFlutter",  category: "Mobile"    },
  { name: "React JS",     level: 90, icon: "FaReact2",   category: "Frontend"  },
  { name: "Next JS",      level: 85, icon: "SiNextdotjs",category: "Frontend"  },
  { name: "Node JS",      level: 92, icon: "FaNodeJs",   category: "Backend"   },
  { name: ".NET Core",    level: 85, icon: "SiDotnet",   category: "Backend"   },
  { name: "MySQL",        level: 88, icon: "SiMysql",    category: "Database"  },
  { name: "MongoDB",      level: 85, icon: "SiMongodb",  category: "Database"  },
  { name: "Firebase",     level: 90, icon: "SiFirebase", category: "Database"  },
  { name: "AWS Lambda",   level: 75, icon: "FaAws",      category: "Cloud"     },
  { name: "RESTful APIs", level: 95, icon: "SiGraphql",  category: "Cloud"     },
];

export const services = [
  {
    id: 1,
    icon: "FaMobileAlt",
    title: "Mobile App Development",
    price: "$15/hour",
    description:
      "Creating high-performance mobile apps for Android & iOS using React Native & Flutter. From MVPs to enterprise-level apps with smooth UI/UX and seamless API integrations.",
    features: [
      "React Native & Flutter",
      "Android & iOS cross-platform",
      "API & Firebase integration",
      "App Store & Play Store publishing",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    icon: "FaLaptopCode",
    title: "Website Development",
    price: "$15/hour",
    description:
      "Building modern, responsive websites and web apps using React JS, Next JS, Laravel, PHP, and WordPress. Fast, scalable, and SEO-friendly frontends.",
    features: [
      "React JS & Next JS",
      "WordPress & PHP / Laravel",
      "Responsive & SEO-ready",
      "Performance optimization",
      "Custom UI/UX designs",
    ],
  },
  {
    id: 3,
    icon: "FaServer",
    title: "Full Stack Development",
    price: "$25/hour",
    description:
      "End-to-end solutions including frontend, backend, and database. Node JS, MySQL, MongoDB, Firebase, REST APIs — everything you need in one place.",
    features: [
      "Node JS / .NET Core backend",
      "MySQL, MongoDB, Firebase",
      "RESTful & GraphQL APIs",
      "AWS Lambda & cloud services",
      "Secure authentication & payments",
    ],
  },
  {
    id: 4,
    icon: "FaLightbulb",
    title: "IT Consultancy",
    price: "$15/hour",
    description:
      "Got an idea but not sure where to start? I recommend the right tech stack, architecture, and approach to bring your product to life efficiently.",
    features: [
      "Tech stack recommendations",
      "Project architecture planning",
      "MVP scoping & roadmap",
      "Code review & audit",
      "Team guidance & mentoring",
    ],
  },
];

export const projects = [
  // --- CV Projects (New) ---
  {
    id: 101,
    title: "Soiree",
    description: "Revolutionary mobile application that connects users with events and parties in the UK. Built with .NET Core backend.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    tech: ["React Native", ".NET Core", "SQL Server"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    live: "https://apps.apple.com/us/app/soiree-events/id1643444000",
    playstore: "https://play.google.com/store/apps/details?id=com.soiree.app"
  },
  {
    id: 102,
    title: "Let's Get Organized!",
    description: "Connects users with Professional Organizers worldwide. Features real-time chat and in-app purchases.",
    image: "https://image-eo.winudf.com/v2/image1/Y29tLmF4c29zbnRlY2gub3JnYW5pemVtZV9zY3JlZW5fMF8xNjk5Mjg3MzY1XzA5MA/screen-0.jpg?fakeurl=1&type=.jpg",
    tech: ["React Native", ".NET Core", "MongoDB", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.axsosntech.organizeme"
  },
  {
    id: 103,
    title: "First Medicine (MyDoc)",
    description: "Telehealth application with real-time video consultations, AI-generated prescriptions, and consultant discovery.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tech: ["React Native", "Node JS", "Firebase", "WebRTC"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },

  // --- Original Portfolio Projects ---
  {
    id: 1,
    title: "Pak Rail Live",
    description: "Track train location, speed, and stops with live GPS updates and pre-arrival notifications for Pakistan Railways.",
    image: "/projects/pak-rail-live.jpeg",
    tech: ["React Native", "Node JS", "Firebase", "GPS API"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.nwa.pakrailway&hl=en",
    appstore: "https://apps.apple.com/ae/app/pak-rail-live/id1451412938"
  },
  {
    id: 2,
    title: "SpudMetrix",
    description: "Construction calculation tool for framing, plumbing, electrical, HVAC, and EagleView reporting for field contractors.",
    image: "/projects/spudmetrix.png",
    images: ["/projects/spudmetrix.png", "/projects/spudmetrix-2.png", "/projects/spudmetrix-3.png"],
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 3,
    title: "Comsrvs",
    description: "Connects service providers to potential clients with secure requests, upfront payment, and arbitration features.",
    image: "/projects/comsrvs.png",
    images: ["/projects/comsrvs.png", "/projects/comsrvs-2.png"],
    tech: ["React Native", "Firebase", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 4,
    title: "15 Emergency Services Sindh Police",
    description: "Track emergencies and generate real-time map routes for police response across Sindh province.",
    image: "/projects/emergency-sindh.jpeg",
    tech: ["React Native", "Google Maps", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.onefivecitizen"
  },
  {
    id: 5,
    title: "Shipox – Customer App",
    description: "Courier service app providing customers with order tracking, pick/drop scheduling, and proof of delivery.",
    image: "/projects/shipox-customer.png",
    images: ["/projects/shipox-customer.png", "/projects/shipox-customer-2.png"],
    tech: ["React Native", "Node JS", "Firebase", "Google Maps"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 6,
    title: "Shipox – Rider App",
    description: "Rider-side courier app featuring order details, optimized pick/drop locations, and proof of delivery capture.",
    image: "/projects/shipox-rider.png",
    images: ["/projects/shipox-rider.png", "/projects/shipox-rider-2.png"],
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 7,
    title: "Shell e-Driver Management",
    description: "Route management, driver and vehicle tracking with full reporting capabilities for fleet management.",
    image: "/projects/shell-edriver.jpeg",
    tech: ["React Native", "Node JS", "MySQL", "Google Maps"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 8,
    title: "Imamia Jantri",
    description: "Islamic calendar and yearbook app with offline capability for reading dates and religious content.",
    image: "/projects/imamia-jantri.png",
    images: ["/projects/imamia-jantri.png", "/projects/imamia-jantri-2.png"],
    tech: ["React Native", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 9,
    title: "Let's Eat Cayman",
    description: "Full food ordering ecosystem with customer app, rider app, and restaurant dashboard for the Cayman Islands.",
    image: "/projects/lets-eat-cayman.jpeg",
    images: ["/projects/lets-eat-cayman.jpeg", "/projects/lets-eat-2.jpeg"],
    tech: ["React Native", "Node JS", "Firebase", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.letseat.app&hl=en",
    appstore: "https://apps.apple.com/us/app/lets-eat-cayman-food-delivery/id1503188422"
  },
  {
    id: 10,
    title: "GeburtsCoach",
    description: "Instructor platform for client course access via PDFs, audio, and video with full offline functionality.",
    image: "/projects/geburtscoach.png",
    images: ["/projects/geburtscoach.png", "/projects/geburtscoach-2.png"],
    tech: ["Flutter", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 11,
    title: "AutoParts Market Place",
    description: "Auto parts discovery and ordering platform connecting buyers with vendors across Pakistan.",
    image: "/projects/autoparts.jpeg",
    tech: ["React Native", "Node JS", "MySQL", "Stripe"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    appstore: "https://apps.apple.com/ae/app/partzbuddy/id1560984478",
    playstore: "https://play.google.com/store/apps/details?id=com.myfood.autoparts"
  },
  {
    id: 12,
    title: "Vehicle Tracking App",
    description: "Company vehicle tracking with geofencing, real-time routes, and push notifications for fleet managers.",
    image: "/projects/vehicle-tracking.jpeg",
    tech: ["React Native", "Google Maps", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 13,
    title: "Job Recruitment App",
    description: "Brings recruiters and experienced workers onto the same platform for streamlined hiring across industries.",
    image: "/projects/job-recruitment.jpeg",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 14,
    title: "Grocery App",
    description: "Mobile app allowing users to order daily groceries with real-time inventory, cart management, and delivery tracking.",
    image: "/projects/grocery-app.jpeg",
    tech: ["React Native", "Node JS", "Firebase", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.clover.emart",
    appstore: "https://apps.apple.com/ae/app/clover-emart/id1516600729"
  },
  {
    id: 15,
    title: "Pizza Palace",
    description: "Feature-rich food ordering application for a restaurant chain with menu management and delivery tracking.",
    image: "/projects/pizza-palace.jpeg",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.myfood.pizzapalace"
  },

  // --- Additional CV Projects (Merged) ---
  {
    id: 104,
    title: "Shariawiz",
    description: "Islamic Inheritance Calculator and legal forms platform. Scholar-certified and compliant with Sharia rules.",
    image: "https://image-eo.winudf.com/v2/image1/Y29tLnNoYXJpYXdpemFwcF9zY3JlZW5fMF8xNjEwNDIwMzUwXzA0Nw/screen-0.jpg?fakeurl=1&type=.jpg",
    tech: ["React Native", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.shariawizapp",
    appstore: "https://apps.apple.com/ae/app/shariawiz/id1527756054"
  },
  {
    id: 105,
    title: "Dokita Cameroon",
    description: "Telehealth app connecting doctors to patients with a prescription system and appointment calendar.",
    image: "/projects/dokita.webp",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.dokita.cameroon"
  },
  {
    id: 106,
    title: "Humsafar Ride Share",
    description: "Ride-sharing platform for Pakistan with real-time tracking and secure booking.",
    image: "/projects/humsafar.webp",
    tech: ["React Native", "Firebase", "Node JS"],
    category: "Mobile",
    appstore: "https://apps.apple.com/ae/app/humsafar-rideshare-pakistan/id1582450557"
  },
  {
    id: 107,
    title: "ViewIT Real Estate",
    description: "Modern real estate platform for property discovery and listings tracking.",
    image: "/projects/viewit.webp",
    images: ["/projects/viewit.webp", "/projects/viewit-2.jpg", "/projects/viewit-3.jpg"],
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.viewit"
  },
  {
    id: 108,
    title: "Asaan Hisab POS",
    description: "Mobile Point of Sale (POS) system for small to medium businesses.",
    image: "https://image-eo.winudf.com/v2/image1/Y29tLmFzYWFuaGlzYWJfc2NyZWVuXzBfMTYyNTYwMjMyNV8wNzU/screen-0.jpg?fakeurl=1&type=.jpg",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.asaanhisab"
  },
  {
    id: 109,
    title: "Rido Ride-Hailing",
    description: "Taxi booking ecosystem with separate Driver and Passenger applications.",
    image: "https://image-eo.winudf.com/v2/image1/Y29tLnJpZG8uYXBwX3NjcmVlbl8wXzE2Nzk2MjE1OTNfMDA4/screen-0.jpg?fakeurl=1&type=.jpg",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.rido.app"
  },
  {
    id: 110,
    title: "Niyyah Kids",
    description: "Islamic learning and prayer tracking app designed specifically for children.",
    image: "/projects/niyyah-kids.webp",
    images: ["/projects/niyyah-kids.webp", "/projects/niyyah-kids-2.jpg", "/projects/niyyah-kids-3.jpg"],
    tech: ["Flutter", "Firebase"],
    category: "Mobile",
    appstore: "https://apps.apple.com/ae/app/niyyah-kids/id6476800545"
  }
];

export const experiences = [
  {
    id: 1,
    type: "experience",
    role: "Team Lead – Mobile Development",
    company: "Mega Marketing Network",
    period: "2023 – 2024",
    location: "Karachi, Pakistan",
    description:
      "Led the mobile development team managing React Native and Flutter projects. Delivered multiple client apps including Shaadi Organization Pakistan, Humsafar Ride Sharing, and Shariawiz.",
    tech: ["React Native", "Flutter", "Node JS", "MySQL"],
  },
  {
    id: 2,
    type: "experience",
    role: "Backend Developer",
    company: "Z2C (Remote)",
    period: "2024",
    location: "Karachi, Pakistan",
    description:
      "Developed backend for Begin.watch, an online streaming platform. Built scalable APIs and managed media delivery pipelines.",
    tech: ["Node JS", "AWS Lambda", "MySQL"],
  },
  {
    id: 3,
    type: "experience",
    role: "Mobile App Developer (Remote)",
    company: "Zip24",
    period: "2021 – 2022",
    location: "Dubai, UAE",
    description:
      "Oversaw a portfolio of critical mobile applications including Shipox Driver and Shipox Customer apps. Maintained high code quality and led performance improvements.",
    tech: ["React Native", "Flutter", "Firebase"],
  },
  {
    id: 4,
    type: "experience",
    role: "Full Stack Mobile Developer",
    company: "Mangotech",
    period: "2021 – 2023",
    location: "Karachi, Pakistan",
    description:
      "Developed cross-platform mobile applications using React Native and Flutter for 10+ projects including Partzbuddy, Lyfty, Car Rentalz, and Shaddi Mubarak.",
    tech: ["React Native", "Flutter", "Node JS", "MongoDB", "MySQL"],
  },
  {
    id: 5,
    type: "experience",
    role: "Mobile App Developer",
    company: "Axonstech",
    period: "2018 – 2020",
    location: "Karachi, Pakistan",
    description:
      "Developed cross-platform mobile apps including Pak Rail Live, 15 Emergency Services Sindh Police, and Shell E-Driver Management App.",
    tech: ["React Native", "Flutter", "REST APIs", "Firebase"],
  },
  {
    id: 6,
    type: "experience",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed (Remote)",
    period: "2018 – Present",
    location: "Worldwide",
    description:
      "Delivered 30+ apps across healthcare, real estate, fintech, and e-commerce. Projects include Soiree (UK), Dokita Cameroon, and Let's Get Organized.",
    tech: ["React Native", ".NET Core", "Node JS", "Firebase"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Sumner",
    role: "Client",
    company: "International",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Hamza is an excellent developer with very good communication skills and great reliability. I strongly recommend him.",
  },
  {
    id: 2,
    name: "Bradon Egan",
    role: "Business Owner",
    company: "Washington, United States",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Hamza's portfolio showcases exceptional skills in full stack mobile app development. Highly recommended!",
  },
  {
    id: 3,
    name: "Bradon Egan",
    role: "Tech Entrepreneur",
    company: "Texas, United States",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    quote:
      "Working with Hamza was a fantastic experience. He understood our requirements quickly and built a robust, scalable mobile app. His expertise in React Native and Node JS is exceptional.",
  },
  {
    id: 4,
    name: "John Sumner",
    role: "Project Manager",
    company: "United States",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "He delivered exactly what was promised, on time and with great quality. His communication throughout the project was top-notch and professional.",
  },
];

export const navLinks = [
  { name: "Home",         href: "#home"         },
  { name: "About",        href: "#about"        },
  { name: "Education",    href: "#education"    },
  { name: "Services",     href: "#services"     },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "Experience",   href: "#experience"   },
  { name: "Contact",      href: "#contact"      },
];
