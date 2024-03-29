import React from 'react';
import Header from './Header';
import classes from './Home.module.css';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <div
                className={`${classes.container} border content-container d-flex align-items-start justify-content-center`}
            >
                <Header />
            </div>
        </Layout>
    );
};
export default Home;
