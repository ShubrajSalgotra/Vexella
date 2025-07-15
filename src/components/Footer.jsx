import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-blue-500">Vexella Pharmaceuticals Pvt Ltd</h2>
                        <p className="mt-2 text-gray-400">Your health , Our commitment</p>
                    </div>

                    <div className="flex flex-col space-y-2 text-gray-300">
                        <div>
                            <span className="font-semibold text-white">Address: </span>
                            A/401,Raj Anmol 2, L.M road borivali w, Mumbai-400103
                        </div>
                        <div>
                            <span className="font-semibold text-white">Administrative Address: </span>
                            Plot 84/7A , Talab Tillo ,  Bohri , Jammu   180002
                        </div>
                        {/* <div>
                            <span className="font-semibold text-white">Phone: </span>
                            +91 7895108392, +91 7895108392
                        </div> */}
                        <div>
                            <span className="font-semibold text-white">Email: </span>
                            vexellapharmaceuticals@gmail.com 
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    © 2025 Vexella Pharmaceuticals Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
