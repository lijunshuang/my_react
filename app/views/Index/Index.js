import React from 'react';
import App from '../../container/App';
import { connect } from 'dva';
import {Row, Col} from 'antd';
class Index extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
        props.dispatch({type: 'indexModel/init'})
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(this.refs.main);
        this.myBox = echarts.init(this.refs.box);

        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '本系统用户访问来源--本数据来自模拟',
                x:'center',
                top:10
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                
            },
            series : [
                
            ]
        };
        //散点图
        var optionBox = {
            title : {
                text: '散点图--本数据来自模拟',
                x:'center',
                top:10
            },
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
        this.myBox.setOption(optionBox);
    }
    componentWillReceiveProps(props){
        this.myChart.setOption({
            legend: {
                orient: 'horizontal',
                left: 20,
                top: 60,
                data: (function(){
                    const arr=[];
                    for (let i = 0; i < props.results.length; i++) {
                        // console.log(props.results[i].name);
                        arr.push(props.results[i].name)
                    }
                })()
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: props.results,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        this.myBox.setOption({
            series: [{
                symbolSize: 20,
                data: props.data,
                type: 'scatter'
            }]
        })
    }
    render() {
        return (
            <App current='Index'>
                {/* <h2 style={{textAlign:'center',padding:'20px 0px',fontSize:50}}>首页</h2> */}
                <Row>
                    <Col span={12}>
                        <div ref="main" style={{"width":'100%',"height":400}}></div>
                    </Col>
                    <Col span={12}>
                        <div ref="box" style={{"width": '100%',"height":400}}></div>
                    </Col>
                </Row>
            </App>
        )
    }
}
export default connect(
    ({indexModel})=>({
        results:indexModel.results,
        data:indexModel.data
    })
)(Index)