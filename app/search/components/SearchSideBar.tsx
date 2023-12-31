import Link from 'next/link'
import {Location, Cuisine, PRICE} from '@prisma/client'


export default function SearchSideBar({locations, cuisines, searchParams}: {
    locations: Location[],
    cuisines: Cuisine[],
    searchParams: { city?: string, cuisine?: string, price?: PRICE }
}) {
    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2">Region</h1>
                {locations.map((location) => (
                    <Link key={location.id} href={{
                        pathname: "/search",
                        query:
                            {
                                ...searchParams,
                                city: location.name
                            }
                    }} className="font-light text-reg">{location.name} </Link>))
                }

            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map((cuisine) => (
                    <Link key={cuisine.id} href={{
                        pathname: "/search",
                        query: {
                            ...searchParams,
                            cuisine: cuisine.name
                        }
                    }} className="font-light text-reg">{cuisine.name} </Link>))
                }

            </div>
            
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    <button className="border w-full text-reg font-light rounded-l p-2">
                        $
                    </button>
                    <button
                        className="border-r border-t border-b w-full text-reg font-light p-2"
                    >
                        $$
                    </button>
                    <button
                        className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
                    >
                        $$$
                    </button>
                </div>
            </div>
        </div>
    )
}
