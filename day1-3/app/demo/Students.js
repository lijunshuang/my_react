import React from 'react';
export default class App extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            isChecked : [],
            b: true,
            students : [
                // {"id" : 0.657 , "name" : "小明" , "age" : 12, checked : false},
                // {"id" : 0.434 , "name" : "小花" , "age" : 13, "cc" : "true"},
                {"id" : 0.657 , "name" : "小明" , "age" : 12, "checked" : false},
                {"id" : 0.434 , "name" : "小花" , "age" : 13, "checked" : true},
                {"id" : 0.109 , "name" : "小红" , "age" : 15, "checked" : true},
                {"id" : 0.213 , "name" : "小强" , "age" : 17, "checked" : true},
            ]
        }
        this.handlerChange = this.handlerChange.bind(this)
        // this.handlboolChange = this.handlboolChange.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
    }
    handlerChange(id, value){
        // console.log(id , value);
        this.setState({
            students : this.state.students.map(item => item.id == id ? {...item , value} : item)
        })
        　　}
    render() {
        const {students,isChecked,selected,b} = this.state;
        // console.log(isChecked);
        return (<div>
                <h3>学生列表--删除勾选，错误逻辑，DOM 废了</h3>
                <input type="text" placeholder="姓名" ref="name" />
                <input type="number" placeholder="年龄" ref="age" />
                <button onClick={() => {
                    this.setState({
                        students : [
                            ...students,
                            {"id" : Math.random(), "name" : this.refs.name.value , "age" : this.refs.age.value}
                        ]
                    })
                    this.refs.name.value = ''
                    this.refs.age.value = ''
                    this.refs.name.focus()
                }}>添加学生</button>
                <ul className="students">
                   {
                       students.map(item => <li key={item.id}>
                        <input type="checkbox" checked={item.checked} value={item.checked} onChange={(e) => {
                            this.setState({})
                        }} />
                        <span>cc:{item.cc}</span>
                        <input type="checkbox" value={!!item.cc} onChange={(e) => {
                            this.handlerChange(item.id , !!e.target.value)
                        }} />
                        <span style={{"margin":"0 10px 0 10px"}}>{item.name}</span>
                        <span style={{"margin":"0 10px 0 10px"}}>{item.age}</span>
                        <button onClick={()=>{
                            this.setState({
                                students : students.filter(_item => _item.id != item.id)
                            })
                        }}>删除</button>
                       </li>)
                   }
                </ul>
                <button onClick={()=>{
                    this.setState({
                        students : students.filter((item => item.checked != true))
                    })
                }}>删除选中</button>
            </div>
        )
    }
}