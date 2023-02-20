import React from "react";
import "semantic-ui-css/semantic.min.css";
import CommentContainer from "../container/ComponentContainer";

class Comments extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.liked,
  //   };
  // }

  render() {
    return this.props.data.map((dataComment, index) => (
      <div className="commentContainer" key={index}>
        <CommentContainer
          avatar={dataComment.avatar}
          name={dataComment.name}
          day={dataComment.day}
          time={dataComment.time}
          comment={dataComment.comment}
          liked={dataComment.liked}
        />
      </div>
    ));
  }
}

export default Comments;
