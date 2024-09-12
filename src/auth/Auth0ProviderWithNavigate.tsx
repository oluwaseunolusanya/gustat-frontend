import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";

// Define the Props type, indicating that this component accepts children
type Props = {
    children: React.ReactNode;
};

// Main component definition
const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const { createUser,  } = useCreateMyUser();

    // Retrieve environment variables for Auth0 configuration
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    // Check if for missing required Auth0 settings
    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialise auth0"); 
    }

    // Callback function to handle what happens after Auth0 redirects back to the app post-login
    const onRedirectCallback = (appState?: AppState, user?: User) => {
        // Log the user information (if available) to the console for debugging or further processing
        // console.log("USER", user);
        if(user?.sub && user?.email){
            createUser({auth0Id: user.sub, email: user.email});
        }
    };

    // Render the Auth0Provider component, passing the domain, clientId, and redirect URI
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri, // Redirect users back to the specified URL after authentication
            }}
            onRedirectCallback={onRedirectCallback} // Handle actions after successful login and redirection
        >
            {children} {/* Render any child components passed to this wrapper */}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
