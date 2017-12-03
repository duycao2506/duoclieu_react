import React from 'react';
import styles from './DSlidesEle.css';
import PropTypes from 'prop-types';


class DSlidesEle extends React.Component {

  constructor(props, context){
    super(props,context);

  }
  render(){
    return(
      <div className="imgHolder">
        <div className="slideEleBelowlayer" />
        <a href='#'><img className="slideEleImg" src={'images/' + this.props.image}/></a>
        <div className="slideEleOverlayer" />
        {this.props.children}
      </div>
    );
  }
}

DSlidesEle.defaultProps = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default DSlidesEle;
