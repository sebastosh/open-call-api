import React from "react";

class AddArtworkForm extends React.Component {
  state = {
    artWorkFile: null,
    artWorkURL: null,
    artist_id: "",
    title: "",
    year: 0,
    description: "",
    medium: ""
  };

  componentDidMount(props) {
    console.log("props: ", this.props);
    this.setState({
      artist_id: this.props.artist.id
    });
  }

  handleChange = e => {
    // console.log('e: ', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFile = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        artWorkFile: file,
        artWorkURL: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("artwork[artworkfile]", this.state.artWorkFile);
    formData.append("artwork[artist_id]", this.state.artist_id);
    formData.append("artwork[title]", this.state.title);
    formData.append("artwork[year]", this.state.year);
    formData.append("artwork[description]", this.state.description);
    formData.append("artwork[medium]", this.state.medium);

    fetch('/artworks', {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        const newArtWork = {
          id: response.id,
          type: "artwork",
          attributes: {
            title: this.state.title,
            year: this.state.year,
            description: this.state.description,
            medium: this.state.medium,
            artist_id: this.state.artist_id,
            artworkfile: this.state.artWorkURL
          }
        };

        this.props.addArtwork(newArtWork);
      });
  };

  render() {
    const preview = this.state.artWorkURL ? (
      <img className="image-preview" alt={this.state.title} src={this.state.artWorkURL} />
    ) : null;
    return (
      <div>
        <h3>Add an artwork:</h3>
        <form onSubmit={this.handleSubmit}>

          <input type="file" onChange={this.handleFile} name="title" />
          <div className="image-form-container" >{preview}</div>
          <label>Title</label>
          <input type="text" onChange={this.handleChange} name="title" />

          <label>Year</label>
          <input
            type="number"
            min="0"
            max="2099"
            step="1"
            onChange={this.handleChange}
            name="year"
          />

          <label>Description</label>
          <input type="text" onChange={this.handleChange} name="description" />

          <label>Medium</label>
          <input type="text" onChange={this.handleChange} name="medium" />

          <button type="submit" value="Add Artwork">
            Add
          </button>
         
        </form>
      </div>
    );
  }
}

export default AddArtworkForm;
