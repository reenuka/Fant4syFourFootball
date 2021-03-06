import React from 'react';
import Article from './article.jsx';
import articles from './../../../database/dummyData/dummyArticles.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.getArticles();
  // }

  // getArticles() {
  //   let url = new URL('https://api.nytimes.com/svc/search/v2/articlesearch');
  //   let params = {'q':'football',
  //                 'sort':'newest',
  //                 'api-key': '---'};
  //   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  //
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'no-cors'
  //   })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch(() => alert('ERROR'));
  // }


  render() {
    return (
      <div>
        <h1 id="welcome">Welcome {this.props.user}!</h1>
        <div>
          {articles.docs.map((article) =>
             <Article
               key={article._id}
               article={article} />
          )}
        </div>
      </div>
    );
  }
}

export default Home
