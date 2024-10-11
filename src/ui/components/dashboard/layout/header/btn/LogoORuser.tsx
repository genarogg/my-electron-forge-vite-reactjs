import ImgLogo from "../../../../../img/ImgLogo";
import React from 'react'
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
