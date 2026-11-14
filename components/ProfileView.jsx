import React from 'react'

function ProfileView({ profile, goBack, deleteProfile }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Card */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-20 w-20 rounded-full object-cover shrink-0"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-3xl shrink-0">
              {profile.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-blue-600 font-medium">{profile.role}</p>
            <p className="text-sm text-gray-500 mt-1">
              {profile.location} · {profile.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goBack}
            className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium transition cursor-pointer"
          >
            Back to profiles
          </button>
          <button
            type="button"
            onClick={() => deleteProfile(profile.id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition cursor-pointer"
          >
            Delete profile
          </button>
        </div>
      </div>

      {/* About Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
        <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
        <p className="text-gray-700 leading-relaxed">{profile.about}</p>
      </div>

      {/* Skills Tag Badges */}
      {profile.skills && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.split(',').map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience Card */}
      {profile.experience && profile.experience.length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Experience</h3>
          <div className="space-y-3">
            {profile.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-l-2 border-blue-600 pl-4 py-1"
              >
                <p className="font-semibold text-gray-900">{exp.role}</p>
                <p className="text-sm text-gray-600">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Card */}
      {profile.education && profile.education.length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
          <div className="space-y-3">
            {profile.education.map((edu) => (
              <div
                key={edu.id}
                className="border-l-2 border-emerald-600 pl-4 py-1"
              >
                <p className="font-semibold text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileView