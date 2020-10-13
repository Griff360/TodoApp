import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

const Toy = props => (
    <tr>
     <td> {props.toy.wish_toy} </td>
     <td> {props.toy.wish_from} </td>
     <td> {props.toy.wish_priority} </td>

    </tr>
  )



class ToyList extends Component {
  constructor(props){
    super(props);
    this.state = {list: []};
  }
  componentDidMount() {
    axios.get('http://localhost:4000/wishlist')
    .then(response =>{
      console.log(response.data);
    this.setState({list: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  toyList() {
    console.log(this.state.list);
    return this.state.list.map(function(currentToy, i){
      return <Toy toy={currentToy} key={i} />;
      // console.log(currentToy)
    })
  }
render(){
  return(
    <div>
      <h3> Wish List </h3>
    <table className="table table-striped" style={{ marginTop: 20 }} >
         <thead>
          <tr>
            <th>Type of Toy</th>
            <th>Who From?</th>
            <th>How Important</th>
            <th>Action</th>
          </tr>
        </thead>

      <tbody>
        { this.toyList() }
      </tbody>
    </table>
    </div>
  )
}
}
export default ToyList;
