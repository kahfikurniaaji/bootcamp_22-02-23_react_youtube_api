import React from "react";
import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";
import { Comment, CommentGroup } from "semantic-ui-react";

export const Komentar = (props) => {
  const data = props.data;
  return data.map((d) => {
    <Comment>
        <Comment.Avatar src={d.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{d.name}</Comment.Author>
          <Comment.Metadata>
            <div>{d.time}</div>
          </Comment.Metadata>
          <Comment.Text>{d.comment}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
  });
};

export const Komentars = () => {
    return (
        <Comment>
        <Comment.Avatar src={faker.image.avatar()} />
        <Comment.Content>
          <Comment.Author as="a">{faker.name.fullName()}</Comment.Author>
          <Comment.Metadata>
            <div>{faker.date.past().toLocaleString()}</div>
          </Comment.Metadata>
          <Comment.Text>{faker.lorem.lines()}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
};