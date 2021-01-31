import { useState } from 'react'; 
import config from './config';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default function App() {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [commits, setCommits] = useState([]);

  function getRepo(owner, repo) {
    const endpoint = 'https://api.github.com/repos';
    const url = `${endpoint}/${owner}/${repo}/commits`;

    const options = {
      'Authorization': `token ${config.API_KEY}`
    };

    setOwner(owner);
    setRepo(repo);

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setCommits(data);
      })
      .catch(error => console.error(error));
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>GitHub.by</h1>
      </header>
      <Search 
        getRepo={getRepo}
      />
      <List 
        owner={owner}
        repo={repo}
        commits={commits}
      />
    </main>
  );
}
