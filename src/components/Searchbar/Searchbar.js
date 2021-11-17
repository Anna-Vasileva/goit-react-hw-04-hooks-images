import React, { Component } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    inputData: "",
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  changeValue = (event) => {
    this.setState({ inputData: event.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ inputData: "" });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s["SearchForm-button"]}>
            <span className={s["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={s["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeValue}
            value={this.state.inputData}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
