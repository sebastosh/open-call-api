import React, { Component } from 'react'

export class Apply extends Component {
    state = {
        clicked: false
   }


changeColor = () => {
  this.setState({clicked: !this.state.clicked})
}

handleClick = (e) => {
 
    this.changeColor()
    !this.state.clicked ? this.props.addToPortfolio(this.props.art) : this.props.removeFromPortfolio(this.props.art)
   

}

    render() {
        let div_class = this.state.clicked ? "clicked" : "notclicked";

        return (
            <div className="card">
               <img className={div_class} alt={this.props.art.attributes.title} src={this.props.art.attributes.artworkfile} onClick={this.handleClick} />
            </div>
        )
    }
}

export default Apply
