import React from 'react';
import App from '../../container/App';
export default class Index extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <App>
                <h2 style={{textAlign:'center',padding:'20px 0px',fontSize:50}}>首页</h2>
            </App>
        )
    }
}
