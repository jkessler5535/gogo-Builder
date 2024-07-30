// Avatar.jsx
import React from "react";

//Avatar
import AvatarBody from "../../assets/avatar-parts/avatar-body.js";
import AvatarEars from "../../assets/avatar-parts/avatar-ears.js";
import AvatarBrows from "../../assets/avatar-parts/avatar-brows.js";
import AvatarEyes from "../../assets/avatar-parts/avatar-eyes.js";
import AvatarHat from "../../assets/avatar-parts/avatar-hat.js";
import AvatarHead from "../../assets/avatar-parts/avatar-head.js";





const Avatar = ({ showHat, hatColor, showEyes, glassesColor,showBody, bodyColor }) => {
  return (
    <div className="avatar">
     <AvatarBody color={bodyColor} showBody={showBody} />
      <AvatarHead />
      {showEyes && <AvatarEyes color={glassesColor} />}
      {showHat && <AvatarHat color={hatColor} />}
      <AvatarBrows />
      <AvatarEars />
    </div>
  );
}

export default Avatar;
