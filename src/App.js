import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [news, setNews] = useState([])
  console.log(news)

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=4656a5f121bd4c0a8eb39fea36624704')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
