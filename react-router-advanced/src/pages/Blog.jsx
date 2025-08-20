import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Router",
      excerpt: "Learn the basics of routing in React applications with React Router DOM.",
      author: "John Doe",
      date: "2025-08-20",
      category: "React"
    },
    {
      id: 2,
      title: "Advanced Routing Techniques",
      excerpt: "Explore nested routes, protected routes, and dynamic routing patterns.",
      author: "Jane Smith",
      date: "2025-08-19",
      category: "Advanced"
    },
    {
      id: 3,
      title: "Authentication in React Apps",
      excerpt: "Implementing user authentication and protected routes in React applications.",
      author: "Mike Johnson",
      date: "2025-08-18",
      category: "Security"
    },
    {
      id: 4,
      title: "State Management with Context",
      excerpt: "Using React Context API for global state management in routing scenarios.",
      author: "Sarah Wilson",
      date: "2025-08-17",
      category: "State Management"
    },
    {
      id: 5,
      title: "Performance Optimization",
      excerpt: "Optimizing React Router performance with code splitting and lazy loading.",
      author: "David Brown",
      date: "2025-08-16",
      category: "Performance"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Blog Posts</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Click on any blog post to see dynamic routing in action. Each post has a unique URL based on its ID.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '20px' 
      }}>
        {blogPosts.map(post => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ marginBottom: '15px' }}>
              <span style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                textTransform: 'uppercase'
              }}>
                {post.category}
              </span>
            </div>

            <h3 style={{ 
              margin: '0 0 10px 0', 
              fontSize: '18px',
              lineHeight: '1.4'
            }}>
              <Link
                to={`/blog/${post.id}`}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#333'}
              >
                {post.title}
              </Link>
            </h3>

            <p style={{ 
              color: '#666', 
              lineHeight: '1.5',
              marginBottom: '15px'
            }}>
              {post.excerpt}
            </p>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontSize: '14px',
              color: '#888',
              borderTop: '1px solid #eee',
              paddingTop: '10px'
            }}>
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>

            <Link
              to={`/blog/${post.id}`}
              style={{
                display: 'inline-block',
                marginTop: '15px',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3>🔗 Dynamic Routing Demo</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Each blog post link demonstrates dynamic routing using URL parameters. 
          The route pattern <code>/blog/:id</code> captures the post ID and displays 
          the corresponding content. Try clicking on different posts to see the URL change!
        </p>
      </div>
    </div>
  );
};

export default Blog;
