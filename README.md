# ALX Frontend React Projects

A comprehensive collection of React projects developed as part of the ALX Software Engineering Program. This repository demonstrates various React concepts, from basic components to advanced state management and routing.

## 📚 Projects Overview

### 1. alx-react-app
**Basic React Application**
- First React application setup
- Introduction to JSX and components
- Basic component structure and props
- Foundation for React development

### 2. alx-react-app-new
**Styled React Components with Inline CSS**
- Enhanced version of the basic app
- Inline CSS styling implementation
- UserProfile, Header, MainContent, and Footer components
- Counter component with useState hooks
- Interactive state management demonstration

### 3. alx-react-app-props
**Context API Implementation**
- Refactored prop drilling to use Context API
- UserContext for global state management
- Component hierarchy: App → ProfilePage → UserInfo → UserDetails
- Demonstrates modern React state management patterns

### 4. my-company
**Multi-Page Company Website**
- Complete company website with 4 pages
- React Router implementation for navigation
- Interactive contact form with state hooks
- Professional styling and responsive design
- Components: Home, About, Services, Contact, Navbar, Footer

### 5. recipe-sharing-app
**Advanced Recipe Sharing Application with Zustand**
- Full-featured recipe management platform
- Zustand state management implementation
- Advanced search and filtering capabilities
- User favorites and personalized recommendations
- Complete CRUD operations (Create, Read, Update, Delete)
- React Router for seamless navigation
- Real-time search across recipe titles and descriptions
- Smart recommendation algorithm based on user preferences
- Professional UI with responsive design

### 6. tailwind-react-integration
**Tailwind CSS Integration and Responsive Design**
- Modern React application with Tailwind CSS setup
- Utility-first CSS framework implementation
- Responsive UserProfile component with breakpoint-specific styling
- Interactive hover effects and smooth animations
- Advanced transitions and visual feedback
- Mobile-first responsive design approach
- Professional component styling with Tailwind utilities

### 7. form-handling-react
**Form Handling with Controlled Components and Formik**
- Advanced form handling techniques in React
- Controlled components with individual state management
- Formik integration for complex form validation
- Yup schema validation for robust form validation
- Real-time validation feedback
- Registration form with multiple field types
- Error handling and user experience optimization

### 8. react-query-demo
**Advanced Data Fetching with React Query**
- Modern data fetching and caching with TanStack React Query
- Server state management and background updates
- Optimistic updates and real-time data synchronization
- Error handling and loading states
- JSONPlaceholder API integration
- QueryClient configuration and DevTools
- Advanced caching strategies with stale time and refetch policies

### 9. react-router-advanced
**Advanced Routing with Authentication**
- Complex routing scenarios with React Router v6
- Nested routes and dynamic route parameters
- Protected routes with authentication guards
- Context API for authentication state management
- Custom authentication hooks (useAuth)
- Persistent login state with localStorage
- Professional navigation and route protection patterns

### 10. github-user-search
**GitHub User Search Application**
- Advanced API integration with GitHub API
- Real-time search functionality with debouncing
- Error boundary implementation for robust error handling
- Tailwind CSS for modern responsive design
- User profile display with repositories and statistics
- Loading states and error handling
- Professional search interface and user experience

### 11. recipe-sharing-platform
**Advanced Recipe Platform with Data Management**
- Comprehensive recipe management system
- Advanced filtering and search capabilities
- JSON data management and manipulation
- Component-based architecture with reusable elements
- Professional UI with responsive design
- Recipe creation, editing, and management
- Advanced data visualization and user interaction

### 12. react-todo
**Todo List Application with Comprehensive Testing**
- Complete todo management system with CRUD operations
- Jest and React Testing Library integration
- Comprehensive test suite with 21+ test cases
- Component testing with mocking and user events
- Integration testing and edge case coverage
- Test coverage reporting (97% statement coverage)
- Professional testing patterns and best practices
- AddTodoForm and TodoItem sub-components
- Real-time statistics and state management

## 🛠️ Technologies Used

- **React** ^18.2.0 / ^19.1.0 - Frontend framework
- **React Router DOM** ^6.8.1 / ^7.7.0 - Client-side routing
- **TanStack React Query** ^5.0.0 - Server state management and data fetching
- **Formik** ^2.4.5 - Advanced form library for React
- **Yup** ^1.4.0 - Schema validation library
- **Zustand** ^5.0.6 - Modern state management library
- **Tailwind CSS** ^4.0.0 - Utility-first CSS framework
- **Jest** ^29.7.0 - JavaScript testing framework
- **React Testing Library** ^16.3.0 - React component testing utilities
- **@testing-library/jest-dom** ^6.7.0 - Custom Jest matchers
- **@testing-library/user-event** ^14.6.1 - User interaction simulation
- **Vite** - Build tool and development server
- **ESLint** - Code linting and quality
- **Babel** - JavaScript transpiler for testing
- **PostCSS** - CSS processing tool
- **JavaScript (ES6+)** - Programming language
- **HTML5 & CSS3** - Markup and styling
- **GitHub API** - External API integration
- **JSONPlaceholder API** - Mock REST API for testing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/alx-fe-reactjs.git
cd alx-fe-reactjs
```

2. Navigate to any project directory:
```bash
cd [project-name]
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 📁 Repository Structure

