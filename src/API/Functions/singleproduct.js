import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const singleproduct = async (id) => {
    if (!id) {
        throw new Error("Product ID is required");
    }
    try {
        const { data } = await axiosinstance.get(endpoints.getsingle(id));
        return data;
        
    } catch (error) {
        console.error(`Failed to fetch product with ID: ${id}`, error);
        throw error;
    }
};
