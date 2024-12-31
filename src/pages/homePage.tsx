import HeroSection from "../components/home/homeFeatures/HeroSection";
import HowToRent from "../components/home/homeFeatures/HowToRent";
import WhyChoose from "../components/home/homeFeatures/WhyChoose";
// import About from "../components/home/homeFeatures/About";
// import ContactUs from "../components/home/homeFeatures/ContactUs";
import ServicesSection from "../components/home/homeFeatures/OurServices";
import LuxuryCarExperience from "../components/home/homeFeatures/LuxuryCarExperience";
import SubscribeComponent from "../components/home/homeFeatures/SubscribeComponent";

function HomePage() {
  return (
    <>
      <HeroSection />

      <div className=" flex justify-center items-center mt-20">
        <HowToRent />
      </div>

      <div className="mt-16">
        <WhyChoose />
      </div>

      <ServicesSection />

      <div className=" flex justify-center items-center py-16 px-6">
        <LuxuryCarExperience />
      </div>
      <div className="sm:ml-32 sm:mr-32 sm:h-96 sm:mb-12">
        <SubscribeComponent />
      </div>
      {/* <About/> */}
      {/* <ContactUs/> */}
    </>
  );
}

export default HomePage;
