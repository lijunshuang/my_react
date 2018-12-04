import React from "react";
export default class Arrc extends React.Component{
    //构造函数
    constructor() {
        super();//必须调用 超类
    }
    render (){
        const arr1 = [
            <li key={1}>苹果</li>,
            <li key={2}>西瓜</li>,
            <li key={3}>大鸭梨</li>,
            <li key={4}>橙子</li>,
        ]
        const arr2 = ["苹果","西瓜","大鸭梨","橙子"]
        const arr3 = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000]
        const arr4 = [
            {
                "title": "苹果",
                "price": 5,
                "number": 5
            },
            {
                "title": "西瓜",
                "price": 2,
                "number": 3
            },
            {
                "title": "大鸭梨",
                "price": 8,
                "number": 4
            },
            {
                "title": "橙子",
                "price": 7,
                "number": 2
            },
        ]

        return (
            <div>
                <h2>这是arr1</h2>
                <ul>
                    {arr1}
                </ul>

                <h2>这是arr2</h2>
                <ul>
                    {arr2.map((item,index) => <li key={index}>{item}</li>)}
                </ul>
                <h2>这是arr3</h2>
                <select>
                    {arr3.map((item,index) => <option key={index}>{item}</option>)}
                </select>
                <h2>这是arr4</h2>
                <table>
                    <thead>
                        <tr>
                            <th>水果</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>小计</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr4.map((item,index) => <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.number}</td>
                                <td>{item.price * item.number}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

