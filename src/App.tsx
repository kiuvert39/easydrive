import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/layout";
import CarRentalProcess from "./pages/Booking/car";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/homePage";
import AboutUs from "./pages/aboutUs";

// Lazy-loaded components
const LoginPage = React.lazy(() => import("./pages/auth/login.page"));
const SignUpPage = React.lazy(() => import("./pages/auth/signup.page"));
const Profile = React.lazy(() => import("./pages/Booking/rentals.page"));

const car = {
  name: "Tesla Model 3",
  image: "https://example.com/car.jpg",
  description: "A sleek and eco-friendly electric car.",
  pricePerDay: 100,
  model: "Model 3",
  license: "ABC123",
  imageUrl: "https://example.com/car.jpg",
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signin" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="bookings" element={<Profile />} />
            <Route path="Profile" element={<ProfilePage/>} />
            <Route path="rents" element={<CarRentalProcess car={car} />} />
            <Route path="about" element={<AboutUs/>} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
