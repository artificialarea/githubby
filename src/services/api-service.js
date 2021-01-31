import config from '../config';

const ApiService = {
  getRepo(owner, repo) {
    const endpoint = 'https://api.github.com/repos';
    const url = `${endpoint}/${owner}/${repo}/commits`;
    const options = {
      'Authorization': `token ${config.API_KEY}`
    }
    return fetch(url, options)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
};

export default ApiService;