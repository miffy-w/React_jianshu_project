import React from 'react';
import { connect } from 'react-redux';
import banner_1 from '../static/banner-1.png';
import banner_2 from '../static/banner-2.png';
import banner_3 from '../static/banner-3.png';
import banner_4 from '../static/banner-4.png';

import {
    RecommendWrapper,
    Card
} from '../style';

const bannerSrc = [banner_1,banner_2,banner_3,banner_4];

class Recommend extends React.Component{
    render(){
        return (
            <RecommendWrapper>
                {bannerSrc.map(item => (
                    <Card key={item} src={item} />
                ))}
            </RecommendWrapper>
        );
    }
}

function mapState(state){
    return{
        recommendData: state.get('home').get('recommendData')
    }
}

export default connect(mapState,null)(Recommend);