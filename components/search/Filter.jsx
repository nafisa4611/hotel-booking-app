const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Sort By</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="highToLow">
              <input type="checkbox" name="highToLow" id="highToLow" />
              Price High to Low
            </label>

            <label htmlFor="lowToHigh">
              <input type="checkbox" name="lowToHigh" id="lowToHigh" />
              Price Low to high
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="range1">
              <input type="checkbox" name="range1" id="range1" className="mx-1" />$ 13 - $ 30
            </label>

            <label htmlFor="range2">
              <input type="checkbox" name="range2" id="range2" className="mx-1" />$ 30 - $ 60
            </label>

            <label htmlFor="range3">
              <input type="checkbox" name="range3" id="range3" className="mx-1" />$ 60 - $ 97
            </label>

            <label htmlFor="range3">
              <input type="checkbox" name="range3" id="range3" className="mx-1" />$ 97 - $ 152
            </label>

            <label htmlFor="range4">
              <input type="checkbox" name="range4" id="range4" />$ 152 - $ 182
            </label>

            <label htmlFor="range5">
              <input type="checkbox" name="range5" id="range5" className="mx-1" />$ 182+
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Star Category</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="fiveStar">
              <input type="checkbox" name="fiveStar" id="fiveStar" className="mx-1"/>5 Star
            </label>

            <label htmlFor="fourStar">
              <input type="checkbox" name="fourStar" id="fourStar" className="mx-1"/>4 Star
            </label>

            <label htmlFor="threeStar">
              <input type="checkbox" name="threeStar" id="threeStar" className="mx-1"/>3 Star
            </label>

            <label htmlFor="twoStar">
              <input type="checkbox" name="twoStar" id="twoStar" className="mx-1"/>2 Star
            </label>

            <label htmlFor="oneStar">
              <input type="checkbox" name="oneStar" id="oneStar" className="mx-1"/>1 Star
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="wifi">
              <input type="checkbox" name="wifi" id="wifi" />
              Wi-fi
            </label>

            <label htmlFor="swimmingPool">
              <input type="checkbox" name="swimmingPool" id="swimmingPool" />
              Swimming Pool
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
