import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Comment, CommentGroup } from "semantic-ui-react";
import Counting from "../component/Counting";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.liked,
    };
  }
  render() {
    return (
      // <Comment.Group>
      //   <Comment>
      //     <Comment.Avatar as="a" src={this.props.avatar} />
      //     <Comment.Content>
      //       <Comment.Author>{this.props.name}</Comment.Author>
      //       <Comment.Metadata>
      //         <div>{this.props.day} at {this.props.time}</div>
      //       </Comment.Metadata>
      //       <Comment.Text>{this.props.comment}</Comment.Text>
      //       <Comment.Actions>
      //         <Comment.Action>Reply</Comment.Action>
      //       </Comment.Actions>
      //     </Comment.Content>
      //   </Comment>
      // </Comment.Group>
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={this.props.avatar} alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.name}
            </a>
            <div className="metadata">
              <span className="date">
                {this.props.day} at {this.props.time} |
              </span>
            </div>
            <div className="metadata">
              <span className="liked">Liked: {this.state.count}</span>
            </div>
            <div className="text">{this.props.comment}</div>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              click on me!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentContainer;
