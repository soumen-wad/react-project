function ServicesComponent() {
  return (
    <section className="section bg-gradient-light-white" id="services">
    <div className="container">                
        <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center position-relative">
                <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Services</span>
                <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Our Services</h2>
                <div className="bg-text">
                    <h1 className="fw-bold p-0">Services</h1>
                </div>
                <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                    We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card rounded shadow border-0">
                    <div className="card-body p-4 m-2">
                        <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl  rounded">
                            <i data-feather="layers" className="align-self-center svg-orange icon-md"></i>  
                        </div>
                        <h5 className="text-dark fs-22 fw-medium my-4">Awesome Support</h5>
                        <p className="text-muted pb-4">Some quick example text to build on the card title and make up the bulk of the card's content platform.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card rounded shadow  border-0">
                    <div className="card-body p-4 m-2">
                        <div className="bg-soft-alt-info d-flex justify-content-center align-items-center thumb-xl  rounded">
                            <i data-feather="dollar-sign" className="align-self-center svg-info icon-md"></i>  
                        </div>
                        <h5 className="text-dark fs-22 fw-medium my-4">Dynamic Growth</h5>
                        <p className="text-muted pb-4">Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card rounded shadow  border-0">
                    <div className="card-body p-4 m-2">
                        <div className="bg-soft-alt-success d-flex justify-content-center align-items-center thumb-xl  rounded">
                            <i data-feather="check-square" className="align-self-center svg-success icon-md"></i>  
                        </div>
                        <h5 className="text-dark fs-22 fw-medium my-4">Branding Identity</h5>
                        <p className="text-muted pb-4">Separated they live in Bookmarksgrove right at the coast of the Semantics, and large.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ServicesComponent;
