const ProductPage = () => {
    const warrantyDetails = [
      {
        warranty: "1 Year Manufacturing Warranty",
        email: "operations@trevifurniture.com",
        coverage: "Warranty Against Manufacturing Defect",
        exclusions:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.",
        duration: "1 Year",
      },
      {
        warranty: "1.2 Year Manufacturing Warranty",
        email: "support@xyz.com",
        coverage: "Warranty of the product is limited to manufacturing defects only.",
        exclusions:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.",
        duration: "3 Months",
      },
    ];
  
    return (
      <>
        {/* Warranty Section */}
        <div className="flex flex-wrap items-start justify-between mt-14 sm:text-[20px] text-[18px] sm:px-6 px-4">
          {/* Column 1 - Warranty Labels */}
          <div className="flex flex-col gap-6 mb-6 sm:mb-0 sm:mx-auto w-full sm:w-1/3">
            <h1 className="text-[24px] sm:text-[28px] font-semibold">Warranty</h1>
            <h4>Warranty Summary</h4>
            <h4>Warranty Service Type</h4>
            <h4>Covered in Warranty</h4>
            <h4>Not Covered in Warranty</h4>
            <h4>Domestic Warranty</h4>
          </div>
  
          {/* Columns for Warranty Details */}
          {warrantyDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 sm:mt-0 sm:mx-auto w-full sm:w-1/3"
            >
              <h4 className="w-full sm:w-[226px]">{item.warranty}</h4>
              <h4 className="w-full sm:w-[241px] ">
                For Warranty Claims or Any Product Related Issues Please Email at{" "}
                {item.email}
              </h4>
              <h4 className="w-full sm:w-[241px] ">{item.coverage}</h4>
              <h4 className="w-full sm:w-[241px] ">{item.exclusions}</h4>
              <h4>{item.duration}</h4>
              <button className="w-full sm:w-[215px] h-[50px] bg-[#B88E2F] text-white mt-6 sm:mt-10 rounded-lg shadow-lg">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default ProductPage;
  