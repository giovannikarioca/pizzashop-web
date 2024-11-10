import { api } from "@/lib/axios";

export interface RegiesterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegiesterRestaurantBody) {
  await api.post("/restaurants", {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
