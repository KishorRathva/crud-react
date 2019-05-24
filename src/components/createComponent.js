import React, { Component } from 'react';

export default class Create extends Component {
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
        const obj = {
            country : this.state.country,
            capital: this.state.capital
        };

        axios.post('http://localhost:8080/',obj)
        .then()
        console.log(this.state);
        this.setState({
          country:"",
          capital:""
        })
      }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Data:</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>country Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.country}
                        onChange={this.onChangeCountryName}
                        />
                  </div>
                  <div className="form-group">
                      <label>capital Name: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.capital}
                        onChange={this.onChangeCapitalName}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}