import Axios from 'axios';
import youtubeKey from '../Keys/keys';

const KEY = youtubeKey;

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
