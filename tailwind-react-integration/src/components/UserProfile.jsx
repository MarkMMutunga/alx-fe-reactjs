// UserProfile component - A responsive styled profile card using Tailwind CSS
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      {/* Profile Image - Responsive sizing: smaller on mobile, larger on desktop */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />
      
      {/* User Name - Responsive typography: smaller on mobile, larger on desktop */}
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 text-center">
        John Doe
      </h1>
      
      {/* User Description - Responsive text: smaller on mobile, base on desktop */}
      <p className="text-gray-600 text-sm sm:text-sm md:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
