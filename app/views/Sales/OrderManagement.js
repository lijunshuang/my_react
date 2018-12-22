import React from 'react';
import { connect } from 'dva';
import Sales from '../../container/Sales';
class OrderManagement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Sales current='OrderManagement'>
                我是 OrderManagement
            </Sales>
        )
    }
}
export default connect()(OrderManagement)