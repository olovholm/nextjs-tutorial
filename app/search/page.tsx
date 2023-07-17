import Header from "@/app/search/components/Header";
import SearchSideBar from "@/app/search/components/SearchSideBar";
import RestaurantCard from "@/app/search/components/RestaurantCard";

import {PrismaClient, PRICE, Cuisine, Location} from '@prisma/client'

const prisma = new PrismaClient()

export interface RestaurantCardType {
    id: number,
    name: string,
    main_image: string,
    slug: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE
}

export interface SearchParams {
    city?: string,
    cuisine?: string,
    price?: PRICE
}

const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true
}

const fetchLocations = () => {
    return prisma.location.findMany()
}

const fetchCuisines = () => {
    return prisma.cuisine.findMany()
}

const fetchRestaurantsBySearchParams = (searchParams: SearchParams) => {
    const where: any = {}

    if(searchParams.city) {
        const location = {
            name: {
                equals: searchParams.city.toLowerCase()
            }
        }
        where.location = location
    }

    if(searchParams.cuisine) {
        const cuisine = {
            name: {
                equals: searchParams.cuisine.toLowerCase()
            }
        }
        where.cuisine = cuisine
    }

    if(searchParams.price) {
        const price = {
            name: {
                equals: searchParams.price
            }
        }
        where.price = price
    }

    return prisma.restaurant.findMany({where, select})
}

export default async function Search({searchParams}: { searchParams: SearchParams }) {


    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()
    const restaurants = await fetchRestaurantsBySearchParams(searchParams);
    return (
        <>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar cuisines={cuisines} locations={locations} searchParams={searchParams}/>
                <div className="w-5/6">
                    {restaurants.length ? (
                        restaurants.map(restaurant => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                        ))
                    ) : (
                        <p>Sorry, we found no restaurants in this area</p>
                        )
                    }
                </div>
            </div>
        </>
    )

}
