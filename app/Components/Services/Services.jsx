import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Basic Wash',
        description: 'A quick exterior wash to remove dirt and grime.',
        image: '/services/wash1.jpg'
    },
    {
        title: 'Interior Cleaning',
        description: 'Thorough vacuuming and cleaning of the interior.',
        image: '/services/wash2.jpg'
    },
    {
        title: 'Full Service',
        description: 'Complete inside and outside cleaning for a fresh look.',
        image: '/services/wash3.jpg'
    },
    {
        title: 'Wax & Polish',
        description: 'Add shine and protection with premium wax and polish.',
        image: '/services/wash4.jpg'
    },
];

const Services = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl  font-bold text-center mb-8">Our Carwash Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image width={200} height={150} src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
