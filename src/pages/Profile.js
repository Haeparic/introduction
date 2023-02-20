import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile">
      <div className="inner">
        <h2>Profile</h2>
        <div className="contents">
          <div className="profile-box">
            <img src={`${path}/images/profile_1.png`} alt="profile" />
          </div>
          <div className="profile-box">
            <img src={`${path}/images/profile_2.png`} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
