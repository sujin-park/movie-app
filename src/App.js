import React, { Component } from 'react';
import './App.css';
import Movie from './movie.js';

class App extends Component {

state = {}

// fetch 가 완료되면 then 함수를 실행하고, 만약에 에러가 난다면 catch해서 console 에 보임
componentDidMount() {
  this._getMovies();
}


_renderMovies = () => {
  const movies = this.state.movies.map(movie => {
    return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
  })
  return movies
  }

  _getMovies = async () => { // async 를 쓰지않으면 await 작동 안함
    const movies = await this._callApi()
    this.setState({ // this.setState는 callApi가 작업이 완료된 후에 실행 (성공적으로 실행됐든 아니든 상관없음)
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json()) // then은 fetch의 결과물 오브젝트만 보여줌
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
