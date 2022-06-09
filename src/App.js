
import React, {Component} from "react";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userName: "Vishal",
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Vishal' ? 'Sinha' : 'Vishal',
    });
  }

  
    render = () => (
      <div className="container">
          <div className="col-12">
              <h2 className="bg-primary text-white text-center p2">
                {this.state.userName}  To Do list
              </h2>
              <button className = "btn btn-secondry m-2"
              onClick={this.changeStateData}>
                ChangeData
              </button>
          </div>
      </div>
    );  
}