import React from 'react'
import MapView from 'components/views/MapView/MapView'

require ('./Contact.css');
require('styles/App.css');
class Contact extends React.Component {
    render(){
        return (
            <div className = 'contactContainer'>
                <div className='contactPanel'>
                    <MapView
                            true
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div className='mapView'/>}
                            mapElement={<div className='mapEle' style={{ height: '100%' }} />}
                        />
                    <div className="contactCard">
                        <div className='firstback'></div>
                        <img src='images/pattern.jpeg'   />
                        <div className='contactcontent'>
                            <h3>Nhà thuốc Đông y Hiệp Thành</h3>
                            <h4>Địa chỉ</h4>
                            <p>Quầy A7 - 59 Hải Thượng Lãn Ông, Phường 10, Quận 5, TP Hồ Chí Minh</p>
                            <h4>Điện thoại</h4>
                            <p>
                                <span>Gọi : </span> 
                                <a href='tel:+84909135037' target="_blank" >0909 135 037</a> <span> - </span> 
                                <a href='tel:+84909835263' target="_blank">0909 835 263</a>
                            </p>
                            <h4>Mạng xã hội</h4>
                            <p>
                                <a href='https://chat.zalo.me/?phone=84909835263' target="_blank">
                                    <img style={{width:'36px',height:'36px', marginRight:'16px'}} src='images/zalo.png'/>
                                </a>
                                <a href='https://m.me/100012430990508' target="_blank">
                                    <img style={{width:'36px',height:'36px', marginRight:'16px'}} src='images/messenger.png'/>
                                </a>
                            </p>
                            <h4>Email</h4>

                            <p><a href='mailto:hiepthanhduochang@gmail.com'>hiepthanhduochang@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className='feedbackPanel'>
                    <div className='radiusPanel textL'>
                        <h2>Thông tin chuyển khoản</h2>
                        <div className="bankPanel">
                            <div  className="bankAccount">
                                <h3 id='agrb'>Agribank</h3>
                                <p>Chi nhánh Bình Thạnh</p>
                                <p>Chủ tài khoản:   Cao Khắc Lê Duy</p>
                                <p>Số tài khoản:    6380205262104</p>
                            </div>
                            <div  className="bankAccount">
                                <h3 id='sacb'>Sacombank</h3>
                                <p>Chi nhánh Hàn Hải Nguyên</p>
                                <p>Chủ tài khoản:   Lê Thị Thuý Phượng</p>
                                <p>Số tài khoản:    060138225685</p>
                            </div>
                            <div className="bankAccount">
                                <h3 id='techb'>Techcombank</h3>
                                <p>Chi nhánh Phan Đình Phùng</p>
                                <p>Chủ tài khoản:   Cao Khắc Lê Duy</p>
                                <p>Số tài khoản:    19030301701011</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                {/* <div className='feedbackPanel'>
                    
                    <div className='radiusPanel textL'>
                        <h2>Lời nhắn</h2>
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

                        <div className='inputRow'>
                            <RaisedButton label="Gửi"  backgroundColor='rgb(30, 194, 128)' labelColor='#ffffff'  />
                        </div>
                    </div>
                    
                    
                </div> */}

            </div>
        );
    }
}

Contact.defaultProps = {
};

export default Contact;