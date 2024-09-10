import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNav() {
    // Create a variable to hook into auth0 provider.
    const { loginWithRedirect } = useAuth0();
    
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-red-800" />
        </SheetTrigger>
        <SheetContent className="space-y-2">
            <SheetTitle>
                <span> Welcome to Gustat!</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
                <Button 
                    className="flex-1 font-bold bg-red-800"
                    onClick={ async () => await loginWithRedirect() } 
                >
                    Log in
                </Button>
            </SheetDescription>
        </SheetContent>

    </Sheet>
  )
}
