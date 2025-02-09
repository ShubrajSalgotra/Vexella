import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-blue-500">Vexella Pharmaceutical</h2>
                        <p className="mt-2 text-gray-400">Your health , Our commitment</p>
                    </div>

                    <div className="flex flex-col space-y-2 text-gray-300">
                        <div>
                            <span className="font-semibold text-white">Address: </span>
                            401,Raj Anmol2, L.M Road Borivali West, Mumbai - 400103
                        </div>
                        <div>
                            <span className="font-semibold text-white">Phone: </span>
                            +91 (123) 456-7890
                        </div>
                        <div>
                            <span className="font-semibold text-white">Email: </span>
                            contact@vexella.com
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                    © 2025 Vexella Pharmaceutical Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
