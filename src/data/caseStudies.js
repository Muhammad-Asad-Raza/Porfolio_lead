/* ── Image imports (used in case study detail pages) ──────
   Import here so Vite processes them at build time.         */

export const caseStudies = [
  {
    id: 1,
    slug: 'life-health-tech',
    category: 'Healthcare',
    accent: '#7c3aed',
    accentRgb: '124,58,237',
    accentLight: 'rgba(124,58,237,0.1)',
    title: 'Health Tech',
    subtitle: 'Life Case Study',
    tagline: 'The Smart Platform That Connects Patients With Available Pharmacies In Real Time And Delivers Medicines Faster.',
    /* Hero phones — 3 screens shown side-by-side */
    phoneSrc: '/case-studies/homeleft.png',
    solutionGrid: '/case-studies/multiple-mobile.png',
    duration: 'Nov 1 – Dec 15',
    role: 'Full Stack Mobile Developer',
    platform: 'iOS & Android',

    responsibilities: [
      'User Research & Analysis',
      'Competitor Analysis',
      'Wireframe / Prototype',
      'Collect / Refine Feedback',
      'Full Stack Development',
    ],
    deliverables: [
      'iOS & Android application',
      'Backend REST API',
      'Real-time chat & video',
      'Admin dashboard',
    ],
    aspects: [
      'Deadline: Nov 1 – Dec 15',
      'Look: Usable, fun, easy to use',
      'User-level: Non-tech savvy',
      'First release: MVP',
    ],

    problem: `Have you ever struggled to find a nearby pharmacy in an emergency, or waited days for a doctor's appointment that could have been handled the same day? Accessing quality healthcare — whether it's getting medications delivered, consulting a doctor, or managing prescriptions — remains frustratingly slow and disconnected for millions of people.`,
    problemBold: `Situations like these occur because there is no single, unified platform that connects patients, pharmacies, doctors, and delivery riders in one seamless experience.`,
    challenge: `To identify the most common pain points people face when accessing everyday healthcare services, and come up with a development solution that simplifies the entire journey — from finding a doctor to getting medicine delivered right to your door.`,

    problems: [
      "Unawareness. People don't know what pharmacies or doctors are available nearby.",
      "No easy booking. There's no simple way to schedule a doctor's appointment on demand.",
      "The misconception that good healthcare is always expensive and time-consuming.",
      "Lost or forgotten prescriptions.",
      "No delivery option for medications.",
      "Disconnected services — doctors, pharmacies, and riders all operating separately.",
      "No real-time tracking of medication orders.",
      "Difficulty finding the right specialist by availability and location.",
      "Language barriers when using healthcare platforms.",
      "No quick-access tools or contacts during a medical emergency.",
    ],

    solutionTitle: 'Explore all nearby pharmacies',
    solutionIteration: 'Iteration 2 - Time was reduced',
    solutionDesc: `All the nearby pharmacies are now automatically listed and mapped based on the user's current location.`,
    improvements: [
      'Time was significantly reduced by 70%.',
      'Exploring and reaching out to a pharmacy is now usable and intuitive.',
    ],

    results: [
      { value: '70%', label: 'Faster appointments' },
      { value: '4.8★', label: 'User rating' },
      { value: '10k+', label: 'Active users' },
      { value: '98%', label: 'Uptime' },
    ],
  },

  {
    id: 2,
    slug: 'pak-rail-live',
    category: 'Transport',
    accent: '#0ea5e9',
    accentRgb: '14,165,233',
    accentLight: 'rgba(14,165,233,0.1)',
    title: 'Transport Tracking',
    subtitle: 'Pak Rail Case Study',
    tagline: 'A Real-Time Railway Tracking Platform Built For The People Of Pakistan — Not For Profit.',
    phoneSrc: '/projects/pak-rail-live.jpeg',
    solutionGrid: null,
    duration: 'Jan 2019 – Dec 2020',
    role: 'Full Stack Mobile Developer',
    platform: 'iOS & Android',

    responsibilities: [
      'System Architecture Design',
      'React Native Development',
      'GPS & Live Tracking Integration',
      'Push Notification System',
      'App Store Publishing',
    ],
    deliverables: [
      'iOS & Android apps (50k+ downloads)',
      'Real-time GPS tracking backend',
      'Push notification service',
      'Train schedule database',
    ],
    aspects: [
      'Users: Millions of Pakistan Railway passengers',
      'Goal: Free public utility app',
      'Tracking: Live GPS updates every 10s',
      'First release: MVP → Production',
    ],

    problem: `Pakistan Railway serves millions of passengers daily, yet there was no reliable way to know where a train was in real-time. Passengers would wait for hours at stations with no information, miss connections, and feel completely lost about arrival times.`,
    problemBold: `Existing solutions were outdated, offline, or required manual checking at stations — creating massive inconvenience for everyday commuters.`,
    challenge: `Build a completely free, reliable, real-time railway tracking system that works across Pakistan's entire railway network — with no infrastructure from Pakistan Railways itself.`,

    problems: [
      'No real-time train location data available to passengers.',
      'Departure and arrival times constantly change with no notifications.',
      'Station schedules were paper-based and inaccurate.',
      'No way to plan journeys effectively without being at the station.',
      'Connectivity issues in remote areas required offline fallback.',
      'Multiple train lines with complex routing logic.',
      'Alerts for pre-arrival notifications were non-existent.',
      'No unified app covering all trains and stations.',
    ],

    solutionTitle: 'Live Train Tracking For All Of Pakistan',
    solutionIteration: 'Iteration 2 - Performance improved',
    solutionDesc: `A GPS-powered live tracking system shows every train's current location, speed, and next stops on an interactive map.`,
    improvements: [
      'Live GPS updates every 10 seconds.',
      'Pre-arrival notifications working reliably for all major routes.',
      '50,000+ downloads within the first 6 months.',
    ],

    results: [
      { value: '50k+', label: 'Downloads' },
      { value: '4.5★', label: 'Store rating' },
      { value: '10s', label: 'GPS refresh' },
      { value: '100%', label: 'Free' },
    ],
  },

  {
    id: 3,
    slug: 'lets-eat-cayman',
    category: 'Food Tech',
    accent: '#ef4444',
    accentRgb: '239,68,68',
    accentLight: 'rgba(239,68,68,0.1)',
    title: 'Food Delivery',
    subtitle: "Let's Eat Cayman Case Study",
    tagline: "A Full Food Ordering Ecosystem — Customer App, Rider App & Restaurant Dashboard All In One.",
    phoneSrc: '/projects/lets-eat-cayman.jpeg',
    solutionGrid: null,
    duration: '2021 – 2022',
    role: 'Full Stack Mobile Developer',
    platform: 'iOS & Android',

    responsibilities: [
      'Three-App Architecture Design',
      'Customer App Development',
      'Rider App Development',
      'Restaurant Dashboard',
      'Real-time Order Tracking',
    ],
    deliverables: [
      'Customer iOS & Android app',
      'Rider delivery app',
      'Restaurant management dashboard',
      'Node.js & Firebase backend',
    ],
    aspects: [
      'Market: Cayman Islands',
      'Apps: 3 interconnected apps',
      'Stack: React Native + Node.js + Firebase',
      'Live on: Play Store & App Store',
    ],

    problem: `The Cayman Islands had no unified food ordering platform that connected restaurants, customers, and delivery riders in real time. Restaurants relied on phone orders, riders had no routing system, and customers had no visibility into their order status.`,
    problemBold: `This fragmented experience meant lost orders, cold food, unhappy customers, and missed revenue for restaurants.`,
    challenge: `Design and build a complete food delivery ecosystem — three separate apps that work in perfect sync — from order placement to real-time tracking to doorstep delivery.`,

    problems: [
      'No unified digital platform for food ordering in Cayman.',
      'Restaurant order management was manual and error-prone.',
      'Riders had no route optimization or assignment system.',
      'Customers had zero visibility after placing an order.',
      'No way to browse menus, deals, or compare restaurants.',
      'Payment processing was cash-only with no digital option.',
      'Restaurant dashboards were non-existent.',
      'No real-time communication between all three parties.',
    ],

    solutionTitle: 'A Three-App Ecosystem That Works As One',
    solutionIteration: 'Iteration 2 - Delivery optimized',
    solutionDesc: `Three interconnected apps: customer app for browsing and ordering, rider app for route-optimized delivery, and restaurant dashboard for managing orders.`,
    improvements: [
      'Order fulfillment time reduced by 40%.',
      'Restaurants saw 3× more digital orders within first month.',
      'Customer satisfaction: 4.7/5 average rating.',
    ],

    results: [
      { value: '3×', label: 'More orders' },
      { value: '40%', label: 'Faster delivery' },
      { value: '4.7★', label: 'User rating' },
      { value: '3', label: 'Apps shipped' },
    ],
  },
];
