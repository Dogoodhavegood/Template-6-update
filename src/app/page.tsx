// // import Hero from "@/components/Hero";
// // import TheRange from "@/components/TheRange";
// // import OurProducts from "@/components/OurProducts";
// // import HeroSlider from "@/components/HeroSlider";
// // import Furniro from "@/components/Furniro";
// import Link from "next/link";
// import { getAllProducts } from "@/sanity/lib/data";
// import {Product} from "@/sanity/lib/data";



// export default async function Home() {

// const products: Product[] = await getAllProducts();
// console.log(products);

//   return (

//     <>
//     <div>
// <h1>  All Products</h1>

// {products.map((product) => (
//   <div key={product._id}>
//     <p>{product.title}</p>
//     <p>{product.description}</p>
//     <p>{product.price}</p>
//     <p>{product.tags}</p>
    
//     </div>
// ))}
    

//   //   <main>
//   //       {/* <Hero/>
//   //       <TheRange/>
//   //       <OurProducts/>
//   //       <HeroSlider/>
//   //       <Furniro/> */}
        
 
        
//   //       <Link href="http://localhost:3001/Home">Home</Link>
//   // <Link href="http://localhost:3001/Shop">Shop</Link>
//   // <Link href="http://localhost:3001/Blog">Blog</Link>
//   // <Link href="http://localhost:3001/Contact">Contact</Link>
//   //   </main>

//   </>


//   );
// }






// Importing necessary components and data
import Link from "next/link";
import { getAllProducts, Product } from "@/sanity/lib/data";

export default async function Home() {
  // Fetch products
  const products: Product[] = await getAllProducts();

  console.log(products); // Debugging: Log the fetched products

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>

        {/* Render products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow-md max-w-md"
            >
              <img src={product.productImageUrl} alt="" />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700 text-sm mt-2">
                {product.description.substring(0, 100)}...
              </p>
              <p className="text-green-600 font-medium mt-2">Price:{product.price}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Example navigation links */}
        <div className="mt-6">
          <Link href="http://localhost:3001/Home" className="text-blue-500 hover:underline">Home</Link>{" "}
          |{" "}
          <Link href="http://localhost:3001/Shop" className="text-blue-500 hover:underline">
            Shop
          </Link>{" "}
          |{" "}
          <Link href="http://localhost:3001/Blog" className="text-blue-500 hover:underline">
            Blog
          </Link>{" "}
          |{" "}
          <Link href="http://localhost:3001/Contact" className="text-blue-500 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
