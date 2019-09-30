import React from "react";
import ArtWorkContainer from "./ArtWorkContainer";
import AddArtworkForm from "../components/AddArtworkForm";
import EditProfileForm from "../components/EditProfileForm"
import Popup from "reactjs-popup";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentArtist: {},
      artistWorks: [],
      singleArtWork: {
        artist_id: "",
        title: "",
        year: "",
        image: "",
        description: "",
        medium: ""
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetch("/artists")
      .then(response => response.json())
      .then(artists => {
        let loggedArtist = artists.data.find(
          artist => artist.attributes.name === this.props.artist
        );
        this.setState(
          {
            currentArtist: loggedArtist
          },
          () => {
            //FETCH Artist Work
            fetch("/artworks")
              .then(response => response.json())
              .then(artworks => {

                let getArtistWork = artworks.data.filter(
                  artwork => artwork.attributes.artist_id === Number(this.state.currentArtist.id)
                );

                this.setState({
                  artistWorks: getArtistWork
                });
              });
          }
        );
        console.log("loggedArtist: ", loggedArtist.id);
      });
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  addArtwork = response => {
    this.setState({
      artistWorks: [response, ...this.state.artistWorks],
      open: !this.state.open
    });
  };

  removeArtwork = response => {
    console.log('response: ', response);

    let updatedArtistWork = this.state.artistWorks.filter(
      artwork => artwork.id !== response
    );
    console.log('updatedArtistWork: ', updatedArtistWork);

    this.setState({
      artistWorks: updatedArtistWork
    });
  };

  render() {
    console.log('this.state.currentArtist: ', this.state.currentArtist);



    return (
      <div className="profile">
        {/* <div className="profile-card">

        <div className="profile-header">
        <h1>Your Portfolio</h1>
        {/* <div className="pencil" onClick={this.openModal}>
            ✎
          </div>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <div className="close" onClick={this.closeModal}>
                ⓧ
              </div>
              <EditProfileForm
                artist={this.state.currentArtist} 
              />
            </div>
          </Popup>
          <Popup
    trigger={<div className="pencil"> ✎</div>}
    modal
    closeOnDocumentClick
  >
    <EditProfileForm
                artist={this.state.currentArtist} 
              />
  </Popup>
        </div>





          <h2>{this.props.artist}</h2>
          <label>Bio</label>
     
          
          <label>Contact</label>
          <label>Website</label>

          </div>*/}
          <div className="profile-header"> 
          <h1>Art works: </h1> 
          <button className="button" onClick={this.openModal}>
            Add Artwork
          </button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <div className="close" onClick={this.closeModal}>
                ⓧ
              </div>
              <AddArtworkForm
                artist={this.state.currentArtist}
                addArtwork={this.addArtwork}
              />
            </div>
          </Popup>
        </div>

        {this.state.currentArtist.attributes ? (
          <ArtWorkContainer
            artWorks={this.state.artistWorks}
            currentArtist={this.state.currentArtist}
            removeArtwork={this.removeArtwork}
          />
        ) : null}
      </div>
    );
  }
}

export default Profile;
