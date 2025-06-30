import React from 'react';
import { productList } from '../constants';

const ProductList = () => {
  return (
    <section id="product" className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Our Products
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {productList.map((product) => (
                <div key={product.id} className="relative bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    <p className="text-blue-500 font-semibold">{product.composition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
};

export default ProductList;
