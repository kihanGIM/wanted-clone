import React from "react";
import search from "../Images/search.png";
import "./NavTop.scss";
import OverLay from "./Overlay";
import Tag from "./Tag";

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      tag: false
    };
  }

  SearchandleClick = () => {
    this.setState({
      search: !this.state.search
    });
  };

  TaghandleClick = () => {
    this.setState({
      tag: !this.state.tag
    });
  };

  render() {
    return (
      <div className="Nav_topwrap">
        {this.state.search && (
          <div className="tc">
            <OverLay />
          </div>
        )}
        {this.state.tag && (
          <div className="Search_tag">
            <Tag />
          </div>
        )}
        <div className="Nav_top">
          <div className="Nav_topin">
            <a className="wanted" href="https://www.wanted.co.kr/newintro">
              Wanted
            </a>
            <ul className="topin_center">
              <li className="tc_text_one" onClick={this.SearchandleClick}>
                탐색
              </li>

              <li className="tc_text">직군별 연봉</li>
              <li className="tc_text">이력서</li>
              <li className="tc_text">이벤트</li>
              <li className="tc_text">매치업</li>
            </ul>
            <ul className="topin_right">
              <div className="search_for">
                <div className="Search" onClick={this.TaghandleClick}>
                  <img className="Search_for" src={search} alt="search" />
                </div>
              </div>
              <li className="tr_left">회원가입/로그인</li>
              <li className="tr_center">서비스 소개</li>
              <li className="tr_right">기업서비스</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavTop;
