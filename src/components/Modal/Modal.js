import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");
function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", modalKeyDown);
    return () => window.removeEventListener("keydown", modalKeyDown);
  });
  const modalKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const modalBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={modalBackDropClick}>
      <div className={s.Modal}>
        {children}
        {/* <img
          src="https://image.tmdb.org/t/p/w400/zZMebBIsNipjFhJFv0zjm0KQaBF.jpg"
          alt="изображение pixabay"
        /> */}
      </div>
    </div>,
    modalRoot
  );
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

// class OldModal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener("keydown", this.modalKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.modalKeyDown);
//   }
//   modalKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };
//   modalBackDropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.modalBackDropClick}>
//         <div className={s.Modal}>
//           {this.props.children}
//           {/* <img
//           src="https://image.tmdb.org/t/p/w400/zZMebBIsNipjFhJFv0zjm0KQaBF.jpg"
//           alt="изображение pixabay"
//         /> */}
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
