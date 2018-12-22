import React from 'react';
import { connect } from 'dva';
import Sales from '../../container/Sales';
class CustomerRetention extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Sales current='CustomerRetention'>
                我是 CustomerRetention
            </Sales>
        )
    }
}
export default connect()(CustomerRetention)