import React from 'react'

function Navbar({ showPage, page }) {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-xs">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">Profile Builder</span>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => showPage('profiles')}
            className={`pb-1 text-sm transition cursor-pointer ${
              page === 'profiles'
                ? 'font-bold underline text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Saved Profiles
          </button>

          <button
            type="button"
            onClick={() => showPage('create')}
            className={`pb-1 text-sm transition cursor-pointer ${
              page === 'create'
                ? 'font-bold underline text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Create Profile
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar