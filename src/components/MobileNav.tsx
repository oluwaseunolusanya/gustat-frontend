import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
    // Create a variable to hook into auth0 provider.
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-red-800" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                {isAuthenticated ? (
                    <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-red-800"/>
                        {user?.email}
                    </span>
                ) : (
                    <span> Welcome to Gustat!</span>
                )}
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
                {isAuthenticated ? (
                    <MobileNavLinks />
                )  : (
                    <Button 
                        className="flex-1 font-bold bg-red-800"
                        onClick={ async () => await loginWithRedirect() } 
                    >
                        Log in
                    </Button> 
                )}
            </SheetDescription>
        </SheetContent>

    </Sheet>
  );
};
