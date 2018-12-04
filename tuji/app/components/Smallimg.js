import React from 'react';
import classnames from "classnames";
export default class Smallimg extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    
    render() {
        const showimg=()=>{
            const arr=[];
            for(let i=1;i<=5;i++){
                arr.push(<li key={i}
                    className={classnames({"cur" : this.props.idx == i})}
                    onClick={()=>{
                        this.props.changeIdx(i)
                    }}
                >
                    <img src={`images/${this.props.star}/${i}.jpg`} />
                </li>)
            }
            return arr;
        }
        return (<div>
                <ul className="imgList">
                    {showimg()}
                </ul>
            </div>
        )
    }
}
