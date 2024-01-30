import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <>

            <div className="relative mr-2  mt-8 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-gray-200 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <Link to={`/products/${product.id}`}>
                    <img className="h-60 w-full object-cover object-center" src={product.image} alt="Product Image" />
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">{product.title}</h2>
                        {/* <p class="mb-2 text-base dark:text-black-300 text-gray-700">Product description goes here.</p> */}

                    </div>
                    <br />
                    <div className="flex items-center absolute bottom-0 ">
                        <p className="mr-2 px-4 text-lg font-semibold text-gray-900 dark:text-black">${product.price}</p>
                        {/* <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p> */}
                        <p className="px-0 ml-auto text-base font-small text-green-500">20% off</p>
                        <a href="#"
                            className="mx-6 text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Add
                            to cart</a>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard