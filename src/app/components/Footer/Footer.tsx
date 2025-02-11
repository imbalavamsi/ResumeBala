import React from "react";
import "./Footer.css";
import { Toolbar } from "primereact/toolbar";

const Footer: React.FC = () => {
  const centerContent = (
    <div>
      <div className='w-full'>
        <center>© 2025 BALA VAMSI MARAGANI. All Rights Reserved. </center>
      </div>
    </div>
  );
  return <Toolbar center={centerContent} className='footer w-full' />;
};

export default Footer;
