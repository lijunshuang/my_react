import React from 'react';
import App from './App'
export default class New extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <App current='New'>
                <h2>新闻栏目</h2>
                {this.props.children}
            </App>
        )
    }
}
