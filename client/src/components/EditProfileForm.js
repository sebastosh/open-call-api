import React from 'react';


 class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    bio: '',
    website: ''
  }

  componentDidMount() {
    console.log(this.props)

    this.setState({
      name: this.props.artist.attributes.name,
    email: this.props.artist.attributes.email,
    bio: this.props.artist.attributes.bio,
    website: this.props.artist.attributes.website
    })
  }

   handleSubmit = (e) => {
     console.log('e: ', e);
    e.preventDefault()
    debugger
    fetch('/artists', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        console.log('response: ', response);
      })
  }

   handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
 
    return (

      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Name" />
        <input type="email" value={this.state.email} onChange={this.handleChange} name="email"
        placeholder="email address" />
        <textarea value={this.state.bio} rows="4" cols="50" onChange={this.handleChange} name="bio" placeholder="bio or short description" />
        <input type="url" value={this.state.website} onChange={this.handleChange} name="website"
        placeholder="https://example.com"
        pattern="https://.*" size="30"
        />
        <input type="submit" value="Update" />
      </form>

    );
  }
}

 export default Signup;