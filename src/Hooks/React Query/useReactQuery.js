import { useQuery } from "@tanstack/react-query"
import { fetchproduct } from "../../API/Functions/fetchproduct"
import { singleproduct } from "../../API/Functions/singleproduct"

export const useFetchProductQuery = ()=>{
    return useQuery({
        queryKey: ['product'],
        queryFn: fetchproduct,
    })
}

export const useGetSingleProductQuery = (id)=>{
    return useQuery({
        queryKey: ['product',id],
        queryFn: ()=> singleproduct(id),
    })
}