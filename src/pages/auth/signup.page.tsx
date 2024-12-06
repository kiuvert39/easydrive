import { Typewriter } from "react-simple-typewriter"
import RegisterForm from "../../components/auth/register.component"


function SignUpPage() {
  return (
    <div>
         <div className="min-h-screen flex justify-center items-center ">
      {/* Login Form Container */}
      <div className="w-full max-w-lg bg-white p-8 md:shadow-xl rounded-2xl">
        <div className="flex flex-col items-center gap-5">
          <p className="text-md font-normal text-gray-500 text-center mb-12">
            <Typewriter
              words={[
                "Welcome to  easyDrive!",
                "Create an Account Today!",
                "Happy Driving!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={3000} 
            />
          </p>
        </div>
        <RegisterForm/>
      </div>
    </div>
    </div>
  )
}

export default SignUpPage
