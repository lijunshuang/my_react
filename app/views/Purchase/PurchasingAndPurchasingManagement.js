import React from 'react';
import Purchase from '../../container/Purchase';
import { connect } from 'dva';
class PurchasingAndPurchasingManagement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Purchase current="PurchasingAndPurchasingManagement">
                我是PurchasingAndPurchasingManagement
            </Purchase>
        )
    }
}
export default connect()(PurchasingAndPurchasingManagement)