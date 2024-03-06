import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/Logo.png';

function Footer() {
    return (
        <div className="container my-5">
            <footer className="bg-primary text-center text-lg-start text-white">
                <div className="container p-4">
                    <div className="row my-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <a className="footer-brand" href="/">
                                <img src={logo} alt="Saraya Product Logo" style={{ width: 'auto', height: '100px'}} /> 
                            </a>
                            <p className="text-center">The best food product in Sri Lanka...</p>
                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a className="text-white px-2" href="#!">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white px-2" href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white ps-2" href="#!">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Spices</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Turmeric</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Ginger</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Garlic</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Black Pepper</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Cloves</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Cinnamon</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Saraya Product</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/" className="text-white"><i className="fas fa-paw pe-3"></i>Home</Link>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Sign In</a>
                                </li>
                                <li className="mb-2">
                                    <Link to="/admin" className="text-white"><i className="fas fa-paw pe-3"></i>Sign Up</Link>
                                </li>
                                <li className="mb-2">
                                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p><i className="fas fa-map-marker-alt pe-2"></i>Address</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone pe-2"></i>TP</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope pe-2 mb-0"></i>Mail</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2024 : Saraya Product
                </div>
            </footer>
        </div>
    );
}

export default Footer;
