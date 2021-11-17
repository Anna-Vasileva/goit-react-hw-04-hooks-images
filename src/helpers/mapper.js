const mapper = (hits) => {
  return hits.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
export default mapper;
