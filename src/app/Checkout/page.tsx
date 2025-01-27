"use client";
import { useState } from "react";
import { useCart } from "../context/cartContext"; // Import the cart context
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

export default function CheckoutPage() {
  const { cart } = useCart(); // Access the cart data from the context

  // Calculate subtotal, shipping, and total
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10; // Flat rate shipping in USD
  const total = subtotal + shipping;

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    telephone: "",
    country: "Pakistan",
    zone: "",
    city: "",
    address1: "",
    comment: "",
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Info Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Main Info</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <select
                    id="country"
                    name="country"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option>Pakistan</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zone" className="block text-sm font-medium text-gray-700">Zone</label>
                  <select
                    id="zone"
                    name="zone"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.zone}
                    onChange={handleInputChange}
                  >
                    <option>-- Please Select --</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.address1}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.comment}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">Subscribe</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg shadow-lg hover:bg-green-700"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Sub-Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Flat Shipping Rate</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-lg hover:bg-blue-700">Update</button>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg shadow-lg hover:bg-green-700 mt-4"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
