import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
  render() {
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${ this.props.post.code }`}>
            <img className='grid-photo' src={ this.props.post.display_src } alt={ this.props.post.caption }/>
          </Link>

          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
            <span key={ this.props.post.likes } className='likes-heart'>hey</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{ this.props.post.caption }</p>
          <div className='control-buttons'>
            <button className='likes' onClick={ () => this.props.increment(this.props.i) }>&hearts; { this.props.post.likes }</button>
            <Link className='button' to={ `/view/${this.props.post.code}` }>
              <span className='comment-count'>
                <span className='speech-bubble'></span>
                { this.props.comments[this.props.post.code] ? this.props.comments[this.props.post.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

/* Photo.propTypes = {
  i: PropTypes.number,
  post: PropTypes.object,
  comments: PropTypes.object,
  increment: PropTypes.func
}; */

export default Photo;