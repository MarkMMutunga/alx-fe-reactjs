# GitHub User Search Application

A modern, responsive React application for searching GitHub users with advanced filtering capabilities. Built with React, Vite, Tailwind CSS, and the GitHub API.

## 🚀 Live Demo

**[View Live Application](https://your-app-name.vercel.app)** *(URL will be updated after deployment)*

## ✨ Features

### 🔍 **Dual Search Modes**
- **Basic Search**: Find individual users by exact username
- **Advanced Search**: Multi-criteria filtering with location and repository count

### 🎯 **Advanced Filtering**
- Search by username or name
- Filter by location (e.g., "San Francisco", "London")
- Filter by minimum repository count
- Combine multiple criteria for precise results

### 📱 **Modern UI/UX**
- Responsive design with Tailwind CSS
- GitHub-inspired professional styling
- Accessible form controls and focus states
- Loading states and error handling
- Mobile-optimized interface

### 📊 **Rich User Profiles**
- User avatars and profile information
- Repository, follower, and following statistics
- Bio and location display
- Direct links to GitHub profiles

### 🔄 **Pagination**
- Load more functionality for large result sets
- Efficient API usage with pagination
- Smooth user experience for browsing results

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0, Vite
- **Styling**: Tailwind CSS with custom GitHub color palette
- **API**: GitHub REST API v3
- **HTTP Client**: Axios
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- GitHub account (optional, for API rate limit increase)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkMMutunga/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Add your GitHub token for higher rate limits
   VITE_APP_GITHUB_API_KEY=your_github_token_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APP_GITHUB_API_KEY` | GitHub Personal Access Token | No* |
| `VITE_APP_GITHUB_API_URL` | GitHub API Base URL | No |

*While not required, adding a GitHub token increases rate limits from 60 to 5,000 requests per hour.

### Getting a GitHub Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token with `public_repo` scope
3. Add it to your `.env` file

## 🚀 Deployment

This application is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Build Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   └── Search.jsx          # Main search component
├── services/
│   └── githubService.js    # GitHub API integration
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles with Tailwind
```

## 🔌 API Integration

### GitHub API Endpoints Used
- `GET /users/{username}` - Fetch individual user data
- `GET /search/users?q={query}` - Advanced user search with filters

### Rate Limits
- **Without token**: 60 requests/hour
- **With token**: 5,000 requests/hour

## 🎨 UI Components

### Search Interface
- Toggle between Basic and Advanced search
- Form validation and error handling
- Responsive design for all screen sizes

### Results Display
- Individual user cards for basic search
- List view with pagination for advanced search
- User avatars, stats, and profile links
- Empty states and error messages

## 🧪 Testing

The application has been thoroughly tested for:
- ✅ API integration and error handling
- ✅ Responsive design on multiple devices
- ✅ Form validation and user input
- ✅ Loading states and error scenarios
- ✅ GitHub API rate limit handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the ALX Frontend React.js program.

## 🙏 Acknowledgments

- GitHub API for providing comprehensive user data
- Tailwind CSS for the utility-first styling approach
- Vite for the fast development experience
- Vercel for seamless deployment

---

**Built with ❤️ by [Mark Mutunga](https://github.com/MarkMMutunga)**
