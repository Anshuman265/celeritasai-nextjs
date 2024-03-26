"use client";
import { Link } from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 p-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold mb-4">CeleritasAI</h3>
            <p className="mb-4">
            We provide technical consultancy & services in the field of Automotive Engineering with following Expertise
            </p>
            {/*
            <div className="flex space-x-4">
              <Link to="" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link to="" className="text-white hover:text-gray-300">
                Contact
              </Link>
              <Link to="" className="text-white hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          */}
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-4">
              <span className="font-bold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span> info@mywebsite.com
            </p>
            <p>
              <span className="font-bold">Address:</span> 123 Main Street, City,
              Country
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;