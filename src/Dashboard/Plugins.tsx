import React, { useState } from 'react';

type Plugin = {
  id: string;
  name: string;
  description: string;
};

const allPlugins: Plugin[] = [
  {
    id: 'abhaya-language',
    name: 'Abhaya Language',
    description: 'A custom programming language developed by Abhaya for optimized coding workflows.',
  },
  {
    id: 'shop-tracker',
    name: 'Shop Tracker',
    description: 'Track your store’s sales, inventory, and customer behavior in real-time.',
  },
  {
    id: 'monster-insights',
    name: 'MonsterInsights',
    description: 'Powerful analytics plugin to connect with Google Analytics and monitor traffic.',
  },
  {
    id: 'third-party-tools',
    name: 'Third-Party Integrations',
    description: 'Easily integrate with popular third-party apps and services.',
  },
  {
    id: 'customizable-settings',
    name: 'Customizable Settings',
    description: 'Modify plugin settings to suit your unique needs.',
  },
];

const Plugins: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [installed, setInstalled] = useState<string[]>([]);
  const [installingId, setInstallingId] = useState<string | null>(null);
  const [selectedInstalledId, setSelectedInstalledId] = useState<string | null>(null);

  const filteredPlugins = allPlugins.filter((plugin) =>
    plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plugin.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInstall = (pluginId: string) => {
    if (installed.includes(pluginId) || installingId === pluginId) return;

    setInstallingId(pluginId);
    setTimeout(() => {
      setInstalled((prev) => [...prev, pluginId]);
      setInstallingId(null);
      setSelectedInstalledId(pluginId); // auto-select installed plugin details
    }, 2500);
  };

  const handleUninstall = (pluginId: string) => {
    setInstalled((prev) => prev.filter((id) => id !== pluginId));
    // If the removed plugin was selected, clear selection or select another
    if (selectedInstalledId === pluginId) {
      setSelectedInstalledId(null);
    }
  };

  const selectedPlugin = selectedInstalledId
    ? allPlugins.find((p) => p.id === selectedInstalledId) || null
    : null;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 px-4 sm:px-6">
      {/* Left side: Search + Plugins List */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Plugins</h2>

        <input
          type="text"
          placeholder="Search plugins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            mb-8
            px-4
            py-3
            border
            border-gray-300
            rounded-lg
            shadow-sm
            text-gray-800
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent
            transition
            duration-300
          "
          aria-label="Search plugins"
        />

        <div className="bg-white shadow-lg rounded-xl divide-y divide-gray-200 max-h-[480px] overflow-y-auto">
          {filteredPlugins.length > 0 ? (
            filteredPlugins.map((plugin, index) => {
              const isInstalled = installed.includes(plugin.id);
              const isInstalling = installingId === plugin.id;

              return (
                <div
                  key={plugin.id}
                  className={`
                    px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between
                    transition-colors duration-200
                    hover:bg-blue-50
                    ${index !== filteredPlugins.length - 1 ? 'border-b border-gray-200' : ''}
                  `}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{plugin.name}</h3>
                    <p className="mt-1 text-gray-600">{plugin.description}</p>
                  </div>
                  <button
                    type="button"
                    disabled={isInstalled || isInstalling}
                    onClick={() => handleInstall(plugin.id)}
                    className={`
                      mt-4 sm:mt-0
                      inline-flex
                      items-center
                      px-5
                      py-2
                      rounded-lg
                      font-medium
                      shadow-md
                      transition
                      duration-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-400
                      ${
                        isInstalled
                          ? 'bg-green-600 text-white cursor-default'
                          : isInstalling
                          ? 'bg-blue-600 text-white cursor-wait'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }
                    `}
                  >
                    {/* Loader spinner */}
                    {isInstalling && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    )}
                    {isInstalled
                      ? 'Installed ✅'
                      : isInstalling
                      ? 'Installing...'
                      : 'Install'}
                  </button>
                </div>
              );
            })
          ) : (
            <p className="p-6 text-center text-gray-500 italic">
              No plugins found for &quot;{searchTerm}&quot;.
            </p>
          )}
        </div>
      </div>

      {/* Right side: Installed Plugins sidebar + details */}
      <aside className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-h-[640px]">
        <h3 className="text-2xl font-semibold p-6 border-b border-gray-200">Installed Plugins</h3>

        {installed.length === 0 ? (
          <p className="text-gray-500 italic p-6 flex-grow flex items-center justify-center">
            No plugins installed yet.
          </p>
        ) : (
          <>
            <ul className="overflow-y-auto flex-grow divide-y divide-gray-200 max-h-[300px]">
              {installed.map((id) => {
                const plugin = allPlugins.find((p) => p.id === id);
                if (!plugin) return null;
                return (
                  <li
                    key={plugin.id}
                    className={`px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors
                      ${
                        selectedInstalledId === plugin.id
                          ? 'bg-blue-100 font-semibold text-blue-700'
                          : 'text-gray-900'
                      }
                    `}
                    onClick={() => setSelectedInstalledId(plugin.id)}
                  >
                    {plugin.name}
                  </li>
                );
              })}
            </ul>

            {/* Plugin details */}
            <div className="p-6 border-t border-gray-200">
              {selectedPlugin ? (
                <>
                  <h4 className="text-lg font-semibold text-gray-900">{selectedPlugin.name}</h4>
                  <p className="mt-2 text-gray-600">{selectedPlugin.description}</p>
                  <button
                    onClick={() => handleUninstall(selectedPlugin.id)}
                    className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Uninstall
                  </button>
                </>
              ) : (
                <p className="text-gray-500 italic">Select a plugin to see details</p>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Plugins;
