import Search from "@/components/search/Search";
import Filter from "@/components/search/Filter";
import HotelList from "@/components/hotel/HotelList";

const HotelListPage = () => {
    return (
        <>
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="max-w-7xl mx-auto w-full px-4 items-center py-12 ">
                    <Search fromList={true} />
                </div>
            </section>
            <section className="py-12">
                <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-12">
                    <Filter />
                    <HotelList />
                </div>
            </section>
        </>
    );
};

export default HotelListPage;
