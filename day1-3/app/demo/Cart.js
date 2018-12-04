import React from 'react';
export default class App extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            arr : [
                {"id" : 0.234 , "title" : "苹果" , "price" : 5 , "number" : 2},
                {"id" : 0.232 , "title" : "西瓜" , "price" : 4 , "number" : 2},
                {"id" : 0.534 , "title" : "鸭梨" , "price" : 3 , "number" : 2},
                {"id" : 0.653 , "title" : "香蕉" , "price" : 6 , "number" : 2},
            ]
        }
        
    }
    changeN(id , number){
        console.log(id, number);
        this.setState({
            arr : this.state.arr.map(item => item.id == id ? {...item , number} :item)
        })
    }
    totals(){
          return  this.state.arr.reduce((a , b) => a + b.number * b.price ,0)
    }
    render() {
        const {arr} = this.state;
        return (<div>
                <h2>小购物车</h2>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>小计</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((item , index) => <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><input type="number" min={0} value={item.number} onChange={(e) => {
                                    this.changeN(item.id, Number(e.target.value))
                                }} /></td>
                                <td>{item.price * item.number}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <p>总计：{this.totals()}</p>
            </div>
        )
    }
}
