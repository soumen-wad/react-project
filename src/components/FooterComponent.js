
function FooterComponent() {
  return (
    <>
        <div className="position-relative">
            <div className="shape overflow-hidden bg-footer">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 border-e-dashed">
                        <a href="layout-one-1.html">
                            <img src="images/logo-sm.png" alt="" height="18" />
                            <img src="images/logo-light.png" alt="" height="16" />
                        </a>
                        <p className="my-4">In an ideal world this text wouldn’t exist, 
                            a client would acknowledge the importance of having web 
                            copy before the design starts.
                        </p>
                        <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
                            <li className="list-inline-item">
                                <a href="#"> <i className="icon-xs" data-feather="facebook"></i> </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"> <i className="icon-xs" data-feather="twitter"></i> </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"> <i className="icon-xs" data-feather="github"></i> </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"> <i className="icon-xs" data-feather="instagram"></i> </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="text-footer mb-4 mt-sm-0 mt-5">Company</h6>
                                <ul className="list-unstyled footer-list">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">services</a></li>
                                    
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-footer mb-4 mt-sm-0 mt-4">Information</h6>
                                <ul className="list-unstyled footer-list">
                                    <li><a href="#resume">Resume</a></li>
                                    <li><a href="#review">Client Say</a></li>
                                    <li><a href="#projects">Projects</a></li>                                    
                                    
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-footer mb-4 mt-sm-0 mt-4">More info</h6>
                                <ul className="list-unstyled footer-list">
                                    <li><a href="#blogs">Blogs</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#">Terms & condition</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>

        <div className="footer-alt">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p> &copy; <script>
                            document.write(new Date().getFullYear())
                        </script> Selfown. Created with <i className="las la-heart text-danger"></i> by Mannatthemes</p>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="#">- Terms & condition<sup className="text-danger">*</sup></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default FooterComponent;
