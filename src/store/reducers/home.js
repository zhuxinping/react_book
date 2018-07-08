// 一个页面一个reducer
import * as Types from '../action-types'
let initState = {
  currentLesson:'all',
  sliders:[],
  lesson:{
    list:[], //课程的所有数据
    hasMore:true,// 默认有更多
    offset:0, // 从第0条开始获取
    limit:5,// 限制一次获取条数
    isLoading:false // 默认没有正在加载
  }
};
function home(state=initState,action) {
  switch (action.type){
    case Types.SET_CURRENT_LESSON:
      return {...state,currentLesson:action.lesson};
    case Types.SET_SLIDERS:
      return {...state,sliders:action.payload};
    case Types.CHANGE_LOADING_STATUS:
      return {...state,lesson:{...state.lesson,isLoading:action.status}};
    case Types.SET_LESSONS:
      return {
        ...state,
        lesson:{
          ...state.lesson, // 保存原有的内容 例如limit不会更改
          isLoading:false, // 请求成功后 状态为加载完毕
          offset:state.lesson.offset+action.payload.list.length, //当前的偏移量加最新返回的数据长度
          hasMore:action.payload.hasMore, // 后台返回是否有更多
          list:[...state.lesson.list,...action.payload.list] // 最新的数据
        }
      }
    case Types.CLEAR_LESSONS:
      return {...state,lesson:{...state.lesson,isLoading:false,offset:0,list:[],hasMore:true}}
  }
  return state;
}
export default home