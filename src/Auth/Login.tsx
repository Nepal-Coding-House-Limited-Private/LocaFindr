
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const handleGoogleLogin = () => {
    alert('Handle Google login here');
    // TODO: Integrate Firebase or OAuth Google login here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl px-8 py-10 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Login Required
        </h1>
        <p className="text-gray-600 mb-6">
          You need to log in to access the full features of our app.
        </p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <FcGoogle size={24} />
          <span className="text-base font-medium">Continue with Google</span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to our{' '}
          {/* <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Terms & Privacy Policy</a> */}
          Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Login;
