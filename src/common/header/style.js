import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 1300px;
`

export const Logo = styled.a`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  float: ${props => props.float};
  color: ${props => props.active ? '#ea6f5a' : '#333'}
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
   .iconfont {
      transition: all 0.4s;
      position: absolute;
      right: 5px;
      bottom: 5px;
      width: 30px;
      line-height: 30px;
      height: 30px;
      text-align: center;
      border-radius: 15px;
      &.focused {
        background: #777;
        color: #fff;
      }
    }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  transition: width 0.4s;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  border-radius: 19px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 220px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.regi {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
