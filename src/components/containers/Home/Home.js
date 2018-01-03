import React from 'react'
import DSlides from 'components/views/DSlides/DSlides'
import DIntroCell from 'components/views/DIntroCell/DIntroCell'
import styles from './Home.css';
class Home extends React.Component {
    render(){
        return (
            <div>
                <DSlides/>
                <div className='introHolder'>
                    <DIntroCell 
                    image='images/4.jpeg' 
                    title='Tư vấn'
                    description='Khi đến với nhà thuốc, quý khách sẽ được tư vấn, hướng dẫn về cách sử dụng thuốc Đông Y hiệu quả nhất tùy theo từng trường hợp khác nhau. 
                    Với tâm thế của một nhà thuốc, sự tận tâm luôn là ưu tiên hàng đầu.'
                    icon='lnr-bubble'
                    />
                    <DIntroCell 
                    image='images/5.jpeg' 
                    title='Cung cấp'
                    description='SỈ và LẺ các loại dược liệu Đông Y, nhận hốt thuốc thang theo toa, bào chế thuốc đáp ứng yêu cầu. 
                    Chất lượng thuốc luôn được đảm bảo.'
                    icon='lnr-leaf'
                    />
                    
                    <DIntroCell 
                    image='images/7.jpeg' 
                    title='Giao hàng'
                    description='Giao hàng toàn quốc với chi phí hợp lý cho những khách hàng lấy sỉ lâu dài tại nhà thuốc.'
                    icon='lnr-rocket'
                    />
                </div>
            </div>
        );
    }
}

Home.defaultProps = {
    
};

export default Home;