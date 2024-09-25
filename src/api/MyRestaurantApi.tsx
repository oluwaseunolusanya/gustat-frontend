import { useAuth0 } from "@auth0/auth0-react";  // Hook for authentication
import { useMutation } from "react-query";      // Query hook for API mutation
import { toast } from "sonner";                 // Notifications

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Hook to create a restaurant
export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Post restaurant data to the API
    const useCreateMyRestaurant = async (restaurantFormData: FormData) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });

        if (!response.ok){
            throw new Error("Failed to create restaurant");
        };

        return response.json();
    };

    // Mutation to handle API request
    const { 
        mutate: createRestaurant, 
        isLoading, 
        isSuccess, 
        error,
    } = useMutation(useCreateMyRestaurant);

    // Display success or error notifications
    if(isSuccess){
        toast.success("Restaurant created!");
    };

    if(error){
        toast.error("Unable to update restaurant");
    };

    return { createRestaurant, isLoading };
};