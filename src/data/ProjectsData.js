import littleLemonImage from '../assets/Little-Lemon-WebPage.png';
import comingSoonImage from '../assets/coming-soon-placeholder.png';

export const projects = [
  {
    id: 1,
    title: "Little Lemon Restaurant",
    description: "Full-featured restaurant booking application with React Router, form validation, and responsive design. Includes accessible navigation, mobile hamburger menu, and comprehensive unit testing.",
    technologies: ["React", "React Router", "React Testing Library", "CSS3", "JavaScript"],
    liveUrl: "https://little-lemon-booking-murex.vercel.app/", // Update with your actual URL
    githubUrl: "https://github.com/keandre8843/Little-Lemon-Booking",
    image: littleLemonImage,
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
    image: comingSoonImage,
    featured: false,
    status: "coming-soon",
    highlights: [
      "TypeScript for type-safe development",
      "Nutrition API integration",
      "Smart meal suggestions algorithm",
      "Progress visualization with charts"
    ],
    category: "web-app",
    expectedDate: "Spring 2026"
  },
  {
    id: 3,
    title: "UX-Focused Design System",
    description: "Component library with Figma prototype showcasing accessible, reusable UI components. Demonstrates design-to-code workflow and UX best practices.",
    technologies: ["React", "Figma", "CSS3", "Design Systems"],
    liveUrl: null,
    githubUrl: null,
    image: comingSoonImage,
    featured: false,
    status: "coming-soon",
    highlights: [
      "Complete Figma prototype included",
      "Accessible component patterns",
      "Design token system",
      "Interactive component documentation"
    ],
    category: "design",
    expectedDate: "Spring 2026"
  }
];