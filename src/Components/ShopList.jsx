import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchProductQuery } from '../Hooks/React Query/useReactQuery'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux toolkit/Slice/cartSlice';
import { Pagination } from '@mui/material';

const ShopList = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data, isLoading, isFetching} = useFetchProductQuery()    

    const[input, setInput] = useState('');
    const[page, setPage] = useState(1);
    const[sorteddata, setSorteddata] = useState([]);
    const[selectcategory, setSelectcategory] = useState('');
    const [selectedPrices, setSelectedPrices] = useState({
        'price-all': true,
        'price-1': false,
        'price-2': false,
        'price-3': false,
        'price-4': false,
        'price-5': false
    })

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (data) {
    //         setSorteddata(data);
    //     }
    // }, [data]);

    const filterProducts = useMemo(() => {
        if (selectedPrices['price-all']) {
            return data || [];
        }

        let filtered = [];
        if (selectedPrices['price-1']) {
            filtered = filtered.concat(data.filter((item) => item.price >= 0 && item.price <= 100));
        }
        if (selectedPrices['price-2']) {
            filtered = filtered.concat(data.filter((item) => item.price > 100 && item.price <= 300));
        }
        if (selectedPrices['price-3']) {
            filtered = filtered.concat(data.filter((item) => item.price > 300 && item.price <= 500));
        }
        if (selectedPrices['price-4']) {
            filtered = filtered.concat(data.filter((item) => item.price > 500 && item.price <= 700));
        }
        if (selectedPrices['price-5']) {
            filtered = filtered.concat(data.filter((item) => item.price > 700 && item.price <= 1000));
        }

        return filtered;
    },[data, selectedPrices, selectcategory])

    useEffect(()=>{
        setSorteddata(filterProducts);
    },[filterProducts])

    // useEffect(() => {
    //     filterProducts();
    // }, [data, selectedPrices, selectcategory]);
    
    // const handleSortPrice = (order)=>{
    //     const sorted = [...data].sort((a,b)=>order === 'low'? a.price - b.price : b.price - a.price);
    //     setSorteddata(sorted);
    //     setSortOrder((prev)=>({...prev, price: order}))
    // }

    const handleaddcart = (data)=>{
        dispatch(addtocart(data));
    }

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setSelectedPrices((prev) => ({
            ...prev,
            [id]: checked,
            'price-all': id === 'price-all' ? checked : prev['price-all']
        }));
    };

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(isFetching){
        return <h1>Fetching...</h1>
    }

    const handledetails = (id)=>{
        navigate(`/detail/${id}`)
    }

    const filteredData = sorteddata?.filter((item) => 
        item.title?.toLowerCase().includes(input.toLowerCase()) && 
        (!selectcategory || item.category === selectcategory)
    ) || [];

    const handlepagechange = (_,value)=>{
        setPage(value);
    }

    const paginatedData = filteredData.slice((page - 1) * 5, page * 5);

  return (
    <>
    <div className="container-fluid bg-secondary mb-1">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shop</p>
            </div>
        </div>
    </div>
    <br />
    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-12">
                <div className="border-bottom mb-1 pb-4">
                    <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-all" checked={selectedPrices['price-all']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-all">All Price</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" checked={selectedPrices['price-1']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2" checked={selectedPrices['price-2']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-2">$100 - $300</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3" checked={selectedPrices['price-3']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-3">$300 - $500</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4" checked={selectedPrices['price-4']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-4">$500 - $700</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5" checked={selectedPrices['price-5']} onChange={handleCheckboxChange}/>
                            <label className="custom-control-label" htmlFor="price-5">$700 - $1100</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className='form-control' value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search by name"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                           
                            <div className="dropdown ml-4">
                                <div className="dropdown ml-4">
                                    <select className="form-control" onChange={(e) => setSelectcategory(e.target.value)}  value={selectcategory}>
                                        <option value="">All Categories</option>
                                        <option value="men's clothing">Men's Clothing</option>
                                        <option value="jewelery">Jewelery</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="women's clothing">Women's Clothing</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                            {paginatedData?.map((item, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
                                        <div className="card product-item border-0 mb-4">
                                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <img className="img-fluid w-50 h-50" src={item.image} style={{marginLeft:"90px"}} />
                                            </div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h6 className="text-truncate mb-3">{item.title}</h6>
                                                <div className="d-flex justify-content-center">
                                                    <h6>${item.price}</h6>
                                                    {item.oldPrice && (
                                                        <h6 className="text-muted ml-2">
                                                            <del>${item.oldPrice}</del>
                                                        </h6>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between bg-light border">
                                                <Link onClick={()=>handledetails(item.id)} className="btn btn-sm text-dark p-0">
                                                    <i className="fas fa-eye text-primary mr-1"></i>View Detail
                                                </Link>
                                                <Link to="/cart" onClick={()=> handleaddcart(item)} className="btn btn-sm text-dark p-0">
                                                    <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                );
                            })}
                            
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    {filteredData.length > 5 && (
                        <Pagination
                            count={Math.ceil(filteredData.length / 5)}
                            page={page}
                            onChange={handlepagechange}
                            color="secondary"
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShopList