import axios from 'axios';

const API_KEY = '19523090-f506c73c92b4aeb69931e279f';

const fetchImages = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};

export default {
  fetchImages,
};
