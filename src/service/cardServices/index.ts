import axiosInstance from "@/lib/AxiosInostance";
import axios from "axios";


export const getMyCard = async (userId:string) => {
  const { data } = await axios.get(`http://localhost:5000/api/v1/products/my-card/${userId}`);
  return data.data; 
};


export const addToCard = async (userID :string,productId: string) => {
    
  const { data } = await axios.post(`http://localhost:5000/api/v1/products/add-to-card/${userID}/${productId}`);
  
  return data; 
};

// Remove a product from the card
// Remove a product from the card
export const removeFromCard = async (userID: string, productId: string, newProducts: any) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/v1/products/remove/${userID}/${productId}`, 
      {
        data: newProducts, // This sends the data in the body
      }
    );
    return data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      throw new Error(error.response?.data.message)}
      
    // Log the error
    console.error('Error while removing product from card:', error);

  }
};
