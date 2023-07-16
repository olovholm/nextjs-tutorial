import Link from 'next/link'
import NavBar from "@/app/components/NavBar";
import Header from "@/app/search/components/header";
import SearchSideBar from "@/app/search/components/SearchSideBar";
import RestaurantCard from "@/app/search/components/RestaurantCard";


export default function Page() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>

                {/* HEADER */}
                <Header/>

                <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                    <SearchSideBar />
                    <div className="w-5/6">
                        <RestaurantCard />
                    </div>
                </div>
            </main>
        </main>

    )

}
