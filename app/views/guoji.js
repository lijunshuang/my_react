import React from 'react';
import New from '../container/New'
export default class guoji extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <New>
                <h3>我是国际新闻</h3>
            </New>
        )
    }
}
