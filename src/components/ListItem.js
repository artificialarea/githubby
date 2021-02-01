// format Date into something human readable [^1]
function formatDate(date) {
  var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

function formatTime(date) {
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  if (mins < 10) {
      mins = '0' + mins;
  }
  if (secs < 10) {
      secs = '0' + secs;
  }

  return hours + ':' + mins + ':' + secs;
}

export default function ListItem(props) {
  const { item } = props;

  let modifiedDate = '';
  let modifiedTime = '';

  if (item.commit.author.date) {
    modifiedDate = formatDate(new Date(item.commit.author.date));
    modifiedTime = formatTime(new Date(item.commit.author.date));
  }

  return (
    <li key={item.sha}>
      <a href={item.html_url} target="_blank">
        <p className="commit--message">{item.commit.message}</p>
      </a>
      <div className="commit--attribution">
        {item.author && 
          <img src={item.author.avatar_url} className="avatar" alt="avatar" /> 
        }
        <p>
          {item.author && 
            <span className="author">{item.author.login}</span>
          } 
          {' '}
          <span className="date">{modifiedDate}</span>
          {' '} 
          <span className="time">{modifiedTime}</span>
        </p>
      </div>
    </li>
  )
}

ListItem.defaultProps = {
  item: {},
} 


/* FOOTNOTES //////////////////////////////////////////

[^1]: Format Dates
format Date into something human readable
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
- https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
- perhaps reiterate with a npm date-fns package?

*/