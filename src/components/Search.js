import { useHistory } from 'react-router-dom';

export default function Search(props) {

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const owner = event.target.search_owner.value;
    const repo = event.target.search_repo.value;
    if (owner.length && repo.length) {
      history.push(`/${owner}/${repo}`);
    }
  }

  return (
    <div className="searchbar">
      <form onSubmit={onSubmitForm}>
        <div className="inputgroup">
          <label htmlFor="search_owner">User</label>
          <input 
            type="text" 
            name="search_owner"
            id="search_owner" 
            aria-label='username'
          />
        </div>
        <div className="inputgroup">
          <label htmlFor="search_repo">Repo</label>
          <input 
            type="text" 
            name="search_repo"
            id="search_repo" 
            aria-label='repo'
          />
        </div>
        <input type="submit" className="button" value="Find" />
      </form>
    </div>
  )
} 