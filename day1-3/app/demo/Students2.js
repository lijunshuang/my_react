import React from 'react';
export default class Students2 extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            isChecked : [],
            students : [
                {"id" : 0.657 , "name" : "小明" , "age" : 12},
                {"id" : 0.434 , "name" : "小花" , "age" : 13},
                {"id" : 0.109 , "name" : "小红" , "age" : 15},
                {"id" : 0.213 , "name" : "小强" , "age" : 17}
            ]
        }
    }
    //放着 吸取教训，两个数组对比删除，用includes
    deleteC(){
        const ss = this.state.students;
        const ssc = this.state.isChecked;
        ss.map(item => {
                this.setState({
                    isChecked : ssc.filter(_item =>{
                        if(_item.id != item.id){
                            console.log('删除了');
                            ss.splice(ssc.length)
                        }
                    }
                    )
                })
            }
        )
    }
    render() {
        const {students,isChecked} = this.state;
        // console.log(isChecked);
        return (<div>
                <h2>学生列表--删除勾选的学生</h2>
                <p>isChecked数组:{JSON.stringify(this.state.isChecked)}</p>
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
                        <input id={item.id} ref="check" type="checkbox" onChange={(e) => {
                            this.setState({
                                isChecked : [
                                    ...isChecked,
                                    Number(e.target.id)
                                ]
                            })
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
                {/* 遍历students数组，对比isChecked数组中不包含 item.id 的项留下，包含的删除 */}
                <button onClick={()=>{
                        this.setState({
                            students : this.state.students.filter(item => !this.state.isChecked.includes(item.id))
                        })
                    }
                }>删除选中</button>
            </div>
        )
    }
}
