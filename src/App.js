import { Route, Link } from 'react-router-dom';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default function App() {

  return (
    <main className="App">
      <header className="App-header">
        <h1><Link to=''>GitHub.by</Link></h1>
      </header>
      <Search />
        <Route 
          path='/:owner/:repo'
          render={(props) => 
            <List {...props} />
          }
        />
    </main>
  );
}
