import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'
import ProfileList from './components/ProfileList'
import ProfileView from './components/ProfileView'

function App() {
  const [page, setPage] = useState('profiles')
  const [profiles, setProfiles] = useState(() => {
    return JSON.parse(localStorage.getItem('PROFILES')) || []
  })
  const [selectedProfile, setSelectedProfile] = useState(null)

  useEffect(() => {
    localStorage.setItem('PROFILES', JSON.stringify(profiles))
  }, [profiles])

  const addProfile = (newProfile) => {
    setProfiles([...profiles, { ...newProfile, id: Date.now() }])
    setPage('profiles')
  }

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id))
    setSelectedProfile(null)
  }

  const showPage = (pageName) => {
    setPage(pageName)
    setSelectedProfile(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar showPage={showPage} page={page} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {page === 'create' && <ProfileForm addProfile={addProfile} />}

        {page === 'profiles' && !selectedProfile && (
          <ProfileList
            profiles={profiles}
            selectProfile={setSelectedProfile}
          />
        )}

        {page === 'profiles' && selectedProfile && (
          <ProfileView
            profile={selectedProfile}
            goBack={() => setSelectedProfile(null)}
            deleteProfile={deleteProfile}
          />
        )}
      </main>
    </div>
  )
}

export default App