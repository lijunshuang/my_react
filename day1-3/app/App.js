import React from 'react';
import Arrc from "./demo/Arrc";// 4种方法数组渲染
import Imgtu from "./demo/Img";//渲染图片
import JiuJiu from "./demo/JiuJiu";//九九乘法表
import TabImg from "./demo/TabImg";//6行8列 图片渲染
import Palette from "./demo/Palette"; //调色板
import Counter from "./demo/Counter";// 计数器
import Palette2 from "./demo/Palette2"; //调色板
import Palette3 from "./demo/Palette3"; //调色板--封装setColor方法
import Weibo from "./demo/Weibo"; //微博发布框
import Cart from "./demo/Cart"; //学生列表
import Students from "./demo/Students"; //学生列表
import Students2 from "./demo/Students2"; //学生列表

import "./styles/style.less";//引入样式文件

export default class App extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    render() {
                {/* 倒叙看，最新的在上面 */}
        return (<div>
                <Students2></Students2>
                <Students></Students>
                <Cart></Cart>
                <Weibo></Weibo>
                <Palette3></Palette3>
                <Palette2></Palette2>
                <Counter></Counter>
                <Palette></Palette>
                <TabImg></TabImg>
                <JiuJiu></JiuJiu>
                <Imgtu></Imgtu>
                <Arrc></Arrc>
            </div>
        )
    }
}
