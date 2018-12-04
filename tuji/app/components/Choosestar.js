import React from 'react';
import classnames from "classnames";
export default class Choosestar extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            stars : [
                {"chinese" : "关晓彤" , "english" : "guanxiaotong"},
                {"chinese" : "靳东" , "english" : "jindong"},
                {"chinese" : "鹿晗" , "english" : "luhan"},
                {"chinese" : "杨幂" , "english" : "yangmi"}
            ]
        }
    }
    render() {
        const {stars} = this.state
        return (<div className="chooseStar">
               {
                   stars.map(item => <button 
                        key={item.english}
                        className={classnames({"cur" : this.props.star == item.english})}
                        onClick={()=> {
                            this.props.changeStar(item.english)
                            this.props.changeIdx(1)
                        }}
                    >
                        {item.chinese}
                    </button>)
               }
            </div>
        )
    }
}
