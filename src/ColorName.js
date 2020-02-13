import React, { Component } from 'react';
import AppStyle from './App.css'


class ColorName extends Component{
    constructor(props){
        super(props)
        this.state = {
            colorlist: ['green', 'blue', 'yellow', 'red', 'purple', 'orange'],
            color: "white",
            colorcounter: -1
        }
    }

colorChange = () => {
    if (this.state.colorcounter === 5)  {
        this.state.colorcounter = -1;
    } else {

    let newColor = this.state.colorcounter + 1


    this.setState({colorcounter: newColor})
    this.setState({ color: this.state.colorlist[newColor]})
    }
}


  render(){
      return(
    <div>
        <div className="holder">
        <button onClick = { this.colorChange } style={{ height: "200px", width: "200px", backgroundColor: this.state.color, margin: "20px"}}> {this.state.color}
        </button>
        </div>
    </div>
  )
 }
}
export default ColorName;
