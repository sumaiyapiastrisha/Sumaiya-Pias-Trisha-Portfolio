import React from 'react';
import { Button } from 'react-bootstrap';
import './Projects.css'
const ShowProjects = (props) => {
    const { id, title, image, description } = props.project;
    console.log(description)
    return (
        <div className="col Project" >
            <div className="card h-100">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h3 class="card-title ">{title}</h3>

                    <p class="card-text">{description}</p>

                </div>
                {/* <Button className="btn  p-2 px-4 my-3">details</Button> */}
                {/* <Link to={`/Projects/${_id}`} >
                    <button className="btn btn-danger p-2 px-4 my-3">details</button>
                </Link> */}
            </div>
        </div>

    )
};

export default ShowProjects;