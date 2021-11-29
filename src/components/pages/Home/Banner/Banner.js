import React from 'react';
import './Banner.css'


const Banner = () => {
    // banner part
    return (
        <div className="banner d-flex flex-column pt-5 px-5 text-start justify-content-center">
            <div className="col col-12 col-md-6">
                <h1 className="  text-start">WE DELIVER FAST AND HEALTHY FOOD </h1>

                <p className="text-start pt-5 ">Get breakfast, lunch, dinner and more delivered from your favorite restaurants right to your doorstep with one easy click. FOOD TO GO Food Delivery - Delivering Now, From Restaurants Near You..</p>
            </div>

            <div>
                <button className="btn btn-dark p-3 px-5 mt-5 text-start">Projects</button>
            </div>
        </div>
    );
};



export default Banner;