import React, { useState } from 'react'

import ReactPaginate from "react-paginate";



export default function NewsList(props){
   
    const[pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6
    const pageVisited = pageNumber * usersPerPage
    
    const paginatedchange = Math.ceil(props.articles.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    return(

        <div className='mt-3'>
                <form className='d-flex'>
                 <div style={{width:'180px'}} className='d-grid gap-2 mb-2 '>
                     <button className='btn btn-secondary d-block' type='submit' > 
                             General
                     </button>
                     </div> 
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2' >
                     <button className='btn btn-secondary d-block' type='submit'> 
                              Business
                     </button>
                     </div>
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2'>
                     <button className='btn btn-secondary d-block' type='submit'> 
                             Entertainment
                     </button>
                     </div>
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2'>
                     <button className='btn btn-secondary d-block' type='submit'> 
                              Health
                     </button>
                     </div>
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2'>
                     <button className='btn btn-secondary d-block' type='submit'> 
                              Science
                     </button>
                     </div>
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2'>
                     <button className='btn btn-secondary d-block' type='submit'> 
                             Sports
                     </button>
                     </div>
                     <div style={{width:'180px'}} className='d-grid gap-2 mb-2 ms-2'>
                     <button className='btn btn-secondary d-block' type='submit'> 
                             Technology
                     </button>
                     </div>

                </form>
               
                <div className= "pagination justify-content-center mt-4">
                    <ReactPaginate color="primary" previousLabel={"Previous"} nextLabel={"Next"} pageCount={paginatedchange} 
                    onPageChange={changePage} containerClassName={"BtnPag"} previousLinkClassName={""}
                    nextLinkClassName={""} disabledClassName={"paginationDisabled"} activeClassName={"paginationActive"}
                       className="nav" />
                </div>   
 
                {/*Renderizado condicional*/}

                { props.isLoading ? <div className='Loading'> 
                    
                    <img src="/Loading.gif" />

                </div> : null}

                <div className="row">
                {              
                    props.articles.slice(pageVisited,pageVisited + usersPerPage)
                    .map(item => {
                        return (

                            <div className="col-md-4">
                            
                            <div className='card mb-4'>
                            <img src={item.urlToImage ?? '/default.jpg'} className="card-img-top igCard" alt={item.title}/>
                                <div className="card-body cardbody" >
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.content}</p>
                                        <h6 className="card-author">{item.author}</h6>
                                                                  
                                </div>   
                            <div className='card-footer'>
                                         <a href={item.url} target='blank' className="btn btn-primary ">Show More....</a>
                                         {/* <p>{this.formatDate(item.publishedAt)}</p> */}
                                         <h6 className="card-publishedAt">Published At: {Date(item.publishedAt)}</h6>    
                            </div> 
                            </div>
                            </div>
                        )
                    })
                }


                </div>
            </div>
    )
}

