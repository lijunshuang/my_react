import React from 'react';
import { connect } from 'dva';
import Purchase from '../../container/Purchase';
class PurchaseReturnManagement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Purchase current="PurchaseReturnManagement">
               我是 PurchaseReturnManagement
            </Purchase>
        )
    }
}
export default connect()(PurchaseReturnManagement)