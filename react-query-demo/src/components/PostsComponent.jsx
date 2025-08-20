import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Fetch function for posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using React Query's useQuery hook
  const {
    data: posts,
    isLoading,
    error,
    refetch,
    isFetching,
    dataUpdatedAt
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes - data is fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes - cache persists for 10 minutes
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Loading Posts...</h2>
        <div style={{ fontSize: '18px' }}>🔄 Fetching data from API...</div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <h2>Error Loading Posts</h2>
        <p>Error: {error.message}</p>
        <button 
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1>Posts from JSONPlaceholder API</h1>
        <p style={{ color: '#666' }}>
          Demonstrating React Query data fetching, caching, and updating
        </p>
        
        {/* Cache information */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '15px',
          fontSize: '14px'
        }}>
          <strong>Cache Info:</strong> Last updated at {new Date(dataUpdatedAt).toLocaleTimeString()}
          {isFetching && <span style={{ color: '#007bff' }}> (Refreshing...)</span>}
        </div>

        {/* Control buttons */}
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            style={{
              padding: '10px 20px',
              backgroundColor: isFetching ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isFetching ? 'not-allowed' : 'pointer',
              marginRight: '10px'
            }}
          >
            {isFetching ? 'Refreshing...' : 'Refresh Data'}
          </button>
          
          <span style={{ fontSize: '12px', color: '#666' }}>
            ({posts?.length || 0} posts loaded)
          </span>
        </div>
      </div>

      {/* Posts grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {posts?.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <h3 style={{ 
              color: '#333', 
              fontSize: '16px', 
              marginBottom: '10px',
              lineHeight: '1.4'
            }}>
              {post.title}
            </h3>
            <p style={{ 
              color: '#666', 
              fontSize: '14px', 
              lineHeight: '1.5',
              marginBottom: '10px'
            }}>
              {post.body}
            </p>
            <div style={{ 
              fontSize: '12px', 
              color: '#999',
              borderTop: '1px solid #eee',
              paddingTop: '8px'
            }}>
              <strong>Post ID:</strong> {post.id} | <strong>User ID:</strong> {post.userId}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions for testing cache */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#e9ecef',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h3>🧪 Testing React Query Features:</h3>
        <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
          <li><strong>Caching:</strong> Navigate to another component and come back - data loads instantly from cache</li>
          <li><strong>Stale Time:</strong> Data stays fresh for 5 minutes without refetching</li>
          <li><strong>Background Updates:</strong> Click "Refresh Data" to trigger a manual refetch</li>
          <li><strong>Loading States:</strong> Watch the loading indicators during data fetching</li>
          <li><strong>Network Tab:</strong> Open browser dev tools → Network tab to see reduced API calls due to caching</li>
        </ul>
      </div>
    </div>
  );
};

export default PostsComponent;
