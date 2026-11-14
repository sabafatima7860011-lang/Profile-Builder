import React, { useState } from 'react'

const emptyForm = {
  name: '',
  role: '',
  email: '',
  location: '',
  skills: '',
  about: '',
  avatar: '',
  experience: [],
  education: [],
}

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState(emptyForm)
  const [experience, setExperience] = useState({ company: '', role: '' })
  const [education, setEducation] = useState({ school: '', degree: '' })

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Experience handlers
  const onExperienceChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value })
  }

  const addExperience = () => {
    if (!experience.company.trim() || !experience.role.trim()) return
    setFormData({
      ...formData,
      experience: [...formData.experience, { ...experience, id: Date.now() }],
    })
    setExperience({ company: '', role: '' })
  }

  const removeExperience = (id) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((item) => item.id !== id),
    })
  }

  // Education handlers
  const onEducationChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value })
  }

  const addEducation = () => {
    if (!education.school.trim() || !education.degree.trim()) return
    setFormData({
      ...formData,
      education: [...formData.education, { ...education, id: Date.now() }],
    })
    setEducation({ school: '', degree: '' })
  }

  const removeEducation = (id) => {
    setFormData({
      ...formData,
      education: formData.education.filter((item) => item.id !== id),
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    addProfile(formData)
    setFormData(emptyForm)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900">Create New Profile</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={onChangeHandler}
            placeholder="e.g. Saba Fatima"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role *
          </label>
          <input
            type="text"
            name="role"
            required
            value={formData.role}
            onChange={onChangeHandler}
            placeholder="e.g. Frontend Developer"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="e.g. saba@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location *
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={onChangeHandler}
            placeholder="e.g. Hyderabad, India"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Avatar URL (Optional)
        </label>
        <input
          type="url"
          name="avatar"
          value={formData.avatar}
          onChange={onChangeHandler}
          placeholder="https://example.com/photo.jpg"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills (comma-separated) *
        </label>
        <input
          type="text"
          name="skills"
          required
          value={formData.skills}
          onChange={onChangeHandler}
          placeholder="React, JavaScript, Tailwind CSS"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          About *
        </label>
        <textarea
          name="about"
          rows="3"
          required
          value={formData.about}
          onChange={onChangeHandler}
          placeholder="Write a brief bio..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Experience Section */}
      <div className="border-t border-gray-200 pt-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={onExperienceChange}
            placeholder="Company"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="role"
            value={experience.role}
            onChange={onExperienceChange}
            placeholder="Role"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition cursor-pointer"
        >
          + Add Experience
        </button>

        {formData.experience.length > 0 && (
          <ul className="space-y-2 mt-2">
            {formData.experience.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-sm"
              >
                <span>
                  <strong>{item.role}</strong> at {item.company}
                </span>
                <button
                  type="button"
                  onClick={() => removeExperience(item.id)}
                  className="text-red-600 hover:text-red-800 font-bold px-2 cursor-pointer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Education Section */}
      <div className="border-t border-gray-200 pt-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={onEducationChange}
            placeholder="School / University"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={onEducationChange}
            placeholder="Degree"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition cursor-pointer"
        >
          + Add Education
        </button>

        {formData.education.length > 0 && (
          <ul className="space-y-2 mt-2">
            {formData.education.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 text-sm"
              >
                <span>
                  <strong>{item.degree}</strong> — {item.school}
                </span>
                <button
                  type="button"
                  onClick={() => removeEducation(item.id)}
                  className="text-red-600 hover:text-red-800 font-bold px-2 cursor-pointer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition cursor-pointer"
      >
        Save Profile
      </button>
    </form>
  )
}

export default ProfileForm