import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[75px] flex flex-row justify-between items-center p-4 bg-gradient-to-r from-MainBlue to-MainPink font-Inter text-white">
      <div className="flex flex-row justify-center items-center gap-4">
        <Facebook className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Twitter className="cursor-pointer" />
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Copyright />
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
