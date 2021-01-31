import { useState } from 'react'; 
import Search from './components/Search';
import List from './components/List';
import ApiService from './services/api-service';
import './App.css';

export default function App() {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [commits, setCommits] = useState([]);

  function getRepo(owner, repo) {

    setOwner(owner);
    setRepo(repo);

    ApiService.getRepo(owner, repo)
      .then(res => setCommits(res))
      .catch(error => console.error(error))
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
