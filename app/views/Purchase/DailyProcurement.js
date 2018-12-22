import React from 'react';
import Purchase from '../../container/Purchase';
import {Table, Row, Col, Checkbox, Slider, DatePicker, Select, Input, Tag} from 'antd';
import { connect } from 'dva';

import './utils/style.less';
import getCols from './utils/getCols';
import moment from 'moment';
const CheckboxGroup = Checkbox.Group;
const {RangePicker} = DatePicker;
const Option = Select.Option;

class DailyProcurement extends React.Component {
    constructor(props){
        super(props);//	必须调用超类
        //发出请求
        props.dispatch({'type': 'dailyprocurementModel/loadData'});
        this.state = {
            //筛选器 配置
            filtersSetup: [
                {
                    'type':'checkbox',//    复选框
                    'key': 'region',
                    'title': '地区',
                    'options': [
                        {label: '北京', value: '北京'},
                        {label: '上海', value: '上海'},
                        {label: '广州', value: '广州'},
                    ]
                },
                {
                    'type':'checkbox',//    复选框
                    'key': 'type',
                    'title': '类型',
                    'options': [
                        {label: '生产资料', value: '生产资料'},
                        {label: '耗材', value: '耗材'},
                        {label: '电脑用品', value: '电脑用品'},
                        {label: '文具', value: '文具'}
                    ]
                },
                {
                    'type':'checkbox',//    复选框
                    'key': 'level',
                    'title': '级别',
                    'options': [
                        {label: '一级经销商', value: '一级经销商'},
                        {label: '二级经销商', value: '二级经销商'},
                        {label: '三级经销商', value: '三级经销商'},
                        {label: '四级经销商', value: '四级经销商'},
                        {label: '五级经销商', value: '五级经销商'}
                    ]
                },
                {
                    'type':'range',     //数字范围
                    'key': 'price',
                    'title': '价格(万元)',
                    'rate': 10000,      //比例
                    'max': 1000000,     //真实的最大值
                    'min': 0            //真实的最小值
                },
                {
                    'type':'range',     //数字范围
                    'key': 'amount',
                    'title': '数量',
                    'rate': 1,          //比例
                    'max': 10000,       //真实的最大值
                    'min': 0            //真实的最小值
                },
                {
                    'type':'dateRange',     //数字范围
                    'key': 'date',
                    'title': '日期',
                },
                {
                    'type': 'select',
                    'key': 'isPay',
                    'title': '是否付款',
                    'options': [
                        { label: '全部', value: '' },
                        { label: '是', value: 'y' },
                        { label: '否', value: 'n' }
                    ]
                }
            ]
        }

    }
    render() {
        //    从model的filters中找到指定的key的v，并转为数组
        const getV = (item)=>{
            //筛出来
           if (item.type == 'checkbox') {
                var _t = this.props.dailyprocurementModel.filters.filter(_i => _i.k == item.key)[0];
                if(_t){
                    return _t.v.split('v')
                }
                return []
           } else if(item.type == 'range') {
                var _t = this.props.dailyprocurementModel.filters.filter(_i => _i.k == item.key)[0];
                if(_t){
                    //除以比例
                    return _t.v.split("to").map(ii => ii / item.rate);
                }
                return [item.min/item.rate, item.max/item.rate]
           } else if(item.type == 'dateRange'){
                var _t = this.props.dailyprocurementModel.filters.filter(_i => _i.k == item.key)[0];
                if(_t){
                    // 转moment对象
                    return _t.v.split('to').map(ii => moment(+ii))
                }
                return []
           } else if(item.type == 'select'){
                var _t = this.props.dailyprocurementModel.filters.filter(_i => _i.k == item.key)[0];
                if (_t) {
                    return _t.v;
                }
                return ""
           } else {
                var _t = this.props.dailyprocurementModel.filters.filter(_i => _i.k == item.key)[0];
                if (_t) {
                    return _t.v;
                }
                return ""
            } 
        }

        // 显示控件
        const showControl = (item) => {
            if(item.type == 'checkbox'){
                return <CheckboxGroup
                    options={item.options}
                    value={getV(item)}
                    onChange={v => {
                        this.props.dispatch({ "type": "dailyprocurementModel/changeFilters", "k": item.key, "v": v.join("v") })
                    }}
                />
            }else if(item.type == 'range'){
                return <Slider 
                range
                min={item.min / item.rate}
                max={item.max / item.rate}
                defaultValue={getV(item)}
                onAfterChange={v=>{
                    this.props.dispatch({ "type": "dailyprocurementModel/changeFilters", "k": item.key, "v": v.map(ii => ii * item.rate).join("to") })
                }}
                />
            }else if(item.type == 'dateRange'){
                return <RangePicker
                    value={getV(item)}
                    onChange={(v)=>{
                        this.props.dispatch({ "type": "dailyprocurementModel/changeFilters", "k": item.key, "v": v.map(ii => ii.unix()*1000).join('to') })
                    }} 
                />
            }else if(item.type == "select"){
                return <Select  
                    style={{ width: 120 }}
                    value={getV(item)}
                    onChange={v => {
                        this.props.dispatch({ "type": "dailyprocurementModel/changeFilters", "k": item.key, v})
                    }}
                >
                    {
                        item.options.map(_item => {
                            return <Option 
                                key={_item.label} 
                                value={_item.value}
                            >
                            {_item.label}
                            </Option>
                        })
                    }
                </Select>
            }
        }
        return (
            <Purchase current='DailyProcurement'>
                {/* <h1>日常采购</h1> */}
                {
                    // 遍历题目
                    this.state.filtersSetup.map(item => {
                        return <Row key={item.key}>
                            <Col span={3}>{item.title}</Col>
                            <Col span={21}>{showControl(item)}</Col>
                        </Row>
                    })
                }
                {/* 补充一条 查询关键词的 */}
                <Row>
                    <Col span={3}>关键词</Col>
                    <Col span={21}>
                        <Input 
                            placeholder="请输入要查询的关键词"
                            value={getV({'key': "keyword"})}
                            onChange={(e)=>{
                                this.props.dispatch({ "type": "dailyprocurementModel/changeFilters", "k": "keyword", "v": e.target.value })
                            }}
                        />
                    </Col>
                </Row>
                {
                    // 显示tag 当前的筛选条件
                    this.props.dailyprocurementModel.filters.map(item=>{
                        //词典
                        const dictionary={
                            "type" : "类型",
                            "level" : "级别",
                            "region" : "地区",
                            "price" : "价格",
                            "amount" : "数量",
                            "date" : "日期",
                            "isPay" : "是否付款",
                            "keyword" : "关键词"
                        }
                        //分类讨论
                        if(item.k == 'type' || item.k == 'level' || item.k == 'region'){
                            var v = item.v.split('v').join(' 或 ')
                        }else if(item.k =='price'){
                            var v = item.v.split('to').map(ii => ii/10000 +'万元').join(' 到 ')
                        }else if(item.k =='amount'){
                            var v = item.v.split('to').map(ii => ii +'个').join(' 到 ')
                        }else if(item.k == 'data'){
                            var v = item.v.split('to').map(ii=>moment(+ii).format('YYYY年MM月DD日')).join(' 到 ')
                        }else if(item.k == 'isPay'){
                            var v = item.v =='y' ? '是':'否'
                        }else if(item.k =='keyword'){
                            var v = item.v
                        }
                        return <Tag
                            color="blue"
                            closable
                            key={item.k}
                            onClose={()=>{
                                this.props.dispatch({type: 'dailyprocurementModel/changeFilters', 'k':item.k, 'v':''})
                            }}
                        >
                            {dictionary[item.k]} ：{v}
                        </Tag>
                    })
                }
                <h4>根据当前筛选条件，共找到<span>{this.props.dailyprocurementModel.total}</span>条，每页<span>{this.props.dailyprocurementModel.pagesize}</span>条，当前<span>{this.props.dailyprocurementModel.page}/{Math.ceil(this.props.dailyprocurementModel.total / this.props.dailyprocurementModel.pagesize)}</span>页</h4>
                <Table
                    rowKey="id"
                    columns={getCols()}
                    dataSource={this.props.dailyprocurementModel.results}
                    size='small'
                    pagination={{
                        current : this.props.dailyprocurementModel.page,
                        pageSize: this.props.dailyprocurementModel.pagesize,
                        total: this.props.dailyprocurementModel.total,
                        showSizeChanger : true
                    }}
                    onChange={(pagination, filters, sorter)=>{
                        console.log(pagination);
                        this.props.dispatch({type: "dailyprocurementModel/changePageOSort",'page': pagination.current, 'pagesize': pagination.pageSize})
                    }}
                />
            </Purchase>
        )
    }
}
export default connect(
    ({dailyprocurementModel})=>({dailyprocurementModel})
)(DailyProcurement)