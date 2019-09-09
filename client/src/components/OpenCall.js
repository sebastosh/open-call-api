import React from 'react'
import OpenCallApply from './OpenCallApply'

class OpenCall extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  handleApply = () => {
    this.setState({
      apply: true
    }) 
  }

  handleCancel = () => {
    this.setState({
      apply: false
    })
  }
  render(){
    return (
      <div>
    
        <h1>{this.props.calls[this.props.match.params.callsId].attributes.name}</h1>
        <ul>
          <li>{this.props.calls[this.props.match.params.callsId].attributes.description}</li>
          <li>{this.props.calls[this.props.match.params.callsId].attributes.medium}</li>
          <li>Deadline: {this.props.calls[this.props.match.params.callsId].attributes.deadline }</li>
        </ul>
       
        {this.state.apply ? <OpenCallApply currentArtist={this.props.currentArtist} callId={this.props.match.params.callsId} handleCancel={this.handleCancel}/> : null}
        {this.state.apply ? null  : <button onClick={this.handleApply}>Apply</button>}
       
       
        

      </div>
    )
  }
}

export default OpenCall