import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button 
        variant="ghost" 
        className="font-bold hover:text-red-800 hover:bg-white"
    >
        Log in
    </Button>
  )
}

export default MainNav;