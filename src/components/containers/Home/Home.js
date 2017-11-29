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
                    description='Coodsadsadsa dsadsa'
                    icon='lnr-store'
                    />
                    
                    <DIntroCell 
                    image='images/6.jpeg' 
                    title='Giao hàng'
                    description='Coodsadsadsa dsadsa'
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