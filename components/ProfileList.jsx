import React from 'react'

function ProfileList({ profiles, selectProfile }) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
        <p className="text-gray-600 text-lg">
          No profiles yet. Create a new profile.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <button
          key={profile.id}
          type="button"
          onClick={() => selectProfile(profile)}
          className="text-left bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition flex items-center gap-4 cursor-pointer"
        >
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-12 w-12 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              {profile.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900 truncate">
              {profile.name}
            </h3>
            <p className="text-sm font-medium text-blue-600 truncate">
              {profile.role}
            </p>
            <p className="text-xs text-gray-500 mt-1 truncate">
              {profile.location}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}

export default ProfileList