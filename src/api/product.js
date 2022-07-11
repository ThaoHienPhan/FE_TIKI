
import axiosClient from "./axiosClient";

const productApi = {
    async getAll(params) {
       const newParams = {...params};
       newParams._start = !params._page || params._page<=1
       ?0
       :(params._page-1) * (params._limit || 50);
       
       const productList = await axiosClient.get('/Product/get', {params:newParams});
      
       return{
           data: productList,
           pagination : {

               page:params._page,
               limit:params._limit,
             
           }
       }
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },
    add(data) {
        const url = '/products';
        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data)
    },
    remove(id) {
        const url =  `/products/${id}`;
        return axiosClient.delete(url)
    },
    async search(string){
        const response = await axiosClient.post("/Product/search", string)
        return response
    }
};
export default productApi





