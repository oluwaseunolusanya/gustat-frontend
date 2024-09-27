import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";  // Custom hook to create a restaurant
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();   // Get mutation and loading state
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant(); 

  const isEditing = !!restaurant;

  // Render the form with createRestaurant as the onSave handler and loading state
  return (
     <ManageRestaurantForm 
        restaurant={restaurant} 
        onSave={isEditing ? updateRestaurant : createRestaurant} 
        isLoading={isCreateLoading || isUpdateLoading} 
      />
  );
};

export default ManageRestaurantPage;