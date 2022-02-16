import "./App.css";
import { Component } from "react";
import { ToastContainer } from "react-toastify";

import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    query: "",
  };

  hendleSearchBarSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.hendleSearchBarSubmit} />
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}

export default App;
