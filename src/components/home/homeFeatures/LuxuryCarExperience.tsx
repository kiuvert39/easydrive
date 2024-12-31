import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const LuxuryCarExperience = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Set animation duration
      once: false, // Ensure the animation happens only once when scrolled into view
    });
  }, []);
  return (
    <div className="flex flex-col items-center p-6 md:p-10 -mt-24 bg-white">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-24">
        Feel the best experience <br /> with our luxury car
      </h1>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* First Feature */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-4">
            <img
              src="/images/shape.png"
              alt="Trusted and free"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ pointerEvents: "none" }}
            />
            <i className="absolute inset-0 flex items-center justify-center text-black text-2xl z-10">
              <img src="/images/Vector.png" alt="" />
            </i>
          </div>
          <h2 className="text-base sm:text-3xl font-bold mb-2">
            Book with flexibility
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3">
            Easily find cars and book with no change fees.
          </p>
        </div>

        {/* Second Feature */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-4">
            <img
              src="/images/shape.png"
              alt="Trusted and free"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ pointerEvents: "none" }}
            />
            <i className="absolute inset-0 flex items-center justify-center text-black text-2xl z-10">
              <img src="/images/settings.png" alt="" width={30} />
            </i>
          </div>
          <h2 className="text-base sm:text-3xl font-bold mb-2">
            Trusted and free
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3">
            We’re completely free to use – no hidden charges or fees.
          </p>
        </div>

        {/* Third Feature */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-4">
            <img
              src="/images/shape.png"
              alt="We know travel"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ pointerEvents: "none" }}
            />
            <i className="absolute inset-0 flex items-center justify-center text-black text-2xl z-10">
              <img src="/images/user_circle.png" alt="" width={30} />
            </i>
          </div>
          <h2 className="text-base sm:text-3xl font-bold mb-2">
            We know travel
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3">
            With 10 years of experience, we're ready to help find your perfect
            car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarExperience;
