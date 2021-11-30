import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowProductDetails from './ShowProductDetails';

const ProjectDetails = () => {

    const { id } = useParams();


    //fetch services collection and show data according to id 
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            {projects.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                <span class="visually-hidden">Loading...</span>
            </div> : <div className="my-5">

                <div>
                    <h1 className="my-5 pt-5 "> Projects Details</h1>

                </div>

                <div class="row row-cols-1 row-cols-md-1 row-cols-lg-1 g-4  mx-5  topProjects">
                    {

                        projects.filter(project => project.id == id).map(project =>
                            <ShowProductDetails
                                key={project.id}
                                project={project}>

                            </ShowProductDetails>
                        )

                    }
                </div>
            </div>}
        </div>
    );

};

export default ProjectDetails;