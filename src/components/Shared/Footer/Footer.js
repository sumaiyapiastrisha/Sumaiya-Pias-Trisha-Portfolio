import React from 'react';

const Footer = () => {


    return (


        <div className="bg-dark  text-white  pt-5 pb-4">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 item text">
                            <h3 className="text-white">Sumaiya Pias Trisha</h3>

                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3 className="text-white text-start ps-3">Projects</h3>
                            <ul className="text-start">
                                <h6>Drive Time</h6>
                                <h6>Holy Cresent</h6>
                                <h6>Food To Go</h6>

                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3 className="text-white text-start ps-4">Contact Me</h3>
                            <ul className="text-start">
                                <h6>Company</h6>
                                <h6>Team</h6>
                                <h6>Management</h6>
                            </ul>
                        </div>


                    </div>
                    <p class="   text-white my-4">Sumaiya Pias Trisha © 2021</p>
                </div>
            </footer>
        </div>



    );
};

export default Footer;