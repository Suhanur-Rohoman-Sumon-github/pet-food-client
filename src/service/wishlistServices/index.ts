
import axios from "axios";

export const addToWishList = async (userID :string,productId: string) => {
    
  const { data } = await axios.post(`http://localhost:3000/api/v1/products/add-wishList/${userID}/${productId}`);
  
  return data; 
};
export const getMyWishList = async (userID :string) => {
    console.log(userID);
    
  const { data } = await axios.get(`http://localhost:3000/api/v1/products/my-wishList/${userID}`);
  
  return data; 
};