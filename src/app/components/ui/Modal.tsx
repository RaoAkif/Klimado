import { useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Import correct dropdown icon

interface ModalProps {
  onClose: () => void;
}

// List of G20 countries (excluding India, adding Pakistan instead)
const G20_COUNTRIES = [
  "Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany",
  "Indonesia", "Italy", "Japan", "Mexico", "Pakistan", "Russia", "Saudi Arabia", "South Africa",
  "South Korea", "Turkey", "United Kingdom", "United States", "European Union"
];

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
      <div
        className="bg-white shadow-xl border border-[#E4E4E4] w-[520px] h-[631px] p-[32px] rounded-[16px] relative flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[32px] right-[32px] text-gray-500 hover:text-gray-700 text-2xl"
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

        <hr className="border-[#E4E4E4] my-4" />

        {/* Form */}
        <form className="flex flex-col gap-[16px] flex-1">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold text-[#1D2029] font-montserrat mb-2">
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
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold text-[#1D2029] font-montserrat mb-2">
              Email*
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat"
              placeholder="Enter Email Address"
              required
            />
          </div>

          {/* Country Dropdown with Correct Icon */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold text-[#1D2029] font-montserrat mb-2">
              Country*
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-[14px] leading-[20px] font-montserrat appearance-none"
                required
              >
                <option value="">Select Country</option>
                {G20_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {/* Updated Correct Dropdown Icon */}
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1492EF] w-5 h-5" />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold text-[#1D2029] font-montserrat mb-2">
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
          <div className="flex justify-center mt-3 -mb-2">
            <button
              type="submit"
              className="w-[232px] h-[42px] bg-[#1492EF] text-white font-semibold text-[14px] leading-[20px] rounded-[32px] hover:bg-blue-700 transition flex items-center justify-center"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "18px",
                paddingRight: "18px",
              }}
            >
              SIGN ME UP
            </button>
          </div>
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
