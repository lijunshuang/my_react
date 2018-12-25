import React from 'react';
import Dva from 'dva';
import dailyprocurementModel from './model/dailyprocurementModel';
import purchasandpurchasModel from './model/purchasandpurchasModel';
import indexModel from './model/indexModel';
// import createHistory from 'history/createBrowserHistory';
import logger from "redux-logger";

import route from './route';//  路由文件
//  创建app
const app = Dva({
    onAction : logger
});
// const app = Dva({
//     history: createHistory(),
// });

//设置model
app.model(dailyprocurementModel)
app.model(purchasandpurchasModel)
app.model(indexModel)

//设置路由
app.router(route);

// 挂载点
app.start('#app');

