import React from "react"

function Home(props) {
  const navigateToSmurfs = (e) => {
    e.preventDefault()
    props.history.push("/smurfs-list")
  }
  
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h2>Welcome to Smurf's Village</h2>
        <button onClick={navigateToSmurfs} className="homeBtn">
          Smurfs
        </button>
      </div>
    </div>
  )
}

export default Home;