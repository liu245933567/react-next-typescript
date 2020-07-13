import Link from 'next/link';
import React from 'react';
const Header: React.FC<{ active: string }> = (props: { active: string }) => {
  return (
    <div className="Header-Components-Wrapper">
      <div className="header">
        <div className="header-inner">
          <Link href="/">
            <h2 className="logo">
              ShaoHua
            </h2>
          </Link>
          <div className="nav-bar">
            <Link href="/Home/home">
              <div
                className="bar"
                style={props.active === 'home' ? { color: '#09c' } : {}}
              >
                Home
              </div>
            </Link>
            <Link href="/Aboutus/aboutus">
              <div
                className="bar"
                style={props.active === 'aboutus' ? { color: '#09c' } : {}}
              >
                AboutUs
              </div>
            </Link>
            <Link href="/Helps/helps">
              <div
                className="bar"
                style={props.active === 'helps' ? { color: '#09c' } : {}}
              >
                Helps
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
