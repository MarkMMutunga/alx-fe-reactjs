# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Recipe Sharing Platform

A modern recipe sharing platform built with React and Tailwind CSS where users can browse, add, and share their favorite recipes.

## 🚀 Features

- Browse and discover recipes
- Add new recipes to the platform
- Detailed recipe views
- Responsive design with Tailwind CSS
- Modern React with Vite build tool

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd recipe-sharing-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
recipe-sharing-platform/
├── src/
│   ├── components/          # React components (upcoming)
│   ├── assets/             # Static assets
│   ├── App.jsx             # Main application component
│   ├── App.css             # Component styles
│   ├── index.css           # Global styles with Tailwind
│   └── main.jsx            # Application entry point
├── public/                 # Public assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Styling

This project uses Tailwind CSS for styling:
- Utility-first CSS framework
- Responsive design out of the box
- Custom configuration in `tailwind.config.js`
- Tailwind directives imported in `src/index.css`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Next Steps

This is the initial setup for the Recipe Sharing Platform. Upcoming features will include:
- Recipe list components
- Recipe detail views
- Add recipe form
- Search and filter functionality
- User authentication
- Recipe categories

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Built with ❤️ using React and Tailwind CSS**
