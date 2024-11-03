'use client'
import Link from 'next/link';
import BookAppointmentButton from '../BookAppointmentButton/BookAppointmentButton';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-5">
            <div className="container mt-10 mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-1/3 mb-6">
                        <h1 className="text-3xl font-semibold">GET IN TOUCH</h1>
                        <p className="text-lg">Three Brothers Car Wash</p>
                        <p className="text-lg">773-902-2450</p>
                        <p className="text-lg mb-5">
                       
                            <a className="text-white" href="mailto:sales@barciastech.com">
                            threebrotherscw@gmail.com
                            </a>
                        </p>
                        <BookAppointmentButton />
         
                        <div className="flex space-x-4 mt-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=61567845171778"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-400 transition"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-2xl hover:text-gray-400 transition"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <iframe
                            className="shadow-lg rounded w-full h-64"
                            title="barciastech"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=9641%20S%20Ewing%20Chicago%20IL%2060617&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="container text-center pt-5 pb-3">
                <Link className="text-white" href="/">
                    Three Brothers CarWash LLC, 2020
                </Link>
            </div>
        </footer>
    );
}
