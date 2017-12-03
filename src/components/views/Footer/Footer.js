import React from 'react';
import styles from './Footer.css';

class Footer extends React.Component {
  constructor (props, context){
    super(props, context);
  }
  render(){
    return (
      <div className='footer'>
        <div className='leftText'>
          <p>Designed by Duy Cao - Contact me via 0908112536</p>
          <p> © 2007 - 2017, Hiep Thanh Duoc Hang. All rights reserved</p>
        </div>
        {/* <div className='rightText'>
          <p>Hiep Thanh Duoc Hang</p>
        </div> */}
      </div>
    );
  }
}

Footer.defaultProps = {

}


export default Footer;
