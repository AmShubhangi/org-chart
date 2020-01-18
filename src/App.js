import React from 'react';
import './App.css';
import Rorgchart from './r-orgchart/src/index'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: require('./client.json'),
    }
  }

  render() {
    console.log(this.state.data)
    // const data = [
    //   { id: 1, Name: "Root Node", ParentLocationId: null, Users: 90, Identifiers: 99 },
    //   { id: 2, Name: "Node 1", ParentLocationId: 1, Users: 90, Identifiers: 99 },
    //   { id: 3, Name: "Node 2", ParentLocationId: 1, Users: 90, Identifiers: 89 },
    //   { id: 4, Name: "Node 1.1", ParentLocationId: 2, Users: 90, Identifiers: 99 },
    //   { id: 5, Name: "Node 1.2", ParentLocationId: 2, Users: 90, Identifiers: 59 },
    // ];

    return (
      <div className="App" >
        <Rorgchart data={this.state.data} />
      </div>
    );
  }
}

export default App;
