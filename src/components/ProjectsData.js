export const projects = [
  {
    id: 1,
    title: "Little Lemon Restaurant",
    description: "Full-featured restaurant booking application with React Router, form validation, and responsive design. Includes accessible navigation, mobile hamburger menu, and comprehensive unit testing.",
    technologies: ["React", "React Router", "React Testing Library", "CSS3", "JavaScript"],
    liveUrl: "https://your-little-lemon.vercel.app", // Update with your actual URL
    githubUrl: "https://github.com/keandre8843/Little-Lemon-Booking",
    image: "/images/little-lemon-preview.png", // Add screenshot to public/images folder
    featured: true,
    status: "completed",
    highlights: [
      "Unit tested with React Testing Library",
      "Accessible navigation with ARIA labels and semantic HTML",
      "Mobile-responsive with hamburger menu",
      "Form validation using useReducer pattern",
      "Multiple page routing with React Router"
    ],
    category: "web-app"
  },
  {
    id: 2,
    title: "Calorie Tracker",
    description: "TypeScript-powered calorie tracking app with meal suggestions based on remaining daily calories. Features API integration for nutrition data and local storage persistence.",
    technologies: ["TypeScript", "React", "API Integration", "LocalStorage"],
    liveUrl: null,
    githubUrl: null,
    image: "/images/coming-soon-placeholder.png",
    featured: false,
    status: "coming-soon",
    highlights: [
      "TypeScript for type-safe development",
      "Nutrition API integration",
      "Smart meal suggestions algorithm",
      "Progress visualization with charts"
    ],
    category: "web-app",
    expectedDate: "December 2025"
  },
  {
    id: 3,
    title: "UX-Focused Design System",
    description: "Component library with Figma prototype showcasing accessible, reusable UI components. Demonstrates design-to-code workflow and UX best practices.",
    technologies: ["React", "Figma", "CSS3", "Design Systems"],
    liveUrl: null,
    githubUrl: null,
    image: "/images/coming-soon-placeholder.png",
    featured: false,
    status: "coming-soon",
    highlights: [
      "Complete Figma prototype included",
      "Accessible component patterns",
      "Design token system",
      "Interactive component documentation"
    ],
    category: "design",
    expectedDate: "December 2025"
  }
];