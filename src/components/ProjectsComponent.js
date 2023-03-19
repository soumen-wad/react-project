

 function ProjectsComponent() {
  return (
    <section className="section" id="projects">
    <div className="container">                
        <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center">
                <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Work</span>
                <h2 className="fs-2 fw-medium lh-1 text-dark my-3">My Projects</h2>
                <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                    We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
                </p>
            </div>
        </div>
        <div className="row">                    
            <div className="col-12 filters-group-wrap">
                <div className="filters-group mb-5">                            
                    <ul className="mb-0 list-unstyled filter-options filter-tab">
                        <li className="list-inline-item position-relative text-dark active" data-group="all">All</li>
                        <li className="list-inline-item position-relative text-dark" data-group="angular">Angular</li>
                        <li className="list-inline-item position-relative text-dark" data-group="mongodb">Mongodb</li>
                        <li className="list-inline-item position-relative text-dark" data-group="bootstrap">Bootstrap</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row d-flex  g-1 justify-content-center" id="grid">
            <div className="col-lg-4 col-md-6 picture-item" data-groups='["angular", "bootstrap"]'>
                <div className="card rounded shadow border-0 m-2">
                    <div className="card-body p-4 m-2">
                        <div className="media mb-3">
                            <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl  rounded">
                                <img src="images/logos/Angular.svg" alt="" className="thumb-md"/>
                            </div>
                            <div className="media-body ms-3 align-self-center">
                                <h5 className="text-dark fs-18 fw-medium m-0">Auto Drive Project</h5>
                                <p className="text-muted mb-0 fs-13">htpps://abcd-Example.com <a href=""><i className="ti ti-external-link fs-18 text-primary"></i></a></p>
                            </div>
                        </div>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Angular</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">React</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Jquery</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 picture-item" data-groups='["bootstrap"]'>
                <div className="card rounded shadow border-0 m-2">
                    <div className="card-body p-4 m-2">
                        <div className="media mb-3">
                            <div className="bg-soft-alt-info d-flex justify-content-center align-items-center thumb-xl  rounded">
                                <img src="images/logos/bootstrap.svg" alt="" className="thumb-md"/>
                            </div>
                            <div className="media-body ms-3 align-self-center">
                                <h5 className="text-dark fs-18 fw-medium m-0">Auto Drive Project</h5>
                                <p className="text-muted mb-0 fs-13">htpps://abcd-Example.com <a href=""><i className="ti ti-external-link fs-18 text-primary"></i></a></p>
                            </div>
                        </div>                         
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Bootstrap</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Css</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Javascript</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 picture-item" data-groups='["mongodb", "vue", "angular"]'>
                <div className="card rounded shadow border-0 m-2">
                    <div className="card-body p-4 m-2">
                        <div className="media mb-3">
                            <div className="bg-soft-alt-success d-flex justify-content-center align-items-center thumb-xl  rounded">
                                <img src="images/logos/mongodb.svg" alt="" className="thumb-md"/>
                            </div>
                            <div className="media-body ms-3 align-self-center">
                                <h5 className="text-dark fs-18 fw-medium m-0">Auto Drive Project</h5>
                                <p className="text-muted mb-0 fs-13">htpps://abcd-Example.com <a href=""><i className="ti ti-external-link fs-18 text-primary"></i></a></p>
                            </div>
                        </div>                         
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Mongodb</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Javascript</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 picture-item" data-groups='["vue"]'>
                <div className="card rounded shadow border-0 m-2">
                    <div className="card-body p-4 m-2">
                        <div className="media mb-3">
                            <div className="bg-soft-alt-success d-flex justify-content-center align-items-center thumb-xl  rounded">
                                <img src="images/logos/vue.svg" alt="" className="thumb-md"/>
                            </div>
                            <div className="media-body ms-3 align-self-center">
                                <h5 className="text-dark fs-18 fw-medium m-0">Auto Drive Project</h5>
                                <p className="text-muted mb-0 fs-13">htpps://abcd-Example.com <a href=""><i className="ti ti-external-link fs-18 text-primary"></i></a></p>
                            </div>
                        </div>                        
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Vue</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Javascript</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 picture-item" data-groups='["react", "angular"]'>
                <div className="card rounded shadow border-0 m-2">
                    <div className="card-body p-4 m-2">
                        <div className="media mb-3">
                            <div className="bg-soft-alt-primary d-flex justify-content-center align-items-center thumb-xl  rounded">
                                <img src="images/logos/react.svg" alt="" className="thumb-md"/>
                            </div>
                            <div className="media-body ms-3 align-self-center">
                                <h5 className="text-dark fs-18 fw-medium m-0">Auto Drive Project</h5>
                                <p className="text-muted mb-0 fs-13">htpps://abcd-Example.com <a href=""><i className="ti ti-external-link fs-18 text-primary"></i></a></p>
                            </div>
                        </div>                             
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">React</span>
                        <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">Javascript</span>
                    </div>
                </div>
            </div>                    
        </div>
    </div>
</section>
  )
}

export default ProjectsComponent;
