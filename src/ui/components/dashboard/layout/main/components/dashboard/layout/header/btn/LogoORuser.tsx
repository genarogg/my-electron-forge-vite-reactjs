import React from 'react'
import ImgLogo from "../../../../../img/ImgLogo";

interface LogoORuserProps {
  size?: number;
}

const LogoORuser: React.FC<LogoORuserProps> = () => {
  return (
    <div className="container-logo-user">
      <div className="logo">
        <div className="container-img">
          <ImgLogo />
        </div>
      </div>
    </div>
  );
};

export default LogoORuser;
