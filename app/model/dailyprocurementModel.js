
import {findDailyprocurement} from '../axios/findAPI';
const R = require('ramda');
export default {
    namespace : 'dailyprocurementModel',
    state : {
        page : 1,           //页码
        pagesize : 10,      //每页多少条
        results : [],       //结果
        total: 0,           //结果总数
        filters: [
            // {'k' : 'price' , 'v' : '10to40'}, // 前台渲染有问题，数字不能正确展示
            // {'k' : 'amount' , 'v' : '5000to10000'},
            // {k: "date", v: "1483275949000to1514725549000"}
        ]
    },
    reducers : {
        // 改变页码
        changePageR(state,{page}){
            return R.set(R.lensProp('page'),page,state)
        },
        // 改变页面容量
        changePagesizeR(state,{pagesize}){
            return R.set(R.lensProp('pagesize'),pagesize,state)
        },
        // 改变total
        changeTotal(state,{total}){
            return R.set(R.lensProp('total'),total,state)
        },
        // 改变页码
        changeResults(state,{results}){
            return R.set(R.lensProp('results'),results,state)
        },
        //关于 filters的操作的 增删改
        //  增加一项
        addItem(state,{k,v}){
            return R.set(R.lensProp('filters'),R.insert(state.filters.length,{k, v},state.filters),state)
        },
        // 删除一项
        removeItem(state,{k}){
            return R.set(R.lensProp('filters'),R.filter(item => item.k != k,state.filters),state)
        },
        //  更改一项
        updateItem(state, {k, v}){
            return R.set(R.lensProp('filters'), R.map(item => item.k == k ? R.set(R.lensProp('v'),v,item): item, state.filters), state)
        }

    },
    effects : {
        //初始化数据
        *loadData(action, {put,select,call}){
            yield call(init, put, select)
        },
        // 改变页码
        *changePageOSort({page,pagesize}, {put,select,call}){
            const state = yield select(({dailyprocurementModel})=>dailyprocurementModel)
            if (pagesize != state.pagesize) {
                //换页面容量
                yield put({type: 'changePageR', page: 1})
                yield put({type: 'changePagesizeR', pagesize})
            } else {
                // 换页
                yield put({type: 'changePageR', page})
            }
            yield call(init, put, select)
        },
        //  改变过滤器
        *changeFilters({k, v},{put,select,call}){
            //  判断用户是 增 删 改 的操作
            //  得到当前filters
            const {filters} = yield select(({dailyprocurementModel})=>dailyprocurementModel)
            //  判断filters中有没有传入载荷 k，如果有，则用户试图修改，如果没有，则用户试图添加
            var isHavaK = false;
            filters.forEach(item => {
                if(item.k == k){
                    isHavaK = true;
                }
            });

            //如果有
            if(isHavaK){
                //  看v，如果v是空，表示要删除，不是空 就是修改
                if(v){
                    yield put({type: 'updateItem', k, v})
                }else{
                    yield put({type: 'removeItem', k})
                }
            }else{
            //  如果没有，那就是添加
                yield put({type: 'addItem', k, v})
            }
            //改变页码归1
            yield put({type: 'changePageR', page: 1})
            yield call(init, put, select)
        }
    }
}
//初始化数据
function* init(put, select){
    const {page, pagesize, filters} = yield select(({dailyprocurementModel}) => dailyprocurementModel)
    var queryObj = {
        page,
        pagesize
    }
    for (let i = 0; i < filters.length; i++) {
        queryObj[filters[i].k] = filters[i].v
        
    }
    const {results,total} = yield findDailyprocurement(queryObj);

    console.log(filters);

    yield put({'type': "changeResults", results})
    yield put({'type': "changeTotal", total})
    // // console.log(results);
    
}