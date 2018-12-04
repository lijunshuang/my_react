
import React from 'react';
export default class Palette2 extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state ={
            r : 0,
            g : 0,
            b : 0
        }
    }
    render() {
        const {r , g, b} = this.state;
        return (<div>
                    <h3>我是调色板</h3>
                    <div style={{"overflow":"hidden"}}>
                        <div style={{
                            "width":200,
                            "height" : 200,
                            "float":"left",
                            "background":`rgb(${r},${g},${b})`
                        }}>
                        </div>
                        <div style={{"marginLeft":220}}>
                        <p>
                            <input type="range" min={0} max={255} value={r} onChange={(e) => {
                                this.setState({
                                    r : e.target.value
                                })
                            }} />
                            <input type="number" min={0} max={255} value={r} onChange={(e) => {
                                this.setState({
                                    r : e.target.value
                                })
                            }} />
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={g} onChange={(e)=>{
                                this.setState({
                                    g : e.target.value
                                })
                            }} />
                            <input type="number" min={0} max={255} value={g} onChange={(e)=>{
                                this.setState({
                                    g : e.target.value
                                })
                            }} />
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={b} onChange={(e)=>{
                                this.setState({
                                    b : e.target.value
                                })
                            }} />
                            <input type="number" min={0} max={255} value={b} onChange={(e)=>{
                                this.setState({
                                    b : e.target.value
                                })
                            }} />
                        </p>
                    </div>
                </div>
                    
                   
            </div>
        )
    }
}
