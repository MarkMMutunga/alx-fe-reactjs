import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog posts data (in real app, this would come from API/database)
  const blogPosts = {
    1: {
      id: 1,
      title: "Getting Started with React Router",
      author: "John Doe",
      date: "2025-08-20",
      content: `
        React Router is a powerful library for handling routing in React applications. 
        It allows you to create single-page applications with multiple views and navigation.
        
        In this post, we'll explore the basics of React Router and how to implement 
        nested routes, dynamic routes, and protected routes in your applications.
        
        Key features of React Router include:
        - Declarative routing
        - Dynamic route matching
        - Nested routes
        - Route guards and protection
        - Browser history management
      `,
      tags: ["React", "Router", "JavaScript", "Frontend"]
    },
    2: {
      id: 2,
      title: "Advanced Authentication Patterns",
      author: "Jane Smith",
      date: "2025-08-19",
      content: `
        Authentication is a critical aspect of modern web applications. 
        This post covers advanced patterns for implementing authentication 
        in React applications using context and protected routes.
        
        We'll discuss:
        - JWT token management
        - Refresh token strategies
        - Role-based access control
        - Persistent authentication state
        - Security best practices
        
        These patterns will help you build secure and user-friendly applications.
      `,
      tags: ["Authentication", "Security", "React", "JWT"]
    },
    3: {
      id: 3,
      title: "Building Scalable React Applications",
      author: "Mike Johnson",
      date: "2025-08-18",
      content: `
        As React applications grow in complexity, it becomes important to 
        structure them in a way that promotes maintainability and scalability.
        
        This post explores:
        - Component composition patterns
        - State management strategies
        - Code splitting and lazy loading
        - Performance optimization techniques
        - Testing strategies for large applications
        
        By following these practices, you can build applications that scale 
        with your team and business requirements.
      `,
      tags: ["React", "Scalability", "Architecture", "Performance"]
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>404 - Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            display: 'inline-block',
            marginTop: '20px'
          }}
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Navigation */}
      <div style={{ marginBottom: '20px' }}>
        <Link 
          to="/blog"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Post Header */}
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px', fontSize: '32px' }}>
          {post.title}
        </h1>
        <div style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
          By <strong>{post.author}</strong> • {post.date}
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span
              key={tag}
              style={{
                backgroundColor: '#e9ecef',
                color: '#495057',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Post Content */}
      <article style={{ lineHeight: '1.6', color: '#333' }}>
        <div style={{ fontSize: '16px', whiteSpace: 'pre-line' }}>
          {post.content}
        </div>
      </article>

      {/* Post Footer */}
      <footer style={{ 
        marginTop: '40px', 
        paddingTop: '20px', 
        borderTop: '1px solid #eee',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            ← Go Back
          </button>
          <Link
            to="/blog"
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              display: 'inline-block'
            }}
          >
            All Posts
          </Link>
        </div>
        
        <p style={{ color: '#666', fontSize: '14px', fontStyle: 'italic' }}>
          💡 This is a demo blog post for testing dynamic routing in React Router
        </p>
      </footer>
    </div>
  );
};

export default BlogPost;
