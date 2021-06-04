
import React, { Component } from "react";


export default class SearchBox extends Component{

constructor(props){
    super(props)
  
}

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements['search'].value)
    }

    render(){
        return(
            <form className='d-flex' onSubmit={this.handleFormSubmit}>
                <div className='flex-grow-1'>
                <input type="text" className='form-control' placeholder='Search News...' name='search'/>
                </div>
                    <div style={{width:'120px'}} className='d-grid gap-2 ms-3'>
                    <button className='btn btn-secondary d-block' type='submit'> 
                             Search
                    </button>
                    </div> 
            </form>
        )
    }
}