```
alx-fe-reactjs/
├── alx-react-app/                 # Basic React application
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
├── alx-react-app-new/            # Styled components with useState
│   ├── src/
│   │   ├── components/
│   │   │   ├── Counter.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MainContent.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── UserProfile.jsx
│   │   └── App.jsx
│   └── package.json
│
├── alx-react-app-props/          # Context API implementation
│   ├── src/
│   │   ├── UserContext.js
│   │   ├── App.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── UserInfo.jsx
│   │   ├── UserDetails.jsx
│   │   └── UserProfile.jsx
│   └── package.json
│
├── my-company/                   # Multi-page company website
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── recipe-sharing-app/          # Advanced recipe sharing platform
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddRecipeForm.jsx
│   │   │   ├── DeleteRecipeButton.jsx
│   │   │   ├── EditRecipeForm.jsx
│   │   │   ├── FavoriteButton.jsx
│   │   │   ├── FavoritesList.jsx
│   │   │   ├── RecipeDetails.jsx
│   │   │   ├── RecipeList.jsx
│   │   │   ├── RecommendationsList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── recipeStore.js     # Zustand state management
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── tailwind-react-integration/   # Tailwind CSS integration project
│   ├── src/
│   │   ├── components/
│   │   │   └── UserProfile.jsx    # Interactive responsive component
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css             # Tailwind CSS imports
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js            # Tailwind CSS Vite plugin config
│   ├── package.json
│   └── README.md
│
├── form-handling-react/          # Form handling with Formik
│   ├── src/
│   │   ├── components/
│   │   │   ├── RegistrationForm.jsx  # Controlled components
│   │   │   └── formikForm.js         # Formik implementation
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── react-query-demo/            # React Query data fetching
│   ├── src/
│   │   ├── components/
│   │   │   └── PostsComponent.jsx    # useQuery implementation
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── react-router-advanced/       # Advanced routing with auth
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx           # Nested routes
│   │   │   ├── ProfileDetails.jsx
│   │   │   ├── ProfileSettings.jsx
│   │   │   ├── BlogPost.jsx          # Dynamic routes
│   │   │   ├── ProtectedRoute.jsx    # Route protection
│   │   │   └── Login.jsx
│   │   ├── AuthContext.jsx           # Authentication context
│   │   ├── useAuth.js               # Custom authentication hook
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── github-user-search/          # GitHub API integration
│   ├── src/
│   │   ├── components/
│   │   │   ├── Search.jsx            # Search functionality
│   │   │   └── ErrorBoundary.jsx     # Error handling
│   │   ├── services/
│   │   │   └── githubService.js      # API service
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── recipe-sharing-platform/     # Advanced recipe platform
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.jsx
│   │   │   ├── RecipeDetail.jsx
│   │   │   ├── AddRecipeForm.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── data.json                # Recipe data
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── react-todo/                  # Todo app with comprehensive testing
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoList.jsx         # Main todo component
│   │   │   ├── AddTodoForm.jsx      # Form component
│   │   │   └── TodoList.test.js     # Component tests
│   │   ├── __tests__/
│   │   │   └── TodoList.test.jsx    # Test suite
│   │   ├── App.jsx
│   │   ├── setupTests.js            # Jest configuration
│   │   └── main.jsx
│   ├── coverage/                    # Test coverage reports
│   ├── babel.config.json           # Babel configuration
│   ├── package.json
│   └── README.md
│
├── src/                         # Root level components
│   ├── components/
│   │   ├── TodoList.jsx            # TodoList for automated checkers
│   │   └── TodoList.test.js        # Tests for automated checkers
│   ├── __tests__/
│   │   └── TodoList.test.js        # Additional test location
│   ├── App.jsx                     # Root App component
│   └── main.jsx
│
├── README.md                     # This file
└── LICENSE
```
│   │   │   ├── AddRecipeForm.jsx
│   │   │   ├── DeleteRecipeButton.jsx
│   │   │   ├── EditRecipeForm.jsx
│   │   │   ├── FavoriteButton.jsx
│   │   │   ├── FavoritesList.jsx
│   │   │   ├── RecipeDetails.jsx
│   │   │   ├── RecipeList.jsx
│   │   │   ├── RecommendationsList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── recipeStore.js     # Zustand state management
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── tailwind-react-integration/   # Tailwind CSS integration project
│   ├── src/
│   │   ├── components/
│   │   │   └── UserProfile.jsx    # Interactive responsive component
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css             # Tailwind CSS imports
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js            # Tailwind CSS Vite plugin config
│   ├── package.json
│   └── README.md
│
├── README.md                     # This file
└── LICENSE
```

## 🎯 Learning Objectives

### Project 1: alx-react-app
- Setting up React development environment
- Understanding JSX syntax
- Creating functional components
- Working with props and basic component composition

### Project 2: alx-react-app-new
- Implementing inline CSS styling in React
- Using React hooks (useState)
- Creating interactive components
- Managing component state
- Building reusable UI components

### Project 3: alx-react-app-props
- Understanding prop drilling problems
- Implementing React Context API
- Creating context providers and consumers
- Using useContext hook
- Managing global application state

### Project 4: my-company
- Building multi-page applications
- Implementing React Router for navigation
- Creating professional website layouts
- Form handling and validation
- Responsive web design principles

### Project 5: recipe-sharing-app
- Advanced state management with Zustand
- Building complete CRUD applications
- Implementing advanced search and filtering
- Creating personalized user experiences
- Managing complex application state
- Building recommendation algorithms
- Professional UI/UX design patterns

### Project 6: tailwind-react-integration
- Setting up Tailwind CSS with Vite and React
- Understanding utility-first CSS methodology
- Implementing responsive design with breakpoint-specific classes
- Creating interactive hover effects and animations
- Building smooth transitions with duration and easing
- Mobile-first responsive design approach
- Advanced component styling with Tailwind utilities

### Project 7: form-handling-react
- Advanced form handling with controlled components
- Managing individual form field state
- Implementing Formik for complex form logic
- Schema validation with Yup library
- Real-time form validation and error handling
- User experience optimization in forms
- Form submission and data processing

### Project 8: react-query-demo
- Modern server state management with TanStack React Query
- Advanced data fetching and caching strategies
- Background data updates and synchronization
- Error handling and loading state management
- Query invalidation and refetching
- Optimistic updates and real-time data
- Performance optimization with caching

### Project 9: react-router-advanced
- Advanced routing patterns with React Router v6
- Nested route implementation and management
- Dynamic route parameters and path matching
- Protected routes and authentication guards
- Context API for authentication state
- Custom hooks for authentication logic
- Persistent authentication with localStorage

### Project 10: github-user-search
- External API integration with GitHub API
- Advanced search functionality and debouncing
- Error boundary implementation for robust error handling
- Responsive design with Tailwind CSS
- Professional user interface design
- API error handling and user feedback
- Real-time search and data visualization

### Project 11: recipe-sharing-platform
- Complex data management and manipulation
- Advanced filtering and search algorithms
- Component-based architecture patterns
- JSON data handling and processing
- Professional UI design and user experience
- Recipe management system implementation
- Advanced React patterns and best practices

### Project 12: react-todo
- Comprehensive testing with Jest and React Testing Library
- Test-driven development (TDD) approach
- Component testing and integration testing
- User event simulation and interaction testing
- Test coverage analysis and reporting
- Mocking and stubbing in React tests
- Professional testing patterns and best practices
- CRUD operations with real-time state management

## 🚀 Available Scripts

Each project supports the following scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests (where applicable)
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Progress Tracking

- ✅ Basic React Setup and Components
- ✅ Inline CSS Styling and useState Hooks
- ✅ Context API Implementation
- ✅ React Router and Multi-page Applications
- ✅ Advanced State Management with Zustand
- ✅ Tailwind CSS Integration and Responsive Design
- ✅ Form Handling with Controlled Components and Formik
- ✅ Advanced Data Fetching with React Query
- ✅ Advanced Routing with Authentication
- ✅ GitHub API Integration and Error Boundaries
- ✅ Recipe Platform with Advanced Data Management
- ✅ Todo Application with Comprehensive Testing
- ✅ Jest and React Testing Library Implementation
- ✅ Test Coverage and Professional Testing Patterns
- 🔄 Advanced React Patterns and Performance Optimization (In Progress)
- ⏳ Production Deployment and CI/CD (Upcoming)

## 📞 Contact

**Mark Mutunga**
- Email: markmutunga03@gmail.com
- Phone: +254707678643
- Location: Lavington Junction

## 🙏 Acknowledgments

- ALX Software Engineering Program
- React Documentation Team
- Open Source Community
- Fellow ALX Students and Mentors

---

**Part of ALX Software Engineering Program - Frontend Specialization**
