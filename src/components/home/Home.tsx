import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gradientTextStyle = {
    background: "linear-gradient(to right, #f500f5, #1e5eff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <p
        className="font-Pattaya text-6xl flex justify-center items-center"
        style={gradientTextStyle}
      >
        Find Your Perfect Match with Us
      </p>
      <div
        className="h-full py-32 px-20 flex w-full bg-cover row-span-7"
        style={{ backgroundImage: 'url("images/home.png")' }}
      >
        <div
          className="p-8 flex flex-col h-auto justify-center items-center gap-8 rounded"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <p className="font-Pattaya text-white text-2xl text-center">
            At our matrimonial site, we believe that everyone deserves a chance
            at true love and happiness. Our platform is designed to bring
            together individuals seeking meaningful relationships, guided by our
            sophisticated matchmaking technology and dedicated support team.
            Whether you’re looking for companionship, love, or a life partner,
            we offer a safe and welcoming environment to meet your perfect
            match. Join our community today and start your journey towards a
            beautiful future with someone special. Let us help you find the love
            story you’ve always dreamed of.
          </p>
          <Button
            onClick={() => navigate("/participant_list")}
            className="font-Inter w-32"
          >
            Start Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
