import axios from 'axios';

async function getPicturesData(keyWord, page) {
  const API_KEY = '36595886-b06603009b8672cf4f1e12fec';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: keyWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
}

export default getPicturesData;
