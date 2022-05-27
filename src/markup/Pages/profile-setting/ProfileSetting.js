import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from 'components/header'
import { PostJob, Sidebar, Default } from './components'
import { WrapperProfileSettings } from '.'

const ProfileSetting = () => {
  const { user } = useSelector(state => state.auth)
  const [section, setSection] = useState('companyProfile')

  const component = {
    companyProfile: <Default />,
    postJob: <PostJob />,
  }

  return (
    <WrapperProfileSettings>
      <Header />
      <div className="d-flex flex-column flex-md-row">
        <Sidebar setSection={setSection} section={section} rol={user?.rol} />
        <div className="profile-settings__content">{component[section]}</div>
      </div>
    </WrapperProfileSettings>
  )
}

export default ProfileSetting
