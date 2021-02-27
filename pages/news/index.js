import {getAllNews} from '../../lib/news';


const News = ({allNews}) => {
    console.log(allNews.news)
    return (
      <div>
          
      </div>
    )
  }

export const getStaticProps  = async () => {
    const allNews = await getAllNews()
    return {
      props: {
        allNews
      }
    }
  }
  
export default News