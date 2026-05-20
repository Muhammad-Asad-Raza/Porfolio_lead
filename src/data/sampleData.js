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
    image: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?w=800&q=80",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=248,h=494,fit=crop/dWxvxbypWohl3XlB/comsr-d95154GR53HP9DZd.png",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=335,fit=crop/dWxvxbypWohl3XlB/pr-ALpep6DLGeSvJB9A.png",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 3,
    title: "Comsrvs",
    description: "Connects service providers to potential clients with secure requests, upfront payment, and arbitration features.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/com-YbNBNJwaj4i9gqKY.png",
    tech: ["React Native", "Firebase", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 4,
    title: "15 Emergency Services Sindh Police",
    description: "Track emergencies and generate real-time map routes for police response across Sindh province.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/sd-Yan1nN3ZW9hkv4zx.png",
    tech: ["React Native", "Google Maps", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.onefivecitizen"
  },
  {
    id: 5,
    title: "Shipox – Customer App",
    description: "Courier service app providing customers with order tracking, pick/drop scheduling, and proof of delivery.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/sc-portrait-Y4LDL764yas4Ovop.png",
    tech: ["React Native", "Node JS", "Firebase", "Google Maps"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 6,
    title: "Shipox – Rider App",
    description: "Rider-side courier app featuring order details, optimized pick/drop locations, and proof of delivery capture.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/sr-portrait-Y4LDL7XwDwFG1pKX.png",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 7,
    title: "Shell e-Driver Management",
    description: "Route management, driver and vehicle tracking with full reporting capabilities for fleet management.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/s-dJoZ0pZkLXSM114X.png",
    tech: ["React Native", "Node JS", "MySQL", "Google Maps"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 8,
    title: "Imamia Jantri",
    description: "Islamic calendar and yearbook app with offline capability for reading dates and religious content.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/i-YX4l9OaO8yHzl5zo.png",
    tech: ["React Native", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 9,
    title: "Let's Eat Cayman",
    description: "Full food ordering ecosystem with customer app, rider app, and restaurant dashboard for the Cayman Islands.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/l-Yan1ab7jekTg2ao0.png",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/g-Y4LDgKOeNJT2VOBM.png",
    tech: ["Flutter", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 11,
    title: "AutoParts Market Place",
    description: "Auto parts discovery and ordering platform connecting buyers with vendors across Pakistan.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/a-mjE7DykE5bcKjz0E.png",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/t-A0xlbnXegxtRVQvw.png",
    tech: ["React Native", "Google Maps", "Firebase", "Node JS"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 13,
    title: "Job Recruitment App",
    description: "Brings recruiters and experienced workers onto the same platform for streamlined hiring across industries.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/j-AR0LzQg2QLHZW9wx.png",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
  },
  {
    id: 14,
    title: "Grocery App",
    description: "Mobile app allowing users to order daily groceries with real-time inventory, cart management, and delivery tracking.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/g-AGB2j1lDLqC6p08B.png",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=358,h=280,fit=crop/dWxvxbypWohl3XlB/f-mp8WNODnW7uV1n7m.png",
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
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1530352865467-7b67962d18d8?w=800&q=80",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    github: "https://github.com/CybvegitSoftwareSolutions",
    playstore: "https://play.google.com/store/apps/details?id=com.dokita.cameroon"
  },
  {
    id: 106,
    title: "Humsafar Ride Share",
    description: "Ride-sharing platform for Pakistan with real-time tracking and secure booking.",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?w=800&q=80",
    tech: ["React Native", "Firebase", "Node JS"],
    category: "Mobile",
    appstore: "https://apps.apple.com/ae/app/humsafar-rideshare-pakistan/id1582450557"
  },
  {
    id: 107,
    title: "ViewIT Real Estate",
    description: "Modern real estate platform for property discovery and listings tracking.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.viewit"
  },
  {
    id: 108,
    title: "Asaan Hisab POS",
    description: "Mobile Point of Sale (POS) system for small to medium businesses.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    tech: ["React Native", "Node JS", "MySQL"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.asaanhisab"
  },
  {
    id: 109,
    title: "Rido Ride-Hailing",
    description: "Taxi booking ecosystem with separate Driver and Passenger applications.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    tech: ["React Native", "Node JS", "Firebase"],
    category: "Mobile",
    playstore: "https://play.google.com/store/apps/details?id=com.rido.app"
  },
  {
    id: 110,
    title: "Niyyah Kids",
    description: "Islamic learning and prayer tracking app designed specifically for children.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
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
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/spud-AQExEZ41J0tBEq9D.png",
    quote: "Hamza is an excellent developer with very good communication skills and great reliability. I strongly recommend him.",
  },
  {
    id: 2,
    name: "Bradon Egan",
    role: "Business Owner",
    company: "Washington, United States",
    rating: 5,
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/material-A85e5VrbNyTWB066.png",
    quote: "Hamza's portfolio showcases exceptional skills in full stack mobile app development. Highly recommended!",
  },
  {
    id: 3,
    name: "Bradon Egan",
    role: "Tech Entrepreneur",
    company: "Texas, United States",
    rating: 5,
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=251,h=500,fit=crop/dWxvxbypWohl3XlB/com-YbNBNJwaj4i9gqKY.png",
    quote:
      "Working with Hamza was a fantastic experience. He understood our requirements quickly and built a robust, scalable mobile app. His expertise in React Native and Node JS is exceptional.",
  },
  {
    id: 4,
    name: "John Sumner",
    role: "Project Manager",
    company: "United States",
    rating: 5,
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=248,h=494,fit=crop/dWxvxbypWohl3XlB/comsr-d95154GR53HP9DZd.png",
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
