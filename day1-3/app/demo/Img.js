import React from 'react';

export default class Imgtu extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    render() {
        //arr是IIFE
        const arr = (function() {
            var _arr = [];
            for (let i = 0; i < 53; i++) {
                _arr.push(i)
            }
            return _arr;
        })();
        return (
            <div className="box">
                <h2>这是0--53张图</h2>
                {arr.map((item,index) => <img key={index} src={`./images/${item}.jpg`} />)}
            </div>
        )
    }
}
