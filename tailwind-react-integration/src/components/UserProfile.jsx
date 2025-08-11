// UserProfile component - A styled profile card using Tailwind CSS
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      {/* Profile Image - Circular and centered */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      
      {/* User Name - Large blue heading */}
      <h1 className="text-xl text-blue-800 my-4 text-center">
        John Doe
      </h1>
      
      {/* User Description - Gray text, smaller font */}
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
