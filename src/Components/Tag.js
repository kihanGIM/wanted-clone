import React, { Component } from "react";
import "./Tag.scss";

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: true
    };
  }
  TaghandleClick = () => {
    this.setState({
      tag: !this.state.tag
    });
  };

  render() {
    return (
      <div className="tagwrap">
        <div className="tag_top">
          <input type="search" placeholder="#태그, 회사, 포지션 검색"></input>
        </div>
        <div className="tagbody_wrap">
          <div className="tagbody">
            <h4 className="show">추천태그로 검색해보세요</h4>

            <span className="home"> 기업태그 홈</span>
            <ul className="tag_box">
              <li className="tag_text">
                <div className="tag_text_in">#푸드테크</div>
              </li>
              <li className="tag_text">
                <div className="tag_text_in">#상여금</div>
              </li>
              <li className="tag_text">
                <div className="tag_text_in">#반려동물</div>
              </li>
              <li className="tag_text">
                <div className="tag_text_in">#재택근무</div>
              </li>
              <li className="tag_text">
                <div className="tag_text_in">#설립3년이하</div>
              </li>

              {/* <li className="tag_text">
                {this.state.tag && <div className="tag_text_in"> ㅎㅎ</div>}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
