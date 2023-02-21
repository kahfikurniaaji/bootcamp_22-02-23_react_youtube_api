import React from "react";
import { Image } from "semantic-ui-react";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: props.urls.thumb };
  }
  render() {
    return (
      <div>
        <Image.Group size="tiny">
          {this.props.forEach((element) => {
            <Image src={element} />;
          })}
        </Image.Group>
      </div>
    );
  }
}

export default Thumbnail;
