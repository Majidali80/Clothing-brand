import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image"; // Make sure to import the Image component
import Topheader from "../components/Topheader/page";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";


// Define the updated Product type
type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    productImage: {
        asset: {
            url: string;
        };
    };
    tags: string[];
    discountPercentage: number;
    isNew: boolean;
};

export default async function Home() {
    const products: Product[] = await sanityFetch({ query: allproducts });
    
    return (
        <div>
            <Topheader />
            <Navbar />
            <h1 className="text-center text-3xl font-bold my-8">Products</h1>
            {/* Use responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div
                        className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
                        key={product._id}
                    >
                        {/* Image container with relative position and fixed height */}
                        <div className="relative w-full h-64"> {/* Adjust height here if needed */}
                            <Image
                                src={product.productImage.asset.url}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-center mt-4">{product.title}</h2> {/* Product title */}
                        <p className="text-center">{product.description}</p> {/* Product description */}
                        <p className="text-center text-lg font-semibold">${product.price}</p> {/* Price */}
                        <p className="text-center text-gray-500">{product.isNew ? 'New' : ''}</p> {/* New label */}
                        <p className="text-center text-sm text-gray-400">{product.discountPercentage}50 % Off</p> {/* Discount */}
                        <p className="text-center text-sm text-gray-400">{product.tags.join(", ")}</p> {/* Tags */}
                    </div>
                    
                ))}
            </div>
            <Footer />
        </div>
    );
}
