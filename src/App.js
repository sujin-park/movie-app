import React, { Component } from 'react';
import './App.css';
import Movie from './movie.js';

class App extends Component {

//  render : componentWillMount() -> render() -> componentDidMount();
// 자동으로 되는 부분  컴포넌트가 존재하기 시작할 때 작동하는 부분
// will mount 를 진행하면 api 부분을 실행 -> 사이클 시작
// 해당 작업이 수행된 후  didMount 를 하면 성공적으로 리액트에 컴포넌트가 자리 잡음

// update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

// -> shouldComponentUpdate() 는 이전 props 와 새로운 props 를 비교해서
// 변경할 게 있다면 true가 되서 componentWilUpdate()를 실행한다.
// 컴포넌트는 많은 기능을 가지고 있고 순서대로 자동으로 작동한다.

state = {
greeting: "Hello!!!!!!!!",
movies: [
{
    id: 1,
    title: "Matrix",
    poster : "http://cfile227.uf.daum.net/image/166C894250AEDFBA0EB16C"
},
{
   id: 2,
    title: "Harry Porter",
    poster:"http://cfile227.uf.daum.net/image/166C894250AEDFBA0EB16C"
},
{
    id: 3,
    title: "Oldboy",
    poster :"http://post.phinf.naver.net/MjAxNzA3MjdfMzYg/MDAxNTAxMTQwODY5MzM1.tqJIiKs33hVRA33VWmsN54DSDdHOcKYITe6s0XAKOrsg.jG2GuSByozghZQo58ZB13sHKjS1nH3oKMGstxs1qfh0g.JPEG/image_4599575481501140844496.jpg?type=w1200"
},
{
    id: 4,
    title: "Star Wars",
    poster :"http://post.phinf.naver.net/MjAxNzA3MjdfMzYg/MDAxNTAxMTQwODY5MzM1.tqJIiKs33hVRA33VWmsN54DSDdHOcKYITe6s0XAKOrsg.jG2GuSByozghZQo58ZB13sHKjS1nH3oKMGstxs1qfh0g.JPEG/image_4599575481501140844496.jpg?type=w1200"
}
]
}

// 업데이트 할 때 직접적으로 state 를 변경하지 않는다.
// 업데이트를 할 때는 무조건 setState 를 해야하고, 업데이트 될 때 마다 렌더가 다시 작동한다. ( 새로운 state 와 함께 )
componentDidMount() {

  setTimeout(() => {
      this.setState({
          movies: [
            ...this.state.movies, // 이전 영화 리스트를 그대로 두고, 한개의 영화를 추가하라는 것
            {
                title: "Trainspotting",
                poster:"http://cfile227.uf.daum.net/image/166C894250AEDFBA0EB16C"
            }
          ]
      })
  }, 5000)
}
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return   <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
