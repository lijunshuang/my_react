import React from 'react';
import { connect } from 'dva';
import Sales from '../../container/Sales';
class PromotionManagement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Sales current='PromotionManagement'>
                我是 PromotionManagement
            </Sales>
        )
    }
}
export default connect()(PromotionManagement)