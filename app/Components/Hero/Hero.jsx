import React from "react";
import BookAppointmentButton from "../BookAppointmentButton/BookAppointmentButton";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
        height: "calc(100vh - 4rem)",
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          THREE BROTHERS HAND CARWASH
        </h1>
        <p className="text-lg md:text-xl mb-8">CALL US: (773) 345-9876</p>

        <BookAppointmentButton />
      </div>
    </section>
  );
};

export default Hero;
