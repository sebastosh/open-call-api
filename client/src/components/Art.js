import React, { Component } from 'react'

export class Art extends Component {

handleDelete = (e) => {
    e.persist()
    console.log('e: ', e.target.id);
    fetch(`/artworks/${e.target.id}`, {
        method: "delete"
      }).then(res => {
          console.log('res: ', res);
            this.props.removeArtwork(e.target.id)
      });

}

    render() {
console.log(this.props);
        return (
            <div className="card">
                <button id={this.props.art.id} onClick={this.handleDelete}> Delete </button>
               <h2>{this.props.art.attributes.title}</h2>
               <h3>{this.props.art.attributes.year} - {this.props.art.attributes.medium}</h3>
               <img alt={this.props.art.attributes.title} src={this.props.art.attributes.artworkfile} />
               <p>{this.props.art.attributes.description}</p>  
            </div>
        )
    }
}

export default Art
