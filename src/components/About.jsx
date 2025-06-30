import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-blue-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
                <div className="grid grid-cols-1">
                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Vexella Pharmaceuticals Pvt Ltd is a Pvt limited company of General Medicines, Pharmaceutical Medicines, Medical Tablets, etc. These Pharmaceutical Tablets comprise an exact composition of active ingredients that ensures a high level of effectiveness as well as purity. These medicines are highly recommended and prescribed by doctors for treating various ailments.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Pharmaceutical Medicines include nutritional supplements & vitamins, iron compounds, enzymes, haemostatics, anti-allergens, anti-virals, and muscle relaxants. Our Pharmaceutical Medicines conform to international standards of quality and are sourced from carefully selected vendors.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
