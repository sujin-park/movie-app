import React, { Component } from 'react';
import './App.css';
import Movie from './movie.js';

class App extends Component {

state = {}

// fetch 가 완료되면 then 함수를 실행하고, 만약에 에러가 난다면 catch해서 console 에 보임
componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json()) // then은 fetch의 결과물 오브젝트만 보여줌
    .then(json => console.log(json))
    .catch(err => console.log(err))
}


_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
  }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
}
}
export default App;
