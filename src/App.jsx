import logo from './logo.svg';
import './App.css';
import NewsList from './Components/NewsList';
import SearchBox from './Components/SearchBox';
import axios from 'axios'

import React,{Component} from 'react'
import SearchByCountry from './Components/SearchByCountry';

class App extends Component{

      state = {
        isLoading: true,
        articles: [],

        errorMessage: ' '
    }
    componentDidMount(){
      this.search(null)
    }

    handleSearchBoxSearch = (value)=>{
      this.search(value)  
    }

    search = (value) =>{
      let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1691f5df99424472b95c4ab2ec039e63&pageSize=100" 

      if(value != null){
        apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1691f5df99424472b95c4ab2ec039e63&pageSize=100&q="+ value
      }
      // console.log(apiURL)
        axios.get(apiURL)
        .then((res) => {
            this.setState({
                articles: res.data.articles,
                isLoading: false
            })
        })
      
      .catch(err=> {
        this.setState({
          isLoading: false,
          articles: [],
          errorMessage: err.response.data.message

        })
      })
    }
    
render(){
  return (
    <div className="App container">
      <header>
        <img src={'/News.gif'}/>
        {/* <h1 className='mt-4'>News-API Client React</h1> */}
      </header>
     
      <SearchBox onSearch={this.handleSearchBoxSearch}/>
      {this.state.errorMessage ? <div className='alert alert-danger mt-3'> {this.state.errorMessage}</div> : null}
      <NewsList isLoading={this.state.isLoading} articles = {this.state.articles} />
    </div>
   );
  }

}
export default App;







