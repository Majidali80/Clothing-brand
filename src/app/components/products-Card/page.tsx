import CardText from "../cards-text/page";

export default function ProductCard() {
  return (
    <div className="w-[1340px] h-[1652px] flex justify-center bg-[#ffffff]">
      <div className="w-full sm:w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col mt-2 gap-[10px] justify-center items-center"> {/* Reduced mt-48 to mt-16 */}
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {["/pc0.png","/pc1.png","/pc2.png","/pc3.png",
            "/pc4.png","/pc5.png","/pc6.png","/pc7.png",
          ].map((pic, index) => (
            <div key={index} className="w-[240px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <img src={pic} alt={`picture${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <CardText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
