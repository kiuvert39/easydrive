import { Input } from "../../ui/input";
import { Button } from "../../ui/button";



const SubscribeComponent = () => {
    return (
        <div
          className="relative  bg-cover bg-center  shadow-lg overflow-hidden sm:mx-8 lg:mx-16 mr-4 ml-4 mb-7 md:h-96 "
          style={{ backgroundImage: "url('/images/driver.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
    
        
          <div className="relative flex flex-col items-center justify-center text-center px-6 py-12 sm:px-16 sm:py-20 space-y-6">
            <h1 className=" text-xl sm:text-4xl font-extrabold text-white -mb-5">
              Become a Driver
            </h1>
            <p className="text-sm sm:text-lg text-gray-100">
              Your Time. Your Goals. You're The Boss.
            </p>
            <p className="text-xs sm:text-sm text-gray-100 ">
              Subscribe and join our community today.
            </p>
    
          
          <div className="flex sm:flex-row items-center w-full max-w-lg sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-white"
              />
              <Button className="sm:w-auto rounded-md bg-[#970747] text-[#FFEBF1] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] font-medium transition">
                Subscribe
              </Button>
            </div> 
          </div>
        </div>
    )
  };

export default SubscribeComponent;
