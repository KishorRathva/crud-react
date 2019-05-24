import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/createComponent';
import Edit from './components/editComponent'
import Index from './components/indexComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.onChangeCountryName = this.onChangeCountryName.bind(this);
    this.onChangeCapitalName = this.onChangeCapitalName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
       country:'',
       capital:''
    }
  }
  onChangeCountryName(e){
    this.setState({
      country:e.target.value
    });
  }
  onChangeCapitalName(e){
    this.setState({
      capital:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.setState({
      country:"",
      capital:""
    })
  }
  
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;