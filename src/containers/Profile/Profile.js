import React from 'react';
import './index.less';
import avatar from '../../common/images/profile.png';
import bg from '../../common/images/login_bg.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
@connect(state=>({...state.session}),actions)
export default class Profile extends React.Component {
  componentDidMount(){
    this.props.toValidateAPI(); //页面一加载来校验用户是否登录
  }
  render(){
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={bg}/>
          <img src={avatar} className="avatar"/>
          {this.props.user?
            <a className="login-btn">{this.props.user}</a>:
            <Link to={'/login'} className="login-btn">登录</Link>
          }
        </div>
      </div>
    )
  }
}
