import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-teal-700 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div className="text-3xl font-medium">Realty</div>
        <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
          <a href="#rockets" className="hover:opacity-90">
            Home
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Sell
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
