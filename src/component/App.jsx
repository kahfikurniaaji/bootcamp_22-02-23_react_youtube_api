// Import module yang dibutuhkan
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Embed, Grid, Header, Item } from "semantic-ui-react";
import youtube from "../api/Youtube";
import SearchBar from "./SearchBar";

// Class App
class App extends React.Component {
  state = { images: [], items: [{ id: "", image: "" }] };

  onSearchSubmit = async (term) => {
    // Get url
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDDBKtfLzYtGA1M854SeZ3YudPMfsIBdXE",
        type: "video",
      },
    });

    // Mengubah state items
    this.setState(
      (this.state.items = response.data.items.map((element, index) => {
        console.log(element);
        const item = {};
        item.id = element.id.videoId;
        item.childKey = index;
        item.image = element.snippet.thumbnails.default.url;
        item.header = element.snippet.title;
        item.description = element.snippet.channelTitle;
        item.meta = "";
        item.extra = "";
        return item;
      }))
    );
    
  };

  // Render
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Embed
                  id={this.state.items[0].id}
                  placeholder={this.state.items[0].image}
                  source="youtube"
                />
                <Header as='h2'>{this.state.items[0].header}</Header>
                <Header as='h5'>{this.state.items[0].description}</Header>
              </Grid.Column>
              <Grid.Column width={6}>
                <Item.Group items={this.state.items} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

// Export App
export default App;
