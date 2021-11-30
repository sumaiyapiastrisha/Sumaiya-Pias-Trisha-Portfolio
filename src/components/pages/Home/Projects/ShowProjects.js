import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css'


//Show projects
const ShowProjects = (props) => {
    const { id, title, image, description } = props.project;
    console.log(description)
    return (
        <div className="col Project" >
            <div className="card h-100 border-0 shadow">
                <img src={image} class="card-img-top" alt={image} />
                <div className="d-flex ">
                    <div className="card-body">
                        <h3 class="card-title ">{title}</h3>

                        {/* <p class="card-text">{description}</p> */}

                    </div>

                    <Link to={`/Projects/${id}`} className="text-end mx-4" >
                        <button className="btn border border-2  p-2 px-4 my-3">Show details</button>
                    </Link>
                </div>

            </div>
        </div>

    )
};

export default ShowProjects;