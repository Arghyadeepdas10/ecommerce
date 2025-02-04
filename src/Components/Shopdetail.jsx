import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../Hooks/React Query/useReactQuery'

const Shopdetail = () => {

    const {id} = useParams();    
    const {data, isLoading} = useGetSingleProductQuery(id);
    console.log(data);

    if(isLoading){
        return <h1>Loading...</h1>
    }
    
  return (
    <>
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Details</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shop Details</p>
            </div>
        </div>
    </div>
    <br />
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
         <div className="col-lg-5 pb-5">
         <div id="product-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner border">
                    <div className="carousel-item active">
                        <img className="w-50 h-50" src={data.image} alt="Image"/>
                    </div>
            </div>
            </div>
        </div>


            <div className="col-lg-7 pb-5">
                <h3 className="font-weight-semi-bold">{data.title}</h3>
                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star-half-alt"></small>
                        <small className="far fa-star"></small>
                    </div>
                    <small className="pt-1">(50 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">${data.price}</h3>
                <p className="mb-4"><b>{data.description}</b>
                <br />
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                    <div className="d-inline-flex">
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-pinterest"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <Link className="nav-item nav-link" data-toggle="tab" to="#tab-pane-1">Description</Link>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3"><strong>Product Description</strong> </h4>
                        <b>{data.description}</b>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        
                    </div>
                   
                    <div className="tab-pane fade" id="tab-pane-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                <div className="media mb-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                    <div className="media-body">
                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-4">Leave Link review</h4>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <div className="d-flex my-3">
                                    <p className="mb-0 mr-2">Your Rating * :</p>
                                    <div className="text-primary">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label for="message">Your Review *</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Your Name *</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Your Email *</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group mb-0">
                                        <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
  
    </>
  )
}

export default Shopdetail