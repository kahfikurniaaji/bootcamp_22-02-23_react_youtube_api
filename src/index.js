// Import module yang dibuthkan
import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import { Comment, CommentGroup } from "semantic-ui-react";

// Membuat root element
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Function untuk merender komentar
function CommentLayout() {
  const data = [
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      time: faker.date.past().toLocaleString(),
      comment: faker.lorem.lines(),
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      time: faker.date.past().toLocaleString(),
      comment: faker.lorem.lines(),
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      time: faker.date.past().toLocaleString(),
      comment: faker.lorem.lines(),
    },
  ];

  return data.map((d, i) => {
    return (
      <CommentGroup>
        <Comment key={i}>
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
      </CommentGroup>
    );
  });
}

// Render App
root.render(<CommentLayout />);
