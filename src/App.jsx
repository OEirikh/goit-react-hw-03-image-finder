import s from "./App.module.css";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import fetchImages from "./components/Services/api";

class App extends Component {
  state = {
    query: "",
    page: 1,
    isPending: false,
    isModalOpen: false,
    images: [],
    modalImg: "",
  };

  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      return toast("enter your request please!", {
        position: "top-center",
        hideProgressBar: true,
      });
    }
    this.setState({ isPending: true, page: 1 });
  };

  handleTogleModal = (image) => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: image,
    }));
  };

  handleLoadMore = (e) => {
    this.setState((prev) => ({ page: prev.page + 1, isPending: true }));
  };

  componentDidUpdate() {
    if (this.state.isPending) {
      fetchImages(this.state.query, this.state.page).then((img) => {
        this.setState((prev) => ({
          images: this.state.page > 1 ? [...prev.images, ...img] : img,
          isPending: false,
        }));
      });
    }
  }

  render() {
    const { isModalOpen, images, query, modalImg } = this.state;
    const {
      handleSetQuery,
      handleSubmitForm,
      handleTogleModal,
      handleLoadMore,
    } = this;
    return (
      <div className={s.App}>
        <Searchbar
          query={query}
          handleSetQuery={handleSetQuery}
          handleSubmitForm={handleSubmitForm}
        />
        <ImageGallery handleTogleModal={handleTogleModal} images={images} />
        {images.length >= 12 && <Button handleLoadMore={handleLoadMore} />}
        {isModalOpen && (
          <Modal modalImg={modalImg} handleTogleModal={handleTogleModal} />
        )}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

export default App;
