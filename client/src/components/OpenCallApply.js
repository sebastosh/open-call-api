import React from "react";
import Apply from "./Apply";

class OpenCallApply extends React.Component {
  state = {
    portfolio: [],
    artistWorks: [],
    artist_id: "",
    call_id: parseInt(this.props.callId) + 1
  };

  componentDidMount() {
    fetch("/artworks")
      .then(response => response.json())
      .then(artworks => {
        let getArtistWork = artworks.data.filter(
          artwork =>
            artwork.attributes.artist_id === Number(this.props.currentArtist.id)
        );

        this.setState({
          artistWorks: getArtistWork
        });
      });
  }

  addToPortfolio = art => {
    if (!this.state.portfolio.includes(art)) {
      this.setState({
        portfolio: [...this.state.portfolio, art],
        artist_id: this.props.currentArtist.id
      });
    }
  };

  removeFromPortfolio = art => {
    if (this.state.portfolio.includes(art)) {
      let updatedPortfolio = this.state.portfolio.filter(
        artwork => artwork.id !== art.id
      );

      this.setState({
        portfolio: updatedPortfolio
      });
    }
  };

  apply = click => {
    if (this.state.portfolio.length > 0) {
      const submitWorks = {
        portfolio: this.state.portfolio,
        artist_id: this.state.artist_id,
        call_id: this.state.call_id
      }
      // console.log('click: ', click.target);
      fetch("/submits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitWorks)
      })
        .then(res => res.json())
        .then(resp => console.log("Submitted", resp));
    }
  };

  render() {
    let artistArtWork;
    if (this.state.artistWorks) {
      artistArtWork = this.state.artistWorks.map(art => {
        return (
          <Apply
            key={art.id}
            art={art}
            addToPortfolio={this.addToPortfolio}
            removeFromPortfolio={this.removeFromPortfolio}
          />
        );
      });
    }
    return (
      <div>
        <div className="submit-button">
          <button onClick={this.apply}>Submit Your Work 🖼</button>
        </div>
        <h3>Select work from your Portfolio:</h3>
        <div className="card-container">{artistArtWork}</div>
      </div>
    );
  }
}

export default OpenCallApply;
