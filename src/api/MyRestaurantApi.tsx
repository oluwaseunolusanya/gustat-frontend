import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";            // Hook for authentication
import { useMutation, useQuery } from "react-query";      // Query hook for API mutation
import { toast } from "sonner";                           // Notifications

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Hook to get restaurant data
export const useGetMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if(!response.ok){
            throw new Error("Failed to get restaurant");
        };
        return response.json();
    };

    const { data: restaurant, isLoading } = useQuery(
        "fetchMyRestaurant",
        getMyRestaurantRequest
    );

    return { restaurant, isLoading };
};

// Hook to create a restaurant
export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Post restaurant data to the API
    const createMyRestaurantRequest = async (
        restaurantFormData: FormData
    ) : Promise<Restaurant> => {
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
    } = useMutation(createMyRestaurantRequest);

    // Display success or error notifications
    if(isSuccess){
        toast.success("Restaurant created!");
    };

    if(error){
        toast.error("Unable to update restaurant");
    };

    return { createRestaurant, isLoading };
};

// Hook to update a restaurant
export const useUpdateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Update restaurant data to the API
    const updateMyRestaurantRequest = async (
        restaurantFormData: FormData
    ): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });

        if (!response.ok){
            throw new Error("Failed to update restaurant");
        };

        return response.json();
    };

    // Mutation to handle API request
    const { 
        mutate: updateRestaurant, 
        isLoading, 
        isSuccess, 
        error,
    } = useMutation(updateMyRestaurantRequest);

    // Display success or error notifications
    if(isSuccess){
        toast.success("Restaurant updated!");
    };

    if(error){
        toast.error("Unable to update restaurant");
    };

    return { updateRestaurant, isLoading };
};