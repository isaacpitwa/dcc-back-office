import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from './components';

const Main = (props) => {
    const { children } = props;

    return (
        <div>
            <Header />

            <main>
                <div id="preloader">
                    <div className="preloader-thumbnail">
                        <img src="./img/core-img/preloader.png" alt="" />
                    </div>
                </div>
                {children}
            </main>

            <Footer />
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node,
}

export default Main;
