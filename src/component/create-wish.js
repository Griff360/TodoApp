import React, {Component} from 'react';
import './css.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';



class CreateWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wish_toy: '',
      wish_from: '',
      wish_priority: '',
      wish_fulfilled: false,
    }
    this.onChangeWishToy = this.onChangeWishToy.bind(this);
    this.onChangeWishFrom = this.onChangeWishFrom.bind(this);
    this.onChangeWishPriority = this.onChangeWishPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeWishToy(e){
    this.setState({
      wish_toy: e.target.value
    });
  }
  onChangeWishFrom(e) {
    this.setState({
      wish_from: e.target.value
    });
  }
  onChangeWishPriority(e) {
    this.setState({
      wish_priority: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`Wish Toy: ${this.state.wish_toy}`);
    console.log(`Wish From: ${this.state.wish_from}`);
    console.log(`Wish Priority: ${this.state.wish_priority}`);

const newWish = {
          wish_toy: this.state.wish_toy,
          wish_from: this.state.wish_from,
          wish_priority: this.state.wish_priority,
          wish_fulfilled: this.state.wish_fulfilled,
};

axios.post('http://localhost:4000/wishlist/add', newWish)
    .then(res=> console.log(res.data));



    this.setState({
      wish_toy: '',
      wish_from: '',
      wish_priority: '',
      wish_fulfilled: false
    })
  }
  render(){
    return(
      <div style={{marginTop: 10}}>
        <h3> Santa List </h3>
        <form onSubmit={this.onSubmit}>
         <div className="form-group">
          <label> Toy Description: </label>
          <input type="text" value={this.state.wish_toy}
          onChange={this.onChangeWishToy} />
         </div>
         <div className="form-group">
          <label> From Who?: </label>
          <input type= "text"calssName="form-control" value={this.state.wish_from}
          onChange={this.onChangeWishFrom} />
         </div>
         <div className="form-group">
          <div className="form-chheck form-check-inline">
            <input  className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityHigh"
                    value="High"
                    checked={this.state.wish_priority==='High'}
                    onChange={this.onChangeWishPriority}/>
                 <label className="form-check-label">High</label>
          </div>
          <div className="form-check form-check-inline">
              <input  className="form-check-input"
                      type="radio"
                      name="priorityOptions"
                      id="priorityMedium"
                      value="Medium"
                      checked={this.state.wish_priority==='Medium'}
                      onChange={this.onChangeWishPriority}/>
                   <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
              <input  className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityLow"
                     value="Low"
                     checked={this.state.wish_priority==='Low'}
                     onChange={this.onChangeWishPriority}/>
                  <label className="form-check-label">Low</label>
           </div>
          </div>
           <div className="form-group">
               <input type="submit" value="Create Wish List" className="btn btn-primary"/>
           </div>
        </form>
      </div>
    )
  }
}
export default CreateWish;
