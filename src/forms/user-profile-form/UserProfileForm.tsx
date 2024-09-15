import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    city: z.string().min(1, "City is required"),
    Country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading }:props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
    });

    return (
        <Form {...form}>
            
        </Form>
    )
}

export default UserProfileForm;