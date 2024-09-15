import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";


const LoadingButton = () => {
  return (
    <Button disabled>
        <Loader2 className="mr-2-4 w-4 animate-spin" />
        Loading
    </Button>
  );
};

export default LoadingButton;