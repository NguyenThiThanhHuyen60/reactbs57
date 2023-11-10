import React, { Component } from "react";

export default class DataBinding extends Component {
    prod={
        id:1,
        name:"iphone"
    }
  renderTitle = () => {
    let kq = "XYZ";
    return <div>{kq}</div>;
  };
  render() {
    let title = "Cybersoft";
    let person = {
      name: "Hoàng",
      img: "http://i.pravatar.cc?u=2",
      age: 30,
    };

    return (
      <div className="container">
        <h3>DataBinding</h3>
        <h3>product name:{this.prod.name}</h3>
        <h3>{this.renderTitle()}</h3>
        <p id="txt">{title}</p>
        <div className="card w-25">
          <img className="card-img-top" src={person.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Name:{person.name}</h4>
            <p className="card-text">Age:{person.age}</p>
            <button class="btn btn-danger">Add friend</button>
          </div>
        </div>
      </div>
    );
  }
}
