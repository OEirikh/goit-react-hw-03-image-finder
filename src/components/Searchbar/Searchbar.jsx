import React, { Component } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import s from "./Searchbar.module.css";

class SerchBar extends Component {
  state = {
    input: "",
  };

  hendelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim() === "") {
      return toast("enter your request please!", {
        position: "top-center",
        hideProgressBar: true,
      });
    }
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    const { handeleSubmit, hendelChange } = this;
    return (
      <header className={s.Searchbar}>
        <form onSubmit={handeleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}></span>
          </button>

          <input
            name="input"
            value={input}
            onChange={hendelChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SerchBar;
