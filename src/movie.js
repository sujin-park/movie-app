import React, {Component} from 'react';
import './movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {
    static propTypes = {
          title: PropTypes.string.isRequired,
          poster: PropTypes.string.isRequired
    }

    render() {
      console.log(this.props);
        return (
          <div>
          <Movieposter poster={this.props.poster}/>
          <h1>{this.props.title}</h1>
          </div>
        )
    }

}


class Movieposter extends Component {
  static propTypes = {
        poster: PropTypes.string.isRequired
  }
  render() {
      return(
          <img src={this.props.poster}/>

      )
  }


}
export default Movie;
