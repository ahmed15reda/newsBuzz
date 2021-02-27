import axios from 'axios';

export const getAllNews = async () => {
    const news = await axios.get(`http://80.240.21.204:1337/news?skip=12&limit=70`)
    .then(({data}) => {
      return data
    })
    return news
  }

