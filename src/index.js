// Import module yang dibuthkan
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Membuat root element
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Membuat function App
const App = () => {
  //   Inisialisasti state
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const [updatedName, setUpdateName] = useState(name);
  const [updatedJob, setUpdateJob] = useState(job);

  //   Membuat function handler
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleJob = (event) => {
    setJob(event.target.value);
  };

  const handleClick = () => {
    setUpdateName(name);
    setUpdateJob(job);
  };

  //   Mereturn html yang diperlukan
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleName}
        value={name}
        className="form-control"
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        id="job"
        name="job"
        onChange={handleJob}
        value={job}
        className="form-control"
      />
      <h1>Nama : {updatedName}</h1>
      <h1>Pekerjaan : {updatedJob}</h1>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

// Render App
root.render(<App />);
