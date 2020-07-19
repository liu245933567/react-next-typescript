// layouts/HeaderFooter.tsx
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const HeaderFooter: React.FC<{
  active: string;
  children?: JSX.Element | JSX.Element[];
}> = (props: { active: string; children?: JSX.Element | JSX.Element[] }) => {
  return (
    <div>
      <Header active={props.active}></Header>
      <div id="LayoutContainer">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default HeaderFooter;
