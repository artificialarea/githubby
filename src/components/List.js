import ListItem from './ListItem';

export default function List(props) {
  const { owner, repo, commits } = props;

  return (
    <>
      <h2>{owner} / {repo} </h2>
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