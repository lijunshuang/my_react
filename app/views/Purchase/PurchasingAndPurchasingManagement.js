import React from 'react';
import Purchase from '../../container/Purchase';
import { connect } from 'dva';
import {Steps} from 'antd';

import Step1 from './PAPSteps/Step1';// 第一步
import Step2 from './PAPSteps/Step2';// 第二步

const Step = Steps.Step;

class PurchasingAndPurchasingManagement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        //显示title
        const showTitle = (now, s)=>{
            if (now == s) {
                return '进行中'
            } else if (s < now) {
                return '已完成'
            }else{
                return '待完成'
            }
        }
        //根据step来显示不同组件
        const showStep = (now) => {
            if (now == 1) {
                return <Step1 />
            } else if(now == 2) {
                return <Step2 />
            }else if(now == 3) {
                return <Step3 />
            }
        }
        return (
            <Purchase current="PurchasingAndPurchasingManagement">
                <h2>采购进货管理</h2>
                <Steps current={this.props.step-1}>
                    <Step title={showTitle(this.props.step, 1)} description="订单基本信息" />
                    <Step title={showTitle(this.props.step, 2)} description="附属票据图片上传，微信转账图片上传" />
                    <Step title={showTitle(this.props.step, 3)} description="3个工作日审核" />
                </Steps>
                {
                    showStep(this.props.step)
                }
            </Purchase>
        )
    }
}
export default connect(({purchasandpurchasModel})=>({
    step: purchasandpurchasModel.step
}))(PurchasingAndPurchasingManagement)