import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import News from './Components/News/News';

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=4656a5f121bd4c0a8eb39fea36624704')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="App">
      {
        news.length === 0 ?
          <Button variant="primary" className="justify-content-lg-center mt-5" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
          :
          <Row xs={1} md={3} lg={4} className="g-4 m-5">
            {
              news.map(nw => <News
                key={nw.url}
                news={nw} />)
            }
          </Row>
      }
    </div>
  );
}

export default App;
