
import React, { Component } from "react";

// import axios from "axios"


// class App extends Component{
//     state={
//         category:["general"]
//     }

//     componentDidMount(){
//         axios.get("https://newsapi.org/v2/sources?apiKey=1691f5df99424472b95c4ab2ec039e63").then((response)=>{
//             console.log(response);
//             this.setState({category: response.data})
//         }).catch((err) =>{
//             console.log(err);
//         });
//     }
// }

export default class SearchBox extends Component{

constructor(props){
    super(props)
  
}

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(event.target.elements['search'].value)
        //console.log(event.target.elements['search'].value)
    }

    render(){
        return(
            <form className='d-flex' onSubmit={this.handleFormSubmit}>
                <div className='flex-grow-1'>
                <input type="text" className='form-control' placeholder='Search News...' name='search'/>
                </div>
                    <div style={{width:'120px'}} className='d-grid gap-2 ms-3'>
                    <button className='btn btn-success d-block' type='submit'> 
                             Search
                    </button>
                    </div> 

                    <div style={{width:'180px'}} className='d-grid gap-2 ms-3'>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Search by Country</option>
                        <option value="1">United States</option>
                    </select>
                    </div>
            </form>

        )
    }
}
