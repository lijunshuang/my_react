import React from 'react';
import {routerRedux} from 'dva/router';
import { connect } from 'dva';

import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
const { Header, Content, Sider } = Layout;

import App from './App';

class Sales extends React.Component {
    constructor(){
        super();//  必须调用超类
        this.state = {
            menus : [
                {'c': '订单管理', 'e': 'OrderManagement'},
                {'c': '客户挽留', 'e': 'CustomerRetention'},
                {'c': '促销管理', 'e': 'PromotionManagement'}
            ]
        }
    }
    render() {
        return (
            <App current='Sales'>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.props.current]}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={({key})=>{
                            this.props.dispatch(routerRedux.push(`/sales/${key.toLocaleLowerCase()}`))
                        }}
                        >
                            {
                                this.state.menus.map(item =><Menu.Item key={item.e}>{item.c}</Menu.Item>)
                            }
                        </Menu> 
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>销售管理</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {
                                (() => {
                                    for (let i = 0; i < this.state.menus.length; i++) {
                                        if(this.state.menus[i].e == this.props.current){
                                            return this.state.menus[i].c
                                        }
                                    }
                                })()
                            }
                        </Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}
                        >
                        {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </App>
        )
    }
}
export default connect()(Sales)