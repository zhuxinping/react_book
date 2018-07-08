import React from 'react';
import './index.less'
import HomeHeader from "./HomeHeader";
import {connect} from 'react-redux';
import actions from '../../store/actions/home'
import HomeSlider from "./HomeSlider";
import Loading from "../../components/Loading/Loading";
import HomeList from "./HomeList";
import {loadMore,pullRefresh} from '../../common/util';
@connect(state=>({...state.home}),actions)
export default class Home extends React.Component {
  // 选择当前哪门课程，做筛选用
  componentDidMount(){
    if(this.props.sliders.length === 0){// 如果没有数据我才请求 redux里有数据了我就不请求了
      this.props.getSlidersAPI();
    }
    if(this.props.lesson.list.length === 0){ // 如果课程没数据开始请求
      this.props.getLessonsAPI();
    }
    loadMore(this.ele,this.props.getLessonsAPI);
    // 写一个刷新的方法特点是先清空所有数据，在去获取课程
    pullRefresh(this.ele,this.props.refreshAPI);
  }
  selectCurrentLesson = (val) =>{ // val是当前选择的课程
      this.props.updateCurrentLesson(val);
  };
  loadMore = () => { // 获取更多
    this.props.getLessonsAPI();
  };
  render(){
    return <div>
      <HomeHeader selectCurrentLesson={this.selectCurrentLesson}/>
      <div className="content" ref={x=>this.ele=x}>
        {this.props.sliders.length?<HomeSlider lists={this.props.sliders}/>:<Loading/>}
        <h2 className="home-title">
          <i className="iconfont icon-wode_kecheng"></i>  <span>我的课程</span>
        </h2>
        <HomeList lists={this.props.lesson.list}/>
        {/*正在加载时显示loading效果*/}
        {this.props.lesson.isLoading?<Loading/>:null}
        <button onClick={this.loadMore}>加载更多</button>
      </div>
    </div>
  }
}
