// Import module yang dibuthkan
import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import Comments from "./component/Comments";
import moment from "moment";
import Clock from "./component/Clock";
import Form from "./component/Form";
import App from "./component/App";

// Membuat root element
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const data = [
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    day: "Today",
    time: moment(faker.date.recent().toLocaleString()),
    comment: faker.lorem.lines(),
    liked: faker.datatype.number({ min: 0, max: 100 }),
  },
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    day: "Today",
    time: moment(faker.date.recent().toLocaleString()),
    comment: faker.lorem.lines(),
    liked: faker.datatype.number({ min: 0, max: 100 }),
  },
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    day: "Today",
    time: moment(faker.date.recent().toLocaleString()),
    comment: faker.lorem.lines(),
    liked: faker.datatype.number({ min: 0, max: 100 }),
  },
];

// const App = () => {
//   // return <Comments data={data} />;
//   // return <Counting />
//   return <Form />;
// };

// Render App
root.render(<App />);
