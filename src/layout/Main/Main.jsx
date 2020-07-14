import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer,SideNav } from './components';

const Main = (props) => {
    const { children } = props;

    return (
        <div>
            <Header />

            <main>
            <div className="dashboard-section">
                    <div className="sideNav">
                        <SideNav></SideNav>
                    </div>
                    <div className="content">
                        {children}
                    </div>
                    <div className="rightNav">
                        {/* TODO: should renedr user's profile when no details to show */}
                        {/* This is the details section */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node,
}

export default Main;
