import React from 'react';

export default class Palette extends React.Component {
    constructor(){
        super();//必须调用超类

        this.state = {
            a : 10,
            r : 100,
            g : 200,
            b : 123
        }
    }
    //小小计数器
    add(){
        this.setState({
            a : this.state.a +10
        })
    }
    //调色板
    changeV(k, v){
        
    }
    render() {
        return (<div>

                <h2>小小计数器</h2>
                <div>
                    <span>{this.state.a}</span>
                    <button onClick={() => {this.add()}}>点我加</button>
                </div>
                
                <h2>调色板</h2>
                <div style={{"overflow":"hidden"}}>
                    <div style={{"width":200,"height":200,"float":"left","border":"1px solid #ddd","background":`rgb(${this.state.r},${this.state.g},${this.state.b})`}}></div>

                    <div style={{"float":"left"}}>
                        <p>
                            <input type="range" min={0} max={255} value={this.state.r} onChange={(e) => {
                                this.setState({
                                r : e.target.value
                                })
                            }
                            }/>
                            {this.state.r}
                            <input type="number" value={this.state.r} onChange={(e) =>{
                                this.setState({
                                    r : e.target.value
                                })
                            } }/>
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={this.state.g} onChange={(e) => {
                                this.setState({
                                g : e.target.value
                                })
                            }
                            }/>
                            {this.state.g}
                            <input type="number" value={this.state.g} onChange={(e) => {
                                g : e.target.value
                            }} />
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={this.state.b} onChange={(e) => {
                                this.setState({
                                b : e.target.value
                                })
                            }
                            }/>
                            {this.state.b}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
