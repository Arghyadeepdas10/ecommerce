import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const fetchproduct = async()=>{
    try {

        const {data} = await axiosinstance.get(endpoints.product);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}