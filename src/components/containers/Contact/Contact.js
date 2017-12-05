import React from 'react'
import MapView from 'components/views/MapView/MapView'
import TextField from 'material-ui/TextField';
require ('./Contact.css');
class Contact extends React.Component {
    render(){
        return (
            <div className = 'contactContainer'>
                <div className='contactPanel'>
                    <MapView
                            true
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div className='mapView'/>}
                            mapElement={<div className='mapEle' style={{ height: `100%` }} />}
                        />
                    <div className="contactCard">
                        <div className='firstback'></div>
                        <img src='images/pattern.jpeg'/>
                        <div className='contactcontent'>
                            <h3>Nhà thuốc Đông y Hiệp Thành</h3>
                            <h4>Địa chỉ</h4>
                            <p>59 Hải Thượng Lãn Ông, Phường 10, Quận 5, TP Hồ Chí Minh</p>
                            <h4>Điện thoại</h4>
                            <p>0909 135 037 - 0909 835 263</p>
                        </div>
                    </div>
                </div>
                <div className='feebBackPanel'>
                    <h3>Lời nhắn</h3>
                    <div className='inputPanel'>
                        <div className='inputRow' >
                            <p>Họ tên: </p>
                            <TextField
                            fullWidth = 'true'
                            hintText="Tên bạn là gì?"
                            /><br />
                            <br />
                            
                            
                        </div>
                        <div className='inputRow'>
                            <p>Email (*): </p>
                            <TextField
                            fullWidth = 'true'
                            hintText="Địa chỉ email"
                            /><br />
                            <br />
                        </div>
                        <div className='inputRow'>
                            <p>Điện thoại (*): </p>
                            <TextField
                            fullWidth = 'true'
                            hintText="Số điện thoại liên lạc"
                            /><br />
                            <br />
                        </div>

                        <div className='inputRow'>
                            <p>Nội dung (*): </p>
                            <TextField
                            multiLine = 'true'
                            rowsMax = '10'
                            fullWidth = 'true'
                            hintText="Bạn muốn để lại lời nhắn gì?"
                            /><br />
                            <br />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

Contact.defaultProps = {
};

export default Contact;