import React from 'react';
export default class Bigimg extends React.Component {
    constructor(){
        super();//必须调用超类
    }
    render() {
        return (<div className="big_box">
                
                    
                    <button className="leftbtn" onClick={()=>{
                        if(this.props.star=="guanxiaotong"&&this.props.idx==1){
                            this.props.changeStar("yangmi")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="jindong"&&this.props.idx==1){
                            this.props.changeStar("guanxiaotong")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="luhan"&&this.props.idx==1){
                            this.props.changeStar("jindong")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="yangmi"&&this.props.idx==1){
                            this.props.changeStar("luhan")
                            this.props.changeIdx(5)
                        }else{
                            this.props.changeIdx(this.props.idx - 1)
                        }
                    }}>&lt;</button>
                
                <img src={`images/${this.props.star}/${this.props.idx}.jpg`} />
                <button className="rightbtn" onClick={()=>{
                        if(this.props.star=="guanxiaotong"&&this.props.idx==5){
                            this.props.changeStar("jindong")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="jindong"&&this.props.idx==5){
                            this.props.changeStar("luhan")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="luhan"&&this.props.idx==5){
                            this.props.changeStar("yangmi")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="yangmi"&&this.props.idx==5){
                            this.props.changeStar("guanxiaotong")
                            this.props.changeIdx(1)
                        }else{
                            this.props.changeIdx(this.props.idx + 1)
                        }
                    }}>&gt;</button>
            </div>
        )
    }
}
