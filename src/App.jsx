import logo from './logo.svg';
import './App.css';
import NewsList from './Components/NewsList';
import SearchBox from './Components/SearchBox';
import axios from 'axios'
import {Categories} from './Components/SearchByCategories'
import {countries} from './Components/SearchByCountries'
import Select from 'react-select';





import React, { Component } from 'react'


class App extends Component {

  state = {
    isLoading: true,
    articles: [],
   // countries: 'us',
    category: '',
    country:'us',
    errorMessage: '',
    next: "",
    previous: ""
  }

  componentDidMount() {
    this.search(null)
  }

  // formatDate(date) {
  //   var time = new Date(date);
  //   var year = time.getFullYear();
  //   var day = time.getDate();
  //   var hour = time.getHours();
  //   var minute = time.getMinutes();
  //   var month = time.getMonth() + 1;
  //   var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
  //   return composedTime;
  // }

  handleSearchBoxSearch = (value) => {
    this.search(value)
  }

  search = (value) => {
    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1691f5df99424472b95c4ab2ec039e63&pageSize=80"

    if (value != null) {
      apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1691f5df99424472b95c4ab2ec039e63&pageSize=20&q=" + value
    }


    // console.log(apiURL)
    axios.get(apiURL)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          isLoading: false,
          categoria: this.state.categori,
          country: this.state.countri,
        })
      })

      .catch(err => {
        this.setState({
          isLoading: false,
          articles: [],
          categoria: this.state.categori,
          errorMessage: err.response.data.message

        })
      })
  }



  setCategorie = (option) => {
    this.setState({
      category: option.value
    });
  }

  setCountrie = (option) => {
    this.setState({
      country: option.value
    });
  }



  render() {
    return (
      <div className="App container">
        <header>
          <img src={'./MEGANEWS.png'} />
          {/* <h1 className='mt-4'>News-API Client React</h1> */}
          

        </header>

        {/* <select className="form-select" options={countries} placeholder='Select Country' onChange={this.setCountry}  />
         */}
          
        <SearchBox onSearch={this.handleSearchBoxSearch} />
        {this.state.errorMessage ? <div className='alert alert-danger mt-3'> {this.state.errorMessage}</div> : null}
        
        <div className="SearchCate" >
            <div className="row">
              <div className="col-md-2">
                <Select options={Categories} placeholder='Select by categories' onChange={this.setCategorie} className="mt-2"  /><div />
              </div>
              <div className="col-md-2">
              <Select options={countries} placeholder='Select by contries' onChange={this.setCountrie} className="mt-2"  /><div />
              </div>
        </div>
        </div>
        
          
          
        <NewsList isLoading={this.state.isLoading} articles={this.state.articles}  />

      </div>


    );
  }

}

export default App;







