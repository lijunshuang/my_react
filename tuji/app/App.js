import React from 'react';
import Choosestar from "./components/Choosestar"; //明星名字
import Bigimg from "./components/Bigimg" ;// 大图
import Smallimg from "./components/Smallimg"; // 小图导航

import "./styles/style.less";//引入样式文件

export default class App extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            idx : 1,
            star : "guanxiaotong"
        }
        this.changeStar = this.changeStar.bind(this);
        this.changeIdx = this.changeIdx.bind(this);
    }
    // k  v 一致 省略 v
    changeStar(star){
        this.setState({ star })
    }
    changeIdx(idx){
        this.setState({ idx })
    }
    render() {
        const {idx, star} = this.state;// 解构
        return (<div>
                <div className="tuji_box">
                    <h2>小小明星图集</h2>
                    {/* idx:{idx} , star: {star} */}
                    <Choosestar idx={idx} star={star} changeStar={this.changeStar}
                    changeIdx={this.changeIdx}></Choosestar>
                    <Bigimg idx={idx} star={star} changeIdx={this.changeIdx}
                    changeStar={this.changeStar}></Bigimg>
                    <Smallimg idx={idx} star={star} changeIdx={this.changeIdx}></Smallimg>
                </div>
            </div>
        )
    }
}
