import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import ShowProjects from './Projects/ShowProjects';

const Home = () => {

    return (
        <div>

            <div><Banner></Banner></div>
            <div className="container">

                <div class="container  my-5 py-5">
                    <div class="row">
                        <div class="col-sm-4 d-flex justify-content-center align-items-center text-start"><h1>ABOUT ME </h1></div>
                        <div class="col-sm-8"> <p>I actually have accomplished 10+ initiatives with HTML5,CSS3,Bootstrap 5,JavaScript,ES6,Rest API, React JS, React Bootstrap,
                            React Router, Firebase Authentication. I am devoted and sincere in my work. I am continually equipped to take on
                            any demanding situations and entire any task.</p></div>
                    </div>

                </div>




            </div>
            <div>
                <Projects></Projects>
            </div>



        </div>
    );
};

export default Home;