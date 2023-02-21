import React from "react";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
import "semantic-ui-css/semantic.min.css";
import { Image } from "semantic-ui-react";
import unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import Thumbnail from "./Thumbnail";
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    // console.log(this.state.images);
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>
          <Image.Group size="small">
            {this.state.images.map((element) => (
              <Image src={element.urls.thumb} className={"item"} />
              //   <img src={element.urls.thumb} alt="a" />;
              //   console.log(element.urls.thumb)
            ))}
          </Image.Group>
        </div>
      </div>
    );
  }
}

export default App;
