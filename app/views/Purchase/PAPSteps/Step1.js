import React from 'react';
import Step1Form from './Step1Form';
export default class Step1 extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <div>
                <h1>请填写基本信息</h1>
                <Step1Form></Step1Form>
            </div>
        )
    }
}
