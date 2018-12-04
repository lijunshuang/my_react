import React from 'react';
export default class TabImg extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    render() {
        const showTable = () =>{
            //6行8列
            var arr = [];
            for (let i = 0; i < 6; i++) {
                var temp = [];
                for (let j = 0; j < 8; j++) {
                    temp.push(<td key={j}><img src={`./images/${ i * 8 + j }.jpg`} /></td>)
                }
                arr.push(<tr key={i}>{temp}</tr>)
            }
            return arr;
        }
        return (<div>
                <h2>这是6行8列小图</h2>
                <table>
                    <tbody>
                        {showTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
