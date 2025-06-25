import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Music } from 'lucide-react';

type SocialPlatform = {
  id: string;
  name: string;
  icon: React.ReactNode;
  urlPrefix: (username: string) => string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6 text-blue-600" />,
    urlPrefix: (username) => `https://facebook.com/${username}`,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <Twitter className="w-6 h-6 text-blue-400" />,
    urlPrefix: (username) => `https://twitter.com/${username}`,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6 text-pink-600" />,
    urlPrefix: (username) => `https://instagram.com/${username}`,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6 text-blue-700" />,
    urlPrefix: (username) => `https://linkedin.com/in/${username}`,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <Youtube className="w-6 h-6 text-red-600" />,
    urlPrefix: (username) => `https://youtube.com/${username}`,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: <Music className="w-6 h-6 text-black" />, // music icon for TikTok substitute
    urlPrefix: (username) => `https://www.tiktok.com/@${username}`,
  },
];

const Web: React.FC = () => {
  const [usernames, setUsernames] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);

  const handleUsernameChange = (platformId: string, value: string) => {
    setUsernames((prev) => ({ ...prev, [platformId]: value.trim() }));
  };

  const handleVisit = (platformId: string) => {
    const username = usernames[platformId];
    if (!username) {
      alert(`Please enter a username for ${platformId.charAt(0).toUpperCase() + platformId.slice(1)}!`);
      return;
    }
    const platform = socialPlatforms.find((p) => p.id === platformId);
    if (!platform) return;
    const url = platform.urlPrefix(username);
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const handleBuildWebsite = () => {
    setMessage('Build Your Own Website - Coming Soon 🚧');
    setTimeout(() => setMessage(null), 3500);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Web & Social Media</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-6">
        {/* Social media input + buttons */}
        {socialPlatforms.map((platform) => (
          <div key={platform.id} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {platform.icon}
              <label htmlFor={`input-${platform.id}`} className="font-medium text-gray-700 min-w-[90px]">
                {platform.name}:
              </label>
            </div>

            <input
              id={`input-${platform.id}`}
              type="text"
              placeholder="Enter username"
              value={usernames[platform.id] || ''}
              onChange={(e) => handleUsernameChange(platform.id, e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => handleVisit(platform.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
            >
              Visit
            </button>
          </div>
        ))}

        {/* Build your own website button */}
        <div className="pt-4 border-t border-gray-200 text-center">
          <button
            onClick={handleBuildWebsite}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Build Your Own Website
          </button>
        </div>

        {/* Message / Toast */}
        {message && (
          <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-md text-center font-semibold animate-pulse">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Web;
