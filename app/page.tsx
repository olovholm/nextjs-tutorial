import Header from "@/app/components/Header";
import RestaurantCard from "@/app/components/RestaurantCard";
import { PrismaClient, Cuisine, Location, PRICE, Review } from '@prisma/client'

const prisma = new PrismaClient();

export interface RestaurantCardType {
    id: number,
    name: string,
    main_image: string,
    slug: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE,
    reviews: Review[]
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
    const restaurants  = await prisma.restaurant.findMany({
        select: {
            id: true,
            name: true,
            main_image: true,
            slug: true,
            cuisine: true,
            location: true,
            price: true,
            reviews: true
        }
    })

    return restaurants
}

export default async function Home() {
    const restaurants = await fetchRestaurants()
    return (
        <main>
            <Header/>
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            ))}
        </main>
    )
}

