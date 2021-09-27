import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
      <Row xs={1} md={2} mt-5 className="g-4">
        {
          news.map(nw => <News
            key={nw.url}
            news={nw} />)
        }
      </Row>
    </div>
  );
}

export default App;
