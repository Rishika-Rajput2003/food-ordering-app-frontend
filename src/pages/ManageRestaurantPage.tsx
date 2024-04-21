import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"

const  ManageRestaurantPage=()=> {
  const {createRestaurant, isLoading: isCreateLoading}= useCreateMyRestaurant();
  const {restaurant}= useGetMyRestaurant();
  const {updateRestaurant, isLoading: isUpdateLoading}= useUpdateMyRestaurant();

  const isEditing= !!restaurant;

  // if rest exists then true else false

  return (
    <ManageRestaurantForm 
    restaurant= {restaurant}
    onSave={isEditing ? updateRestaurant: createRestaurant}
    isLoading={isCreateLoading|| isUpdateLoading} />
  );
}

export default ManageRestaurantPage;