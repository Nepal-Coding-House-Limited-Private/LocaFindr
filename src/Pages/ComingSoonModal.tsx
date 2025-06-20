export default function ComingSoonModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg shadow-lg p-8 max-w-sm w-full text-center relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-red-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4-4v8" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
        <p className="text-gray-300 mb-4">We're working hard to bring you this feature. Stay tuned!</p>
        <button
          className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-2 px-6 rounded-full font-semibold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}