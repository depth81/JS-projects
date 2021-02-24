import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHandler(){
        console.log("The button has been clicked on");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Cick me</button>
            </div>
        )
    }
}

export default ClassClick
