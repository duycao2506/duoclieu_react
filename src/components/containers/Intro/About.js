import React from 'react'
require('./About.css');
require('styles/App.css');
import {RaisedButton, TextField} from 'material-ui';

class About extends React.Component {
    render(){
        return (
            <div className='aboutHolder'>
	            <div className='aboutCard'>
                    <div className='sideDeco'>
                    </div>
                    <div className='textArea textL'>
                            <h2>Về nhà thuốc</h2>
                            <p>Đầu ti&ecirc;n, nh&agrave; thuốc đ&ocirc;ng y Hiệp Th&agrave;nh xin gửii tới qu&yacute; kh&aacute;ch lời ch&uacute;c sức khoẻ tr&acirc;n trọng nhất. Ch&uacute;ng t&ocirc;i xin c&aacute;m ơn qu&yacute; kh&aacute;ch đ&atilde; y&ecirc;u mến, tin cậy nh&agrave; thuốc trong thời gian qua.&nbsp;</p>
                            <div>&nbsp;</div>
                            <div>Nh&agrave; Thuốc Đ&ocirc;ng Y Hiệp Th&agrave;nh được th&agrave;nh lập từ năm 2007 bởi Lương Y Cao Khắc Đa. Với hơn 20 năm kinh nghiệm với dược liệu Đ&ocirc;ng Y, lương y sẽ cho bạn những lời tư vấn bổ &iacute;ch về sức khoẻ. Với t&ocirc;n chỉ &ldquo;Lương y như từ mẫu&rdquo;, nh&agrave; thuốc Đ&ocirc;ng Y Hiệp Th&agrave;nh lu&ocirc;n đặt sức khoẻ của qu&yacute; kh&aacute;ch l&ecirc;n tr&ecirc;n hết, tận t&acirc;m hướng dẫn v&agrave; theo d&otilde;i qu&aacute; tr&igrave;nh sử dụng thuốc của kh&aacute;ch, đồng thời việc sơ chế hay b&agrave;o chế thuốc lu&ocirc;n tu&acirc;n thủ c&aacute;c ti&ecirc;u chuẩn về vệ sinh.&nbsp;</div>
                            <div>&nbsp;</div>
                            <div>Ngo&agrave;i việc b&aacute;n thảo dược lẻ, nh&agrave; thuốc cũng l&agrave; nơi cung cấp dược liệu lượng sỉ cho c&aacute;c ph&ograve;ng kh&aacute;m Đ&ocirc;ng Y cũng như c&aacute;c cơ sở sản xuất, dịch vụ sử dụng dược liệu Đ&ocirc;ng Y tr&ecirc;n to&agrave;n quốc. Chất lượng dược liệu của nh&agrave; thuốc lu&ocirc;n đảm bảo c&aacute;c y&ecirc;u cầu được đề ra của c&aacute;c ph&ograve;ng kh&aacute;m cũng như cơ sở sử dụng dược liệu.</div>
                            <div>&nbsp;</div>
                            <div>Nh&agrave; thuốc Đ&ocirc;ng Y toạ lạc tại quầy A7, số 59 Hải Thượng L&atilde;n &Ocirc;ng Phường 10 Quận 5 TPHCM (Si&ecirc;u thị Đ&ocirc;ng Y Quận 5)</div>    
                            <div>&nbsp;</div>
                            <img src='images/sieuthithuoc.jpg'/>
                    </div>
                </div>

                
	        </div>
        );
    }
}

About.defaultProps = {

};

export default About;