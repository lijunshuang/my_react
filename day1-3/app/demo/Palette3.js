import React from 'react';
export default class Palette3 extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            r : 0,
            g : 0,
            b : 0
        }
    }
    setColor(k, v){
        this.setState({
            [k]: v, //[ k ] 表示k是动态属性值
        })
    }
    render() {
        const {r, g, b} = this.state;
        return (<div style={{"overflow" : "hidden"}}>
                    <h3>我是调色板-setColor方法 </h3>
                    <div style={{
                        "float":"left",
                        "width":200,
                        "height":200,
                        "background":`rgb(${r},${g},${b})`
                    }}>
                    </div>
                    <div style={{"marginLeft":220}}>
                        <p>
                            <input type="range" min={0} max={255} value={r} onChange={e => {
                               this.setColor("r",e.target.value)
                            }} />
                            <input type="number" min={0} max={255} value={r} onChange={e => {
                                this.setColor("r",e.target.value)
                            }} />
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={g} onChange={e => {
                               this.setColor("g",e.target.value)
                            }} />
                            <input type="number" min={0} max={255} value={g} onChange={e => {
                                this.setColor("g",e.target.value)
                            }} />
                        </p>
                        <p>
                            <input type="range" min={0} max={255} value={b} onChange={e => {
                               this.setColor("b",e.target.value)
                            }} />
                            <input type="number" min={0} max={255} value={b} onChange={e => {
                                this.setColor("b",e.target.value)
                            }} />
                        </p>
                    </div>
            </div>
        )
    }
}
