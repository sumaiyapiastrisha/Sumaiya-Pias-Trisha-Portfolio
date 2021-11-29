import React, { useEffect, useState } from 'react';
import ShowProjects from './ShowProjects';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            {projects.length === 0 ? <div className="spinner-border text-danger text-center my-5 " role="status">
                <span class="visually-hidden">Loading...</span>
            </div> : <div className="my-5">

                <div>
                    <h1 className="my-5 pt-5 ">MY Projects</h1>

                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  mx-5  topProjects">
                    {

                        projects.map(project => (
                            <ShowProjects
                                key={project.id}
                                project={project}>

                            </ShowProjects>
                        )
                        )
                    }
                </div>
            </div>}
        </div>
    );
};

export default Projects;