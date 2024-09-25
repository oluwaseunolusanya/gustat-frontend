import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";  // Custom hook to create a restaurant
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();   // Get mutation and loading state

  // Render the form with createRestaurant as the onSave handler and loading state
  return <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />;
};

export default ManageRestaurantPage;