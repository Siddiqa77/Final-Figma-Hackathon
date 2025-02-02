import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

// Component using the useUser hook
const MyComponent =() => {
    const { isLoaded, isSignedIn } = useUser();
  
    // Handle loading state
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
  
    // Render based on authentication status
    return (
      <div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton />
        )}
      </div>
    );
  }
  
  export default MyComponent;