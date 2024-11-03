'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Your coupon data
const coupons = [
    {
        title: 'Ladies Tuesday',
        description: 'Enjoy 10% off every Tuesday!',
        image: '/50off.png',
    },
    {
        title: 'Birthday Special',
        description: 'Free car wash on your birthday!',
        image: '/HB.png',
    },
    {
        title: 'Senior Day',
        description: '20% off for seniors every Thursday!',
        image: '/senior.png',
    },
    {
        title: 'Family Package',
        description: 'Discount on car wash for multiple family cars.',
        image: '/family.png',
    },
];

const CouponsCarousel = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-8">Special Coupons</h2>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    height={800}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    className="w-full max-w-2xl mx-auto"
                >
                    {coupons.map((coupon, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                                <Image
                                    width={400}
                                    height={140}
                                    src={coupon.image}
                                    alt={coupon.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{coupon.title}</h3>
                                    <p className="text-gray-700">{coupon.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CouponsCarousel;
