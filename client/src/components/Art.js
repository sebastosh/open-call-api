import React, { Component } from 'react'

export class Art extends Component {
    render() {

        return (
            <div className="card">
               <h2>{this.props.art.attributes.title}</h2>
               <h3>{this.props.art.attributes.year} - {this.props.art.attributes.medium}</h3>
               <img alt={this.props.art.attributes.title} src={this.props.art.attributes.artworkfile} />
               <p>{this.props.art.attributes.description}</p>  
            </div>
        )
    }
}

export default Art
