function UserProfile(props) {
    return (
        <div style={{ 
            border: '1px solid gray', 
            padding: '20px', 
            margin: '20px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                color: 'blue',
                fontSize: '24px',
                marginBottom: '10px'
            }}>{props.name}</h2>
            <p style={{ 
                fontSize: '16px',
                margin: '8px 0'
            }}>Age: <span style={{ 
                fontWeight: 'bold',
                color: '#333'
            }}>{props.age}</span></p>
            <p style={{ 
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#666'
            }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
