import { datashop } from '@/app/Dataforshop';
import Image from 'next/image';

const AsgaardPage = () => {
    return (
        // <>
        //     <div>
        //         {/* Other elements */}
        //     </div>
        //     <div className='w-full border-b border-[#9F9F9F] mt-20'></div>
        //     <div className='h-[744px]'>
        //         <div className='flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-16 mt-10 text-[24px]'>
        //             <h1 className='font-semibold'>Description</h1>
        //             <span className='text-[#9F9F9F]'>Additional Information</span>
        //             <span className='text-[#9F9F9F]'>Reviews [5]</span>
        //         </div>
        //         <div className='flex items-center flex-col mt-10'>
        //             <p className='text-[#9F9F9F] w-full sm:w-[1026px] h-auto sm:h-[48px] px-4'>
        //                 Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        //             </p>
        //             <br />
        //             <p className='text-[#9F9F9F] w-full sm:w-[1026px] h-auto sm:h-[96px] px-4'>
        //                 Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        //             </p>
        //         </div>
        //         <div className='flex flex-col gap-6 sm:flex-row items-center justify-around mt-10'>
        //             <Image
        //                 src="/images/sofa-fir.png"
        //                 alt="sofa1"
        //                 width={605}
        //                 height={348}
        //             />
        //             <Image
        //                 src="/images/sofa2.png"
        //                 alt="sofa2"
        //                 width={605}
        //                 height={348}
        //             />
        //         </div>
        //     </div>
        //     <h1 className='text-[36px] font-semibold text-center mt-16'>Related Products</h1>
        //     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8'>
        //         <div className='w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center'>
        //             <Image
        //                 src="/images/table.png"
        //                 alt="table-img"
        //                 width={285}
        //                 height={301}
        //             />
        //             <h3 className='text-[24px] font-semibold text-[#3A3A3A] mt-4'>Syltherine</h3>
        //             <p className='text-center'>Stylish cafe chair</p>
        //             <div className='flex justify-center items-center gap-2'>
        //                 <span className='text-[20px] font-semibold'>Rp 2.500.000</span>
        //                 <span className='text-[16px] line-through text-gray-500'>Rp 3.500.000</span>
        //             </div>
        //         </div>
        //         {/* Other related products */}
        //     </div>
        // </>
        <div className="bg-[#F5F5F5] py-12">
        <div className=" mx-auto px-4">
            {/* <!-- Header --> */}
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Products</h2>

            {/* <!-- Products Grid --> */}
            <div className=" w-[full] gA sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Product 1 --> */}
                <div className=" grid grid-cols-4 gap-5 p-10 text-center  mx-auto">
                    {datashop.map((data) => <div key={data.id} className=" border shadow-custom mt-4 mx-auto space-10 flex flex-col items-center">

                        <img src={data.image} alt="Syltherine" className="w-[400px] h-48 object-cover rounded-md" />
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-30%</span>
                        <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
                        <p className="text-sm text-gray-500">{data.category}</p>
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-lg gap-2 font-bold text-gray-900">{data.newPrice}</p>
                            <p className="text-sm text-gray-400 line-through">{data.oldPrice}</p>
                        </div>
                        <button className=" flex items-center justify-center mt-2 mb-6 productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
                        
                    </div>)}
                </div>

                {/* <!-- Additional products follow a similar structure... --> */}
            </div>
        </div>

    </div>
    );
};

export default AsgaardPage;
