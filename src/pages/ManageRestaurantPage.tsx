import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";  // Custom hook to create a restaurant
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();   // Get mutation and loading state
  const { restaurant } = useGetMyRestaurant();

  // Render the form with createRestaurant as the onSave handler and loading state
  return (
     <ManageRestaurantForm 
        restaurant={restaurant} 
        onSave={createRestaurant} 
        isLoading={isLoading} 
      />
  );
};

export default ManageRestaurantPage;