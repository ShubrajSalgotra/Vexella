import React from 'react'
import logo from '../assets/hero-image.jpg'

const Home = () => {
  return (
    <>
      <section id='home' className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center min-h-[85vh] justify-center">
  
          <div className="lg:w-1/2 text-center lg:text-left my-5">
            <p className="text-gray-500 text-lg font-medium mb-2">Vexella Pharmaceuticals</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Your <span className="text-blue-500">Health</span>, Our Commitment
            </h1>
            <p className="text-gray-600 text-base mb-6">
              Vexella Pharmaceutical combines innovative research with ethical practices to develop effective, accessible medications.
              Our commitment to honest science and patient care drives us to create treatments that truly improve lives
            </p>
            <a
              href="#product"
              className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Products 
            </a>
          </div>

  
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={logo}
              alt="Hero Image"
              className="w-full max-w-md lg:max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home