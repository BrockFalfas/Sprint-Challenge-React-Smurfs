import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newSmurf: {
          name: '',
          age: '',
          height: ''
        }
    };
  }

  addSmurf = (event) => {
    event.preventDefault();
    
    this.props.addSmurf(this.state.newSmurf)
    this.setState({
      newSmurf: {
        name: "",
        age: "",
        height: ""
      }
    })
  }

  handleInputChange = (e) => {
    this.setState({ 
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value 
      }
    });
  };

  render() {
    return (
      <div className="smurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            type="text"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            type="number"
            value={this.state.age}
            name="age"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            type="text"
            name="height"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
