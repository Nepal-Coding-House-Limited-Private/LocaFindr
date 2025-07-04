import { useState } from "react";
import { Link } from "react-router-dom";
import {Phone } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    // Simulate async login (replace with real logic)
    setError("");
    // Example: redirect or show success
    alert(`Logging in with email: ${email}`);
  };

  return (
    <>
      <div className="top-navbar mt-2 px-5">
        <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
          LocaFindr
        </h2>
      </div>

      <main className="flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 flex flex-col items-center gap-6 mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Create New Account
          </h2>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            <div className="relative w-full">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                className={`peer w-full px-4 pt-5 pb-2 border ${
                  error ? "border-red-500 text-red-600" : "border-blue-500 text-blue-600"
                } placeholder-transparent rounded-full focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-blue-500"
                } transition duration-200`}
              />
              <label
                htmlFor="email"
                className={`absolute left-6 -top-3.5 text-xs ${
                  error ? "text-red-600" : "text-blue-600"
                } bg-white px-1 transition-all pointer-events-none
                  peer-placeholder-shown:left-6 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base ${
                    error ? "peer-placeholder-shown:text-red-500" : "peer-placeholder-shown:text-blue-500"
                  }
                  peer-focus:-top-3.5 peer-focus:text-xs ${
                    error ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"
                  }`}
                style={{ zIndex: 2 }}
              >
                Email Address
              </label>
              {error && (
                <p className="text-red-600 text-sm mt-1 ml-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full text-white bg-black font-medium py-3 rounded-full hover:opacity-80 transition"
            >
              Continue
            </button>
          </form>

          <div className="quries flex gap-2 text-sm">
            <p className="text-gray-600">Login?</p>
            <Link to="/auth/register" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </div>

          <div className="flex items-center gap-4 my-4 w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm whitespace-nowrap">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="border rounded-full border-[#cccc] flex items-center justify-center gap-3 w-full text-gray-800 py-2 hover:opacity-80 transition">
              <FcGoogle />
              Continue with Google
            </button>

            <button className="border rounded-full border-[#cccc] flex items-center justify-center gap-3 w-full text-gray-800 py-2 hover:opacity-80 transition">
              <ImAppleinc />
              Continue with Apple
            </button>

            <button className="border rounded-full border-[#cccc] flex items-center justify-center gap-3 w-full text-gray-800 py-2 hover:opacity-80 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="w-5 h-5"
              />
              Continue with Microsoft
            </button>

            <button className="rounded-full border border-[#cccc] flex items-center justify-center gap-3 w-full text-gray-800 py-2 hover:opacity-80 transition">
              <Phone className="w-5 h-5" />
              Continue with Phone
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
