import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SidebarMenu } from 'components/sidebar-menu'
import { PostJob, Default } from './components'
import { WrapperProfileSettings } from '.'

const ProfileSetting = () => {
  const { user } = useSelector(state => state.auth)
  const [section, setSection] = useState('companyProfile')

  const component = {
    companyProfile: <Default />,
    postJob: <PostJob />,
  }

  return (
    <WrapperProfileSettings className="d-flex flex-column flex-md-row">
      <SidebarMenu setSection={setSection} section={section} rol={user?.rol} />
      <div className="profile-settings__content">{component[section]}</div>
    </WrapperProfileSettings>
  )
}

export default ProfileSetting
