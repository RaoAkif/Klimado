import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✖
        </button>

        {/* Modal Header */}
        <h2 className="text-[20px] font-semibold text-center text-gray-900 font-montserrat leading-[42px]">
          Pre Sign Up!
        </h2>
        <p className="text-[14px] font-normal text-center text-gray-600 font-montserrat mt-1">
          Please provide us with your basic details
        </p>

        <hr className="border-gray-300 my-4" />

        {/* Form */}
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-[14px] font-semibold text-[#1D2029] font-montserrat">
              Full Name*
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat"
              placeholder="Enter Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[14px] font-semibold text-[#1D2029] font-montserrat">
              Email*
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat"
              placeholder="Enter Email Address"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-[14px] font-semibold text-[#1D2029] font-montserrat">
              Country*
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat appearance-none"
                required
              >
                <option value="">Select Country</option>
                {/* Add country options */}
              </select>
              {/* Dropdown Icon */}
              <span className="absolute top-3 right-4 text-[#1492EF]">
                ▼
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="mb-6">
            <label className="block text-[14px] font-semibold text-[#1D2029] font-montserrat">
              Company*
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat"
              placeholder="Enter Company Name"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[232px] h-[42px] bg-[#1492EF] text-white font-semibold text-[12px] leading-[20px] rounded-[32px] hover:bg-blue-700 transition mx-auto flex items-center justify-center"
            style={{
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "18px",
              paddingRight: "18px",
            }}
          >
            SIGN ME UP
          </button>
        </form>

        {/* Privacy Policy */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing you agree to our{" "}
          <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a> and{" "}
          <a href="/terms" className="text-blue-500">Terms & Conditions</a>.
        </p>
      </div>
    </div>
  );
}
