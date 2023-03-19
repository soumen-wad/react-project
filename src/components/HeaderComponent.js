import { Link } from "react-router-dom";
import React from 'react';
function HeaderComponent(){
    return(
        
        <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
            <div className="container">
                <a href="index.html" className="navbar-brand">
                    <img src="images/logo-sm.png" className="logo-sm" alt="" height="24" />
                    <img src="images/logo-light.png" className="logo-light" alt="" height="16" />
                    <img src="images/logo-dark.png" className="logo-dark" alt="" height="16" />
                </a>
                <a href="javascript:void(0)" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"><i data-feather="menu"></i></span>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
                        <li className="nav-item">
                            <Link className="nav-link active" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/about`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/services`}>Services</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to={`/projects`}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/blogs`}>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/contact`}>Contact</Link>
                        </li>
                    </ul>
                   {/*  <a href="#" className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0">Hire Me! <i className="icon-xxs ms-1" data-feather="chevrons-right"></i></a> */}
                </div>
            </div>
        </nav>
       

      
     
    );
}

export default HeaderComponent;