import React from "react";
class Counting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click on me!
        </button>
      </div>
    );
  }
}
export default Counting;
