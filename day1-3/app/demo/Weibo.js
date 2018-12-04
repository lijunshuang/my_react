import React from 'react';
import classnames from "classnames"; //动态类名 时 使用 此文件
export default class Weibo extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            content: ""
        }
    }
    render() {
        const {content} = this.state;
        return (<div>
                <h2>我是微博发布框</h2>
                <textarea cols="40" rows="10" value={content} onChange={e =>{
                    this.setState({
                        content : e.target.value
                    })
                }}></textarea>
                <span className={classnames({
                    "cur":content.length>140
                })}>{content.length}/140个字</span>
                <button disabled={content.length == 0 || content.length>140} onClick={() => {
                    this.setState({
                        content:''
                    })
                    alert("发布成功")
                }}>发布</button>
            </div>
        )
    }
}
