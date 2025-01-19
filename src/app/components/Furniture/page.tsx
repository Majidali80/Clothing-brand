import { sanityFetch } from "@/sanity/lib/fetch";
import { furniture } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

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
    const products: Product[] = await sanityFetch({ query: furniture });
    
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-8 mt-64">HOUSE & DECOR</h1>
            <div className="flex flex-col items-center gap-[10px]">
                <h1 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
                    FURNITURE
                </h1>
                <p className="w-full sm:w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
                    A Wide Range Of House Hold Furniture
                </p>
            </div>
            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div
                        className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
                        key={product._id}
                    >
                        {/* Image container */}
                        <div className="relative w-full h-64">
                            <Image
                                src={product.productImage.asset.url}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-center mt-4">{product.title}</h2>
                        <p className="text-center">{product.description}</p>
                        <p className="text-center text-lg font-semibold">${product.price}</p>
                        <p className="text-center text-gray-500">{product.isNew ? 'New' : ''}</p>
                        <p className="text-center text-sm text-gray-400">{product.discountPercentage}% Off</p>
                        <p className="text-center text-sm text-gray-400">{product.tags.join(", ")}</p>
                        {/* Add a button that navigates to /product */}
                        <Link href="/product">
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                View All Product
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
