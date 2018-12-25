import React from 'react';
import {routerRedux} from 'dva/router';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import { connect } from 'dva';
// import createHistory from 'history/createBrowserHistory';

import './App.less';
const { Header, Content, Sider } = Layout;
// const history = createHistory();
class App extends React.Component {
    constructor(){
        super();//必须调用超类
        this.state = {
            menus : [
                {'c': '首页', 'e': 'Index'},
                {'c': '采购管理', 'e': 'Purchase'},
                {'c': '销售管理', 'e': 'Sales'},
            ]
        }
    }
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[this.props.current]}
                        style={{ lineHeight: '64px' }}
                        onClick={(e) => {
                            console.log(e.key.toLocaleLowerCase());
                            this.props.dispatch(routerRedux.push(`/${e.key.toLocaleLowerCase()}`))
                        }}
                    >
                        {
                            this.state.menus.map(item => <Menu.Item key={item.e}>{item.c}</Menu.Item>)
                        }
                    </Menu>
                </Header>
                {this.props.children}
            </Layout>
        )
    }
}
export default connect()(App)