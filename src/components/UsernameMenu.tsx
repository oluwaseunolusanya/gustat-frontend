import { useAuth0 } from "@auth0/auth0-react";
import { 
        DropdownMenu, 
        DropdownMenuContent, 
        DropdownMenuItem, 
        DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-red-800 gap-2">
            <CircleUserRound className="text-red-800" />
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link 
                    to="/manage-restaurant" 
                    className="font-bold hover:text-red-800"
                >
                   Manage Restaurant
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link 
                    to="/user-profile" 
                    className="font-bold hover:text-red-800"
                >
                   User Profile
                </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button
                    onClick={() => logout()} 
                    className="flex flex-1 font-bold bg-red-800"
                >
                    Log out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;