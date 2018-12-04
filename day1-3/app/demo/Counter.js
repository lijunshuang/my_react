import React from 'react';
export default class Counter extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            a : 10
        }
    }
    //加法
    add(m){
        this.setState({
            a : this.state.a + m
        })
    }
    add1(){
        this.setState({
            a : this.state.a + 2
        })
    }
    //减法
    minus(m){
        this.setState({
            a : this.state.a - m
        })
    }
    render() {
        return (<div>
                <h2>我是小小计数器</h2>
                <div>
                    <h3>{this.state.a}</h3>
                    {/* bind(this) 绑定当前作用域，但是add1函数就不能传参了 */}
                    <button onClick={this.add1.bind(this)}>按我加2--bind(this)</button>
                    <button onClick={()=>{
                        this.setState({
                             a : this.state.a + 1
                        })
                    }}>按我加1</button>
                    <button onClick={()=>{
                        this.setState({
                             a : this.state.a - 1
                        })
                    }}>按我减1</button>
                    <button onClick={()=>this.add(5)}>按我加5(m)</button>
                    <button onClick={()=>this.minus(5)}>按我减5(m)</button>
                    <button onClick={()=>this.add(10)}>按我加10(m)</button>
                    <button onClick={()=>this.minus(10)}>按我减10(m)</button>
                </div>
            </div>
        )
    }
}
