import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  // Create a variable to hook into auth0 provider.
  const { loginWithRedirect } = useAuth0();

  return (
    <Button 
        variant="ghost" 
        className="font-bold hover:text-red-800 hover:bg-white"
        onClick={ async () => await loginWithRedirect() } 
    >
        Log in
    </Button>
  )
}

export default MainNav;