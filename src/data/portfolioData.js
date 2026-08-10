export const portfolioData = {
  name: 'Anteneh Wondwosen',
  title: 'Fullstack Developer',
  tagline: 'Building scalable web applications with the MERN stack. Software Engineering student at AASTU, passionate about creating impactful digital solutions.',
  
  stats: {
    projects: '20+',
    experience: '3yr',
    clients: '15+'
  },

  about: {
    bio: `I'm a passionate Fullstack Developer with 3+ years of experience crafting beautiful, 
    functional web applications using the MERN stack (MongoDB, Express.js, React, Node.js). 
    As a Software Engineering student at Addis Ababa Science and Technology University (AASTU), 
    I combine academic knowledge with practical experience to build solutions that make a difference.`,
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },

projects: [
  {
    id: 1,
    title: 'Graduation Party Gallery',
    description: 'A Next.js platform for sharing event photos where users can upload, view, like, and comment on graduation party photos. Deployed and fully functional.',
    category: 'Fullstack',
    github: 'https://github.com/A-proG-spec/graduation-party-gallery',
    tech: ['Next.js', 'React', 'MongoDB']
  },
  {
    id: 2,
    title: 'BloomCare',
    description: 'An e-commerce medicine platform where users can navigate pharmacies on a map, purchase medicine from different pharmacies, with an admin dashboard and payment integration.',
    category: 'E-Commerce',
    github: 'https://github.com/A-proG-spec/bloomcare',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Fitness Workout Planner',
    description: 'A backend for a fitness SaaS application, providing workout planning, tracking, and scheduling functionalities.',
    category: 'SaaS',
    github: 'https://github.com/A-proG-spec/fitness-workout-planner',
    tech: ['Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 4,
    title: 'Olympus AI Project Manager',
    description: 'An AI-powered personal project manager that helps users organize, track, and manage their projects intelligently.',
    category: 'AI Product',
    github: 'https://github.com/A-proG-spec/olympus-personal-ai-project-manager',
    tech: ['AI', 'Node.js', 'React']
  },{
    id: 5,
    title: 'ChatterBox - Real-time Chat App',
    description: 'A full-featured real-time chat application enabling instant messaging with typing indicators, read receipts, and online presence. Built with the MERN stack and Socket.IO for seamless, low-latency communication.',
    category: 'Real-time Application',
    github: 'https://github.com/A-proG-spec/chatting-app',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'JWT']
}
],
  blogPosts: [
    {
      id: 1,
      title: 'Building Scalable MERN Applications',
      excerpt: 'Learn best practices for structuring large-scale MERN applications with proper folder architecture and state management.',
      date: 'Jan 15, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends in web development including AI-powered development, WebAssembly, and the evolution of frameworks.',
      date: 'Jan 10, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Mastering React Performance',
      excerpt: 'Advanced techniques for optimizing React applications including memoization, code splitting, and virtual DOM insights.',
      date: 'Jan 5, 2025',
      readTime: '6 min read'
    }
  ],

  social: {
    github: 'https://github.com/A-proG-spec',
    instagram: 'https://instagram.com/yourusername',
    telegram: 'https://t.me/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  },

  navItems: [
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ]
};