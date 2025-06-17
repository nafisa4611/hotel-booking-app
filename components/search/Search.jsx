const Search = ({fromList}) => {
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination" className="w-full px-4 py-2 rounded-md border border-black/20 bg-transparent">
                <option value="Bali">Bali</option>
                <option value="Bali">Cox's Bazar</option>
                <option value="Bali">Sylhet</option>
                <option value="Bali">Saint Martin</option>
                <option value="Bali">Bali</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="checkin" id="checkin" className="w-full px-4 py-2 rounded-md border border-black/20 bg-transparent"/>
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      <button className="bg-primary px-8 py-3 rounded-md block mx-auto text-white font-bold -translate-y-1/2 shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" style={{ backgroundColor: "#FF6A28" }}>🔍️ {fromList ? "Modify Search": "Search"}</button>
    </>
  );
};

export default Search;
