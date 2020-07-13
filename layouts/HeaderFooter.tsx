// layouts/HeaderFooter.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeaderFooter: React.FC<{
  active: string;
  children?: JSX.Element | JSX.Element[];
}> = (props: {
  active: string;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div>
      <Header active={props.active}></Header>
      <div id="LayoutContainer">{props.children}</div>
      <Footer></Footer>
      {/* <style jsx>
        {' '}
        {`
        #LayoutContainer {
          min-height: 600px;
          background-color: #f7f7f7
        }
          * {
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
          }
        `}
      </style> */}
    </div>
  );
};

export default HeaderFooter;
