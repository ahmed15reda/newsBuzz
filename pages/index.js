import React, {Fragment} from 'react';
import Header from '../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import {faRss} from '@fortawesome/free-solid-svg-icons';
import {getAllNews} from '../lib/news';
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home(props) {
  return (
        <Fragment>
          <Header />
          <div className={styles.container}>
              <Grid className={styles.news} item md={6}>
                
              {props.props.allNews.news.map(({_id, title, keywords, source,created_at}) => (
                <div className={styles.new} item key={_id}>
                  <div className={styles.details}>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <img className="mr-2" src={source?.url} alt="Image"/>
                          <p className={styles.title}>{source?.title}</p>
                        </div>
                        <FontAwesomeIcon className={styles.icon} icon={faRss} />
                      </div>
                      <p>{title}</p>
                      <span className="text-muted ml-3">{created_at}</span>
                      
                  </div>

                  {keywords.map((keyword) => <div className={styles.keyword} key={Math.random()}>{keyword.name}</div>)}
                  </div>
                  
                ))}
              </Grid>
        </div>
        </Fragment>
    
  )
}

Home.getInitialProps = async () => {
  const allNews = await getAllNews()
  return {
    props: {
      allNews
    }
  }
}
