import React from 'react';
import BookAppointmentButton from '../BookAppointmentButton/BookAppointmentButton';

const pricingOptions = [
    {
        title: 'Basic Wash',
        description: 'Quick exterior wash and dry.',
        price: '$18',
        features: ['Exterior Wash', 'Rinse & Dry'],
    },
    {
        title: 'Interior Cleaning',
        description: 'Comprehensive interior vacuuming and cleaning.',
        price: '$25',
        features: ['Vacuuming', 'Dusting', 'Seat Cleaning'],
    },
    {
        title: 'Full Service',
        description: 'Complete inside and outside cleaning.',
        price: '$35',
        features: ['Exterior Wash', 'Interior Cleaning', 'Waxing'],
    },
    {
        title: 'Premium Wash & Wax',
        description: 'Full wash with waxing and polishing.',
        price: '$50',
        features: ['Full Wash', 'Polish & Wax', 'Tire Shine'],
    },
];

const Pricing = () => {
    return (
        <section className="bg-sky-900 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl text-white font-bold text-center mb-8">Our Pricing Packages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingOptions.map((option, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
                            <p className="text-gray-700 mb-4">{option.description}</p>
                            <div className="text-3xl font-bold text-blue-900 mb-4">{option.price}</div>
                            <ul className="mb-6">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-600">
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
                            <BookAppointmentButton />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
