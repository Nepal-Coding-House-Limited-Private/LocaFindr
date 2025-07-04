import Logo from '../assets/Logo1.png'

function PaymentGateway() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">

        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-6">
          <img
            src= {Logo} // Replace with your logo path
            alt="LocaFindr Logo"
            className="w-70 h-70 object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-left text-left space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">LocaFindr Payment Gateway</h1>
          <p className="text-gray-600 text-sm">
            Manage your payment activities and contact the administration.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Package"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="button"
              className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Contact Seller
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default PaymentGateway;
