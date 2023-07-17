import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavbar";
import Menu from "@/app/restaurant/[slug]/components/Menu";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const fetchRestaurantMenu = async(slug:string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            items: true
        }})

    if(!restaurant){
        throw new Error("No restaurants")
    }

    return restaurant.items
}
export default async function RestaurantMenu({params}: {params: {slug:string}}) {

    const menu = await fetchRestaurantMenu(params.slug)
    return (
        <>
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <RestaurantNavBar slug={params.slug}/>
                <Menu menu={menu} />
            </div>
        </>
    )
}
