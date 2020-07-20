import Link from 'next/link';
import React from 'react';
import '@styles/components/Header.scss';

const Header: React.FC<{ active: string }> = (props: { active: string }) => {
  return (
    <div className="Header-Components-Wrapper">
      <div className="header">
        <div className="header-inner">
          <Link href="/">
            <h2 className="logo">ShaoHua</h2>
          </Link>
          <div className="nav-bar">
            <Link href="/">
              <div
                className="bar"
                style={props.active === 'home' ? { color: '#09c' } : {}}
              >
                首页
              </div>
            </Link>
            <Link href="/aboutus">
              <div
                className="bar"
                style={props.active === 'aboutus' ? { color: '#09c' } : {}}
              >
                关于我们
              </div>
            </Link>
            <Link href="/helps">
              <div
                className="bar"
                style={props.active === 'helps' ? { color: '#09c' } : {}}
              >
                技术支持
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
