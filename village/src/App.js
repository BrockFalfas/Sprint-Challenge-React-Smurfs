import React, { Component } from 'react';
import axios from "axios";
import {Route, NavLink} from "react-router-dom";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
          this.setState({ smurfs: res.data })
      })
      .catch((err) => {
          console.log(err)
      })
  }

  addSmurf = (newSmurf) => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        this.setState({ smurfs: res.data })
        this.props.history.push("/smurfs-list")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        console.log(res)
        this.setState({ smurfs: res.data })
        this.props.history.push("/smurfs-list")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
          <nav>
            <div className="navLinks">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/new-smurf">
                Add Smurf
              </NavLink>
              <NavLink exact to="/smurfs-list">
                The Smurfs
              </NavLink>
            </div>
          </nav>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/smurfs-list"
          render={()  =>  <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />}
        />
        <Route path="/new-smurf" render={() => <SmurfForm addSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
