import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavbar";
import Title from "@/app/restaurant/[slug]/components/Title";
import Rating from "@/app/restaurant/[slug]/components/Rating";
import Description from "@/app/restaurant/[slug]/components/Description";
import Images from "@/app/restaurant/[slug]/components/Images";
import Reviews from "@/app/restaurant/[slug]/components/Reviews";
import ReservationCard from "@/app/restaurant/[slug]/components/ReserervationCard";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

interface Restaurant {
    id: number,
    name: string,
    images: string[],
    description: string,
    slug: string
}

const fetchRestaurantBySlug = async (slug : string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        }, select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true
        }
    })

    if(!restaurant){
        throw new Error("Could not find error")
    }

    return restaurant
}
export default async function RestaurantDetails({params}: {params: {slug: string}}) {


    const restaurant = await fetchRestaurantBySlug(params.slug)

    console.log(restaurant)

    return (
        <>
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <RestaurantNavBar slug={restaurant.slug} />
                        <Title name={restaurant.name}/>
                        <Rating />
                        <Description description={restaurant.description} />
                        <Images images={restaurant.images} />
                        <Reviews />
                    </div>
                    <div className="w-[27%] relative text-reg">
                        <ReservationCard />
                    </div>
        </>
    )

}
