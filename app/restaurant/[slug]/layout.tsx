import Header from "@/app/restaurant/[slug]/components/Header";
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavbar";
import Menu from "@/app/restaurant/[slug]/components/Menu";

export default function RestaurantLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Header/>
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
        </main>
    )
}
