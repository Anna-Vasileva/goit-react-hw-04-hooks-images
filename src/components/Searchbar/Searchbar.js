import { useState } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [inputData, setInputData] = useState("");

  const changeValue = (event) => {
    setInputData(event.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
    reset();
  };
  const reset = () => {
    setInputData("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s["SearchForm-button"]}>
          <span className={s["SearchForm-button-label"]}>Search</span>
        </button>

        <input
          className={s["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeValue}
          value={inputData}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
// class OldSearchbar extends Component {
//   state = {
//     inputData: "",
//   };
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
//   changeValue = (event) => {
//     this.setState({ inputData: event.currentTarget.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ inputData: "" });
//   };
//   render() {
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s["SearchForm-button"]}>
//             <span className={s["SearchForm-button-label"]}>Search</span>
//           </button>

//           <input
//             className={s["SearchForm-input"]}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.changeValue}
//             value={this.state.inputData}
//           />
//         </form>
//       </header>
//     );
//   }
// }
