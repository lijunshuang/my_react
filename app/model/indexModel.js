import {getTb1, getTb2} from '../axios/indexAPI';//引入接口模拟文件
export default {
    namespace : 'indexModel',
    state : {
        results : [],
        data : []
    },
    reducers : {
        changeResults(state, {results}){
            return {
                ...state,
                results
            }
        },
        changeData(state,{data}){
            return {
                ...state,
                data
            }
        }
    },
    effects : {
        *init(action,{put}){
           const {results} = yield getTb1()
           const {data} = yield getTb2()
           console.log(data);
           yield put({type:'changeResults', results})
           yield put({type:'changeData', data})
        }
    }
}