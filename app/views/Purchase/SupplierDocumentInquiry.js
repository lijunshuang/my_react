import React from 'react';
import { connect } from 'dva';
import Purchase from '../../container/Purchase'
class SupplierDocumentInquiry extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <Purchase current="SupplierDocumentInquiry">
                我是 SupplierDocumentInquiry
            </Purchase>
        )
    }
}
export default connect()(SupplierDocumentInquiry)