import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import ShowProjects from './Projects/ShowProjects';

const Home = () => {

    return (
        <div>
            {/* banner part */}
            <div><Banner></Banner></div>
            {/* About me part */}
            <div class="container  my-5 py-5" id="aboutMe">
                <div class="row my-5 py-5">
                    <div class="col-sm-4 d-flex justify-content-center align-items-center text-start"><h1>ABOUT ME </h1></div>
                    <div class="col-sm-8"> <p className="text-start">I actually have accomplished 10+ initiatives with HTML5,CSS3,Bootstrap 5,JavaScript,ES6,Rest API, React JS, React Bootstrap,
                        React Router, Firebase Authentication. I am devoted and sincere in my work. I am continually equipped to take on
                        any demanding situations and entire any task.</p></div>
                </div>

            </div>
            {/* Skills part */}
            <div className="container" >

                <h1 className="mb-5 ">Skills</h1>
                <div class="row mb-5 pb-5">
                    <div class="col-sm-6 text-start ">
                        <div class="card border-0 shadow">
                            <div class="card-body py-5 my-3">
                                <h5 class="card-title text-start"> Web development</h5>
                                <p class="card-text text-start">I have six month experience of web development . I have done more than ten project based on front-end web development.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 text-start ">
                        <div class="card border-0 shadow">
                            <div class="card-body  py-5 my-3">
                                <h5 class="card-title text-start"> Provlem solving</h5>
                                <p class="card-text text-start"> I have two years  experience of problem solving. I have done more than 150 problem in URI.</p>

                            </div>
                        </div>
                    </div>
                </div>




                {/* Projects */}
                <div>
                    <Projects></Projects>
                </div>



            </div>
        </div >
    );
};

export default Home;