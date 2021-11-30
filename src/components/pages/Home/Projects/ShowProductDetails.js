import React from 'react';

const ShowProductDetails = (props) => {
    const { id, title, image, description1, image2, image3, serverSiteGithub, livesite, Clientsitegithub, description2, description3
    } = props.project;

    return (
        <div className="col Project" >
            <div className="card h-100 border-0 shadow">
                <div className="d-flex ">
                    <div> <img src={image} class="card-img-top" alt={image} /></div>
                    <div><img src={image2} class="card-img-top" alt={image} /></div>
                    <div> <img src={image3} class="card-img-top" alt={image} /></div>
                </div>



                <div className="d-flex ">
                    <div className="card-body my-5">
                        <h3 class="card-title text-start ">{title}</h3>
                        <ul>
                            <li className="text-start">{description1}</li>
                            <li className="text-start">{description2}</li>
                            <li className="text-start">{description3}</li>
                        </ul>


                        <div className="d-flex ">
                            <div>
                                <button className="btn border border-2 me-2 " ><a href={livesite} target="_blank">Preview</a></button>
                            </div>

                            {
                                serverSiteGithub ? <div>
                                    <button className="btn border border-2 me-2" ><a href={serverSiteGithub} target="_blank">Server Site GitHub</a></button>
                                </div> :
                                    <button className="btn"></button>
                            }

                            <div>
                                <button className="btn border border-2 me-2 " ><a href={Clientsitegithub} target="_blank">   Client Site  GitHub</a></button>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
};

export default ShowProductDetails;