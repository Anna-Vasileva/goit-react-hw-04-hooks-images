import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import "./App.css";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import mapper from "./helpers/mapper";

const KEY = "23417274-c745cca46d265f1806e9566e8";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    if (query === "") return;

    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((pictures) => {
        setGallery((prevGallery) => {
          return !prevGallery
            ? mapper(pictures.hits)
            : [...prevGallery, ...mapper(pictures.hits)];
        });
      })
      .catch(() => {
        console.log("Что-то пошло не так");
      })
      .finally(() => {
        setIsLoading(false);

        if (page > 1) {
          scroll();
        }
        // if (gallery.length === 0) {
        //   setPage(1);
        //   setGallery(null);
        // }
      });
  }, [query, page]);

  const changeInputData = (data) => {
    setPage(1);
    setGallery(null);
    setQuery(data);
  };
  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const onClickPicture = (e) => {
    const newLargeImageURL = e.currentTarget.getAttribute("data-large-img");
    if (e.currentTarget.hasAttribute("data-list")) {
      toggleModal();
      setLargeImageURL(newLargeImageURL);
    }
  };
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Searchbar onSubmit={changeInputData} />

      {gallery && (
        <ImageGallery gallery={gallery} onClickPicture={onClickPicture} />
      )}
      {gallery && <Button onClick={incrementPage} />}
      {isLoading && <Loader />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="изображение pixabay" />
        </Modal>
      )}
    </>
  );
}

export default App;

// class OldApp extends Component {
//   state = {
//     ...INITIAL_STATE,
//     isLoading: false,
//     query: "",
//     showModal: false,
//     largeImageURL: "",
//   };
//   componentDidMount() {
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.query !== this.state.query ||
//       prevState.page !== this.state.page
//     ) {
//       this.getImages();
//     }

//   }
//   changeInputData = (data) => {
//     this.setState({ ...INITIAL_STATE, query: data.inputData });
//   };
//   getImages = () => {

//     this.setState({ isLoading: true });
//     fetch(
//       `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((res) => res.json())
//       .then((pictures) => {

//         this.setState((prevState) => {
//           return !prevState.gallery
//             ? { gallery: mapper(pictures.hits) }
//             : { gallery: [...prevState.gallery, ...mapper(pictures.hits)] };
//         });
//       })
//       .catch((err) => {
//         console.log("Что-то пошло не так");
//       })
//       .finally(() => {

//         this.setState({ isLoading: false });
//         if (this.state.page > 1) {
//           this.scroll();
//         }
//         if (this.state.gallery.length === 0) {
//           this.setState({ ...INITIAL_STATE });
//         }
//       });
//   };
//   incrementPage = () => {
//     let { page } = this.state;
//     page += 1;
//     this.setState({ page });
//   };
//   toggleModal = () => {

//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   onClickPicture = (e) => {
//     const newLargeImageURL = e.currentTarget.getAttribute("data-large-img");
//     if (e.currentTarget.hasAttribute("data-list")) {
//       this.toggleModal();
//       this.setState(() => ({
//         largeImageURL: newLargeImageURL,
//       }));
//     }
//   };
//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };
//   render() {
//     const { isLoading, gallery, showModal, largeImageURL } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.changeInputData} />

//         {gallery && (
//           <ImageGallery
//             gallery={gallery}
//             onClickPicture={this.onClickPicture}
//           />
//         )}
//         {gallery && <Button onClick={this.incrementPage} />}
//         {isLoading && <Loader />}
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img

//               src={largeImageURL}
//               alt="изображение pixabay"
//             />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
