import './ContactComponent.css';
function ContactComponent(){
    return(
        <section className="section bg-light" id="contact">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card bg-white contact__bg" >
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">Get in touch !</h2>
                                <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">Always available for freelancing if the right project <br/> comes along, Feel free to contact me.</p>
                                <form method="post" name="myForm" onsubmit="return validateForm()">
                                    <span id="error-msg"></span>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-medium form-label fs-16" for="name">Name</label>
                                            <input type="text" className="form-control" placeholder="Your name" id="name" />
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-medium form-label  fs-16" for="email">Email</label>
                                            <input type="email" className="form-control" placeholder="Your email" id="email" />
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-medium form-label  fs-16" for="subject">Subject</label>
                                            <input type="text" className="form-control" placeholder="your subject" id="subject" />
                                        </div>
                                        
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-medium form-label  fs-16" for="number">Contact</label>
                                            <input type="text" className="form-control" placeholder="+00 1234 5678 90" id="number" />
                                        </div>
                                        
                                        <div className="col-12 mb-3">
                                            <label className="fw-medium form-label  fs-16" for="comments">Message</label>
                                            <textarea className="form-control" id="comments" placeholder="Enter your message..." rows="5"></textarea>
                                        </div>
                                        
                                        <div className="col-12">
                                            <input type="submit" id="submit" name="send" className="btn btn-primary mt-2" value="Send message" />
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <img src="images/personal/contact.svg" alt="" height="200" className=" mx-auto d-block mb-5"/>
                                <div className="d-flex">
                                    <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                                        <i className="ti ti-phone fs-22"></i>
                                    </div>
                                    <div className="align-self-center ms-3">
                                        <span className="d-block lh-1">+1 234 567 89</span>
                                        <span className="text-muted fs-14 mt-n2">9:00am to 7:00pm</span>
                                    </div>
                                </div>
                                <hr className="hr-dashed my-3"/>
                                <div className="d-flex">
                                    <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                                        <i className="ti ti-mail fs-22"></i>
                                    </div>
                                    <div className="align-self-center ms-3">
                                        <span className="d-block lh-1">example@example.com</span>
                                        <span className="text-muted fs-14 mt-n2">Monday to Saturday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default ContactComponent;