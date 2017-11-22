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
        <img className="slideEleImg" src="images/yeoman.png"/>
        <div className="slideEleOverlayer">
        </div>
        <h2>SADSA</h2>
        <p>ewqewqewqewqewq</p>
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
