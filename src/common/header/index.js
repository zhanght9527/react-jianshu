import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchWrapper,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

const Header = props => (
  <HeaderWrapper>
    <Logo href='/'/>
    <Nav>
      <NavItem float='left' active>首页</NavItem>
      <NavItem float='left'>下载App</NavItem>
      <NavItem float='right'>登陆</NavItem>
      <NavItem float='right'>
        <span className="iconfont">&#xe636;</span>
      </NavItem>
      <SearchWrapper>
        <NavSearch
          className={props.focused ? 'focused' : ''}
          onFocus={props.handleInputFoces}
          onBlur={props.handleInputBlur}
        ></NavSearch>
        <span
          className={props.focused ? 'focused iconfont' : 'iconfont'}
        >&#xe64d;</span>
        {getListArea(props.focused)}
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className='writting'>
        <span className="iconfont">&#xe608;</span>
        写文章
      </Button>
      <Button className='regi'>注册</Button>
    </Addition>
  </HeaderWrapper>
)

const getListArea = show => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一换</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFoces() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
