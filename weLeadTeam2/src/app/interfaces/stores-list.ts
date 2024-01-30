import { FoodCategories } from "./food-categories";

export interface StoresList {
    id: string;
    storeName: string;
    category: string;
    address: string;
    products: FoodCategories;
    avatar: string;
}
