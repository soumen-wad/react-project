function BlogComponent(){
    return(
        <section className="section " id="blogs">
    <div className="container pb-5">
        <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center">
                <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Blogs</span>
                <h2 className="fs-2 fw-normal lh-1 text-dark my-3">Latest news & insights</h2>
                <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                    We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
                </p>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
                <div className="card shadow">
                    <img src="images/personal/1.jpg" alt="" className="img-fluid rounded-top"/>
                    <div className="card-body">
                        
                        <a href="blog-detail.html" className="fs-20 my-0 d-block fw-medium">Change the world with small things</a>
                        <hr className="hr-dashed"/>
                        <div className="d-flex justify-content-between">
                            <div className="meta-box">
                                <div className="media">
                                    <img src="images/users/user-7.jpg" alt="" className="thumb-sm rounded-circle me-2 align-self-center"/>                                       
                                    <div className="media-body align-self-center text-truncate">
                                        <h6 className="m-0 fs-14">Charles Woodall</h6>
                                        <p className="mb-0 fs-12 text-muted">14 Feb 2022</p>
                                    </div>
                                </div>                                            
                            </div>
                            <div className="align-self-center">
                                <a href="blog-detail.html" className="fs-14">Read more <i className="ti ti-arrow-right align-self-center"></i></a>
                            </div>
                        </div>                                                                 
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card shadow">
                    <img src="images/personal/3.jpg" alt="" className="img-fluid rounded-top"/>
                    <div className="card-body">                                
                        <a href="blog-detail.html" className="fs-20 my-0 d-block fw-medium">With a clean, minimal and professional look</a>
                        <hr className="hr-dashed"/>
                        <div className="d-flex justify-content-between">
                            <div className="meta-box">
                                <div className="media">
                                    <img src="images/users/user-2.jpg" alt="" className="thumb-sm rounded-circle me-2 align-self-center"/>                                       
                                    <div className="media-body align-self-center text-truncate">
                                        <h6 className="m-0 fs-14">Jarvis Owen</h6>
                                        <p className="mb-0 fs-12 text-muted">12 Jan 2022</p>
                                    </div>
                                </div>                                            
                            </div>
                            <div className="align-self-center">
                                <a href="blog-detail.html" className="fs-14">Read more <i className="ti ti-arrow-right align-self-center"></i></a>
                            </div>
                        </div>                                                                 
                    </div>
                </div>
            </div>       
            
            <div className="col-lg-4 col-md-6">
                <div className="card shadow">
                    <img src="images/personal/2.jpg" alt="" className="img-fluid rounded-top"/>
                    <div className="card-body">                                
                        <a href="blog-detail.html" className="fs-20 my-0 d-block fw-medium">With a clean, minimal and professional look</a>
                        <hr className="hr-dashed"/>
                        <div className="d-flex justify-content-between">
                            <div className="meta-box">
                                <div className="media">
                                    <img src="images/users/user-2.jpg" alt="" className="thumb-sm rounded-circle me-2 align-self-center"/>                                       
                                    <div className="media-body align-self-center text-truncate">
                                        <h6 className="m-0 fs-14">Jarvis Owen</h6>
                                        <p className="mb-0 fs-12 text-muted">12 Jan 2022</p>
                                    </div>
                                </div>                                            
                            </div>
                            <div className="align-self-center">
                                <a href="blog-detail.html" className="fs-14">Read more <i className="ti ti-arrow-right align-self-center"></i></a>
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

export default BlogComponent;