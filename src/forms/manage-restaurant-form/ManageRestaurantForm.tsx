// Import Zod for schema validation
import { z } from "zod";

// Define schema for form validation
const formSchema = z.object({
    restaurantName: z.string({ required_error: "Restaurant name is required" }),  
    city: z.string({ required_error: "City is required" }), 
    country: z.string({ required_error: "Country is required" }), 
    deliveryPrice: z.coerce.number({ 
        required_error: "Delivery price is required",  
        invalid_type_error: "Must be a valid number" 
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "Estimated delivery time is required",  
        invalid_type_error: "Must be a valid number" 
    }),
    cuisines: z.array(z.string()).nonempty({ message: "Please select at least one item" }), 
    menuItems: z.array(z.object({
        name: z.string().min(1, "Name is required"),  
        price: z.coerce.number().min(1, "Price is required")  
    })),
    imageFile: z.instanceof(File, { message: "Image is required" }) 
});

// Type definition for the component's props
type Props = {
    onSave: (restaurantFormData: FormData) => void;  // Save handler function
    isLoading: boolean;  // Loading state flag
};

// Component for managing the restaurant form
const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  return ;
};

export default ManageRestaurantForm;
