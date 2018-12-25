import React from 'react';
import Step1Form from './Step1Form';
export default class Step2 extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
    }
    render() {
        return (
            <div>
                <h1>请填写基本信息</h1>
                <input type='file' ref='file' />
                <button
                    onClick={()=>{
                        var theFile = this.refs.file.files[0];
                        console.log(theFile);
                        var formdata = new FormData();
                        formdata.append('file',theFile)
                        var xhr = new XMLHttpRequest()
                        xhr.onreadystatechange = function(){
                            if(xhr.readyState == 4){
                                console.log(responseText);
                            }
                        }
                        xhr.open('post','/up',true)
                        xhr.send(formdata)
                    }}
                >上传</button>
            </div>
        )
    }
}
