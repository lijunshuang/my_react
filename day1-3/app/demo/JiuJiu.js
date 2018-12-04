import React from 'react';
export default class JiuJiu extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    render() {
        const showJiujiu = () => {
            var arr = [];
            for (let i = 1; i <= 9; i++) {
                let temp = [];
                for (let j = 1; j <= i; j++){
                    temp.push(<td key={j}>{i} * {j} = {i * j}</td>)
                }
                arr.push(<tr key={i}>{temp}</tr>)
            }
            return arr;
        }
        return (
            <div>
                <h2>这是九九乘法表</h2>
                <table>
                    <tbody>
                        {showJiujiu()}
                    </tbody>
                </table>
            </div>
        )
    }
}
