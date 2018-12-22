import React from 'react';
import { Router, Route, routerRedux,Redirect } from 'dva/router';

//  配置路由
import Index from './views/Index/Index';
import Purchase from './container/Purchase';
import DailyProcurement from './views/Purchase/DailyProcurement';
import PurchasingAndPurchasingManagement from './views/Purchase/PurchasingAndPurchasingManagement';
import PurchaseReturnManagement from './views/Purchase/PurchaseReturnManagement';
import SupplierDocumentInquiry from './views/Purchase/SupplierDocumentInquiry';

import Sales from './container/Sales';
import OrderManagement from './views/Sales/OrderManagement';
import CustomerRetention from './views/Sales/CustomerRetention';
import PromotionManagement from './views/Sales/PromotionManagement';

// import App from './container/App'
// import New from './container/New'
// import guoji from './views/guoji'

export default (({ history }) => {
    return (
      <Router history={history}>
        <div>
            {/* <Route path="/" exact component={App} />
            <Route path="/new" exact component={New} />
            <Route path="/new/guoji" exact component={guoji} /> */}

            <Route path="/" exact component={Index} />
            <Route path="/index" exact render={() => <Redirect to="/" />}/>
            <Route path="/purchase" exact render={()=> <Redirect to="/purchase/dailyprocurement" />} />
            <Route path="/purchase/dailyprocurement" exact component={DailyProcurement} />
            <Route path="/purchase/purchasingandpurchasingmanagement" exact component={PurchasingAndPurchasingManagement} />
            <Route path="/purchase/purchasereturnmanagement" exact component={PurchaseReturnManagement} />
            <Route path="/purchase/supplierdocumentinquiry" exact component={SupplierDocumentInquiry} />
            {/* Sales路由 */}
            <Route path="/sales" exact render={()=> <Redirect to='/sales/ordermanagement' />} />
            <Route path="/sales/ordermanagement" exact component={OrderManagement} />
            <Route path="/sales/customerretention" exact component={CustomerRetention} />
            <Route path="/sales/promotionmanagement" exact component={PromotionManagement} />
        </div>
      </Router>
    );
  });






