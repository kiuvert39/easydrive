import LoginForm from "../../components/auth/loginForm.component";
import { Typewriter } from "react-simple-typewriter";

function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      {/* Login Form Container */}
      <div className="w-full max-w-lg bg-white p-8 md:shadow-xl rounded-2xl">
        <div className="flex flex-col items-center gap-5">
          <p className="text-md font-normal text-gray-500 text-center mb-12">
            <Typewriter
              words={[
                "Welcome to  easyDrive!",
                "Login to your account ",
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
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
