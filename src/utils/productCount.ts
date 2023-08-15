import { getAllResources } from "../services/ProductCRUD"

export const productCount = async () => {
    const data = await getAllResources();
    let i = 0;
    for(const product of data){
        i += product.quantite;
    }
    return i;
}