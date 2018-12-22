import React from 'react';
import moment from 'moment';
import {Icon} from 'antd';
const Duigou = (sortby, sortdirection) => (
    <svg width='1.5em' fill='currentColor' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7221"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#51C472" p-id="7222"></path><path d="M723.2 332.8c-51.2 51.2-102.4 102.4-153.6 160L454.4 608S339.2 512 307.2 480c-12.8-12.8-38.4-12.8-57.6 0-12.8 12.8-12.8 38.4 0 57.6 38.4 32 140.8 121.6 179.2 153.6 12.8 12.8 38.4 19.2 57.6 0 44.8-51.2 96-102.4 147.2-160 44.8-51.2 96-96 140.8-147.2 12.8-12.8 12.8-38.4 0-57.6-12.8-12.8-38.4-12.8-51.2 6.4z" fill="#FFFFFF" p-id="7223"></path></svg>
)
const Cha = () => (
   <svg width='1.5em' fill='currentColor' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7252"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z" fill="#E44245" p-id="7253"></path><path d="M757.76 706.56c15.36 15.36 15.36 35.84 0 51.2-15.36 15.36-35.84 15.36-51.2 0L512 563.2l-194.56 194.56c-15.36 15.36-35.84 15.36-51.2 0-15.36-15.36-15.36-35.84 0-51.2L460.8 512 266.24 317.44c-10.24-15.36-10.24-35.84 0-51.2s35.84-15.36 51.2 0L512 465.92l194.56-194.56c15.36-15.36 35.84-15.36 51.2 0 15.36 15.36 15.36 35.84 0 51.2L563.2 512l194.56 194.56z" fill="#FFFFFF" p-id="7254"></path></svg>
)
export default ()=>{
    return [
        {
            dataIndex: 'id',
            title: 'id',
            width: 80
        },
        {
            dataIndex: 'title',
            title: '名称',
            
        },
        {
            dataIndex: 'level',
            title: '级别',
            width: 80
        },
        {
            dataIndex: 'price',
            title: '价格',
            width: 80
        },
        {
            dataIndex: 'amount',
            title: '数量',
            width: 60
        },
        {
            dataIndex: 'totalPrice',
            title: '小计',
            width: 100
        },
        {
            dataIndex: 'staff',
            title: '员工',
            width: 60
        },
        {
            dataIndex: 'type',
            title: '类型',
            width: 80
        },
        {
            dataIndex: 'region',
            title: '地区',
            width: 50
        },
        {
            dataIndex: 'date',
            title: '日期',
            width: 100,
            render(text){
                return moment(text).format('YYYY-MM-DD')
            }
        },
        {
            dataIndex: 'isPay',
            title: '是否付款',
            align: 'center',
            render(text){
                if(text){
                    return <Icon component={Duigou} />
                }else{
                    return <Icon component={Cha} />
                }
            },
        },
        // {
        //     dataIndex: 'mark',
        //     title: '备注',
        // },
    ]
}