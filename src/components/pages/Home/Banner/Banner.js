import React from 'react';
import './Banner.css'


const Banner = () => {
    // banner part
    return (
        <div className="banner d-flex flex-column pt-5 px-5 text-start justify-content-center">
            <div className="col col-12 col-md-6">
                <h1 className="  text-center">Welcome to my world ,</h1>

                <h4 className="text-center pt-5 ">Honest,qiuck Lerner,Hard worker</h4>
                <div className="text-center">
                    <button className="btn border border-dark mx-2 p-2 px-5 mt-5 justify-content-center ">Projects</button>
                    <button className="btn border border-dark p-2 px-5 mt-5 justify-content-center ">Resume</button>
                </div>

            </div>


        </div>
    );
};




export default Banner;