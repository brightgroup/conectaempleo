import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "src/components/header";
import { PostJob, Sidebar } from "./components";
import { WrapperProfileSettings } from ".";

const ProfileSetting = () => {
  const [section, setSection] = useState("account");
  const auth = useSelector((state) => state.auth);

  const component = {
    post_job: <PostJob {...{ auth }} />,
  };

  return (
    <WrapperProfileSettings className="">
      <Header />
      <div className="d-flex flex-column flex-md-row">
        <Sidebar setSection={setSection} section={section} />
        <div className="profile-settings__content">{component[section]}</div>
      </div>
    </WrapperProfileSettings>
  );
};

export default ProfileSetting;
