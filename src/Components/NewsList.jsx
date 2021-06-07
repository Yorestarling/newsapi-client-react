import React, { Component } from 'react'

export default function NewsList(props){
    return(
        <div className='mt-3'>
                <form className='d-flex'>

                <div style={{width:'150px'}} className='d-grid gap-2 mb-2 '>
                    <button className='btn btn-secondary d-block' type='submit'> 
                             General
                    </button>
                    </div> 
                    <div style={{width:'150px'}} className='d-grid gap-2 mb-2 ms-2' >
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Business
                    </button>
                    </div>
                    <div style={{width:'200px'}} className='d-grid gap-2 mb-2 ms-2'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Entertainment
                    </button>
                    </div>
                    <div style={{width:'150px'}} className='d-grid gap-2 mb-2 ms-2'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Health
                    </button>
                    </div>
                    <div style={{width:'150px'}} className='d-grid gap-2 mb-2 ms-2'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Science
                    </button>
                    </div>
                    <div style={{width:'150px'}} className='d-grid gap-2 mb-2 ms-2'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Sports
                    </button>
                    </div>
                    <div style={{width:'150px'}} className='d-grid gap-2 mb-2 ms-2'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                    Technology
                    </button>
                    </div>

                </form>
 
                {/*Renderizado condicional*/}

                { props.isLoading ? <div className='Loading'> 
                    
                    <img src="/Loading.gif" />

                </div> : null}

                <div className="row">
                {
                    props.articles.map(item => {
                        return (

                            <div className="col-md-4">
     
                            <div className='card mb-4'>
                            <img src={item.urlToImage ?? '/default.jpg'} class="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>
                                <h6 className="card-author">{item.author}</h6>
                                <h6 className="card-publishedAt">{item.publishedAt}</h6>
                                <a href={item.url} target='blank' className="btn btn-primary">Show More....</a>
                                
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

