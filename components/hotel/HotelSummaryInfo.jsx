import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";

const HotelSummaryInfo = ({ fromListPage, info }) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{info?.name}</h2>
        <p>📍 {info?.city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={info?.id} />
          <HotelReviewNumber id={info?.id} />
        </div>
        <div>
          <span className="bg-yellow-300 p-1 rounded-md">{info?.propertyCategory} Star Property</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${(info?.highRate + info?.lowRate) / 2}/night</h2>
        <p className=" text-right">Per Night for 1 Room</p>
        {
          fromListPage ? (<Link href={`/hotels/${info?.id}`} className="px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" style={{ backgroundColor: "#FF6A28" }}>Details</Link>) : (<button className="px-4 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" style={{ backgroundColor: "#FF6A28" }}>Book</button>)
        }
      </div>
    </>
  );
};

export default HotelSummaryInfo;
