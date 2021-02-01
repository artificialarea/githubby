import { useState, useEffect } from 'react';
import ApiService from '../services/api-service';
import ListItem from './ListItem';

export default function List(props) {
  const { owner, repo } = props.match.params;
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setCommits([]);
    ApiService.getRepo(owner, repo)
      .then(res => {
        setCommits(res);
        setError(null);
      })
      .catch(res => {
        setError(res.message);
        // setError('Repo not found ( >_<)');
      })

  }, [owner, repo]);

  return (
    <>
      <h2>{owner} / {repo} {error && <span className='error'>{error}</span>}</h2>
      <ul className="list">
        {commits.map((item) => (
          <ListItem 
            key={item.sha}
            item={item}
          />
        ))}
      </ul>
    </>
  )
}

List.defaultProps = {
  commits: []
} 