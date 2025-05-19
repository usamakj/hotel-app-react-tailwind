import React from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

const Layout = ({ children }) => {
    return (
        <div className="site-wrapper">
            <MyHeader />
            <main id="page-top">{children}</main>
            <MyFooter />
        </div>
    );
};

export default Layout;