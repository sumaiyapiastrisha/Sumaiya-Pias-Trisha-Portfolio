import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import ShowProjects from './Projects/ShowProjects';

const Home = () => {

    return (
        <div>

            <div><Banner></Banner></div>
            <div>
                <Projects></Projects>
            </div>



        </div>
    );
};

export default Home;