import React, { Component } from "react";

import s from "./Searchbar.module.css";

class SerchBar extends Component {
  state = {
    input: "",
  };

  hendelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { input } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}></span>
          </button>

          <input
            name="input"
            value={input}
            onChange={this.hendelChange}
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
