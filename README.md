# Portfolio Website

Personal portfolio showcasing my frontend development work and projects.

[View Live Site →](https://your-portfolio-url.vercel.app)

## 🎯 About

This portfolio demonstrates my skills in React, modern JavaScript, and frontend development. Built from scratch to showcase my projects with a focus on user experience, accessibility, and clean code architecture.

## ✨ Features

- **Custom Scroll Animations** - Smooth entrance effects using Intersection Observer API
- **Responsive Design** - Optimized for mobile, tablet, and desktop viewing
- **Accessible Navigation** - ARIA labels, semantic HTML, and keyboard support
- **Project Showcase** - Dynamic filtering and detailed project cards
- **Professional Contact Section** - Multiple ways to connect with downloadable resume
- **Modern UI/UX** - Clean design with attention to typography and spacing

## 🛠️ Built With

- **React** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Grid, Flexbox, custom animations
- **Intersection Observer API** - Scroll-triggered animations
- **Vercel** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/keandre8843/keandres-portfolio.git
cd keandres-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in browser

### Building for Production

```bash
npm run build
```

## 📂 Project Structure

```
keandres-portfolio/
├── public/
│   ├── resume.pdf          # Downloadable resume
│   └── index.html
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── ProjectsCards.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── Hooks/
│   │   └── useScrollAnimation.js  # Custom scroll animation hook
│   ├── data/
│   │   └── ProjectsData.js        # Project information
│   ├── assets/                    # Images and static files
│   ├── App.js
│   ├── App.css                    # Main styles
│   └── scrollAnimations.css       # Animation styles
└── package.json
```

## 🎨 Key Components

### Custom Scroll Animations
Implemented using Intersection Observer API for performance-optimized scroll effects:
```javascript
const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
```

### Responsive Layout
Mobile-first design with breakpoints for optimal viewing on all devices:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Dynamic Project Filtering
Filter projects by technology stack with smooth transitions and state management.

## 📱 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Background and professional summary
3. **Projects** - Showcase of development projects with live demos and code links
4. **Skills** - Technical skills and technologies
5. **Contact** - Multiple contact methods and resume download
6. **Footer** - Social links and navigation

## 🌐 Deployment

This project is deployed on Vercel with continuous deployment from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/keandre8843/keandres-portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**KeAndre Sadler**

- Portfolio: [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)
- LinkedIn: [linkedin.com/in/keandre-sadler-b80161112](https://linkedin.com/in/keandre-sadler-b80161112)
- GitHub: [github.com/keandre8843](https://github.com/keandre8843)
- Email: keandresadler@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons and animations crafted with attention to accessibility
- Built as part of my journey transitioning into frontend development

---

⭐ Star this repo if you find it helpful!