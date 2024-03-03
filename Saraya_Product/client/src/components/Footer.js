import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/Logo.png';

function Footer() {
    return (
        <div class="container my-5">
            <footer class="bg-primary text-center text-lg-start text-white">
                <div class="container p-4">
                    <div class="row my-4">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <a className="footer-brand" href="/">
                            <img src={logo} alt="Saraya Product Logo" style={{ width: 'auto', height: '100px'}} /> 
                        </a>
                            <p class="text-center">The best food product in Sri Lanka...</p>
                            <ul class="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a class="text-white px-2" href="#!">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-white px-2" href="#!">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-white ps-2" href="#!">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Spicies</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Tumerics</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Ginger</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Garlic</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Black  Peppar</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Cloves</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Cinnnamon</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Saraya Product</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Home</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Sign In</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>Sign Up</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-white"><i class="fas fa-paw pe-3"></i>About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Contact</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <p><i class="fas fa-map-marker-alt pe-2"></i>Address</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-phone pe-2"></i>TP</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-envelope pe-2 mb-0"></i>Mail</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2024 : Saraya Product
                    
                </div>
            </footer>
        </div>
    );
}

export default Footer;
