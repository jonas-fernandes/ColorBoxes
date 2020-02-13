if (colorcounter === 6)  {
    colorcounter = 0);
} else {


height: "200px", width: "200px"


    import React, { Component } from 'react';


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


        let newColor = this.state.colorcounter + 1


        this.setState({colorcounter: newColor})
        this.setState({ color: this.state.colorlist[newColor]})
        }



      render(){
          return(
        <div>
    <button onClick = { this.colorChange } style={{ height: "100px", width: "100px", justifyContent: "center", alignItems: "center", backgroundColor: this.state.color}}> Press Me!
    </button>
        </div>
      )
     }
    }
    export default ColorName;
