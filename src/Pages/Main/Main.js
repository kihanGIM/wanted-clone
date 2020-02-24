import React from "react";
import "./Main.scss";
// import search from "../../Images/search.png";
import NavBody from "./NavBody";
import Mainbody from "../../Components/MainBody";
// import OverLay from "../../Components/Overlay";
import NavTop from "../../Components/NavTop";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
  }

  SearchandleClick = () => {
    this.setState({
      search: !this.state.search
    });
  };

  render() {
    return (
      <div className="One">
        <div className="Nav">
          <NavTop />
          <div className="Nav_bodywrap">
            <div className="Nav_body">
              <ul className="Nav_body_top">
                <li className="Nbtt"> 전체</li>
              </ul>
              <div className="Nav_body_bottom">
                <NavBody />
              </div>
            </div>
          </div>
        </div>

        <div className="Main">
          <div className="Main_top">
            <div className="Main_top_left">
              <div className="Main_top_lefton">
                <span className="Main_top_text_first">최신순</span>
              </div>
              <div className="Main_top_lefton">
                <span className="Main_top_text">국가 한국</span>
              </div>
              <div className="Main_top_lefton">
                <span className="Main_top_text">지역 한국</span>
              </div>
              <div className="Main_top_lefton">
                <span className="Main_top_text">경력 전체</span>
              </div>
            </div>
            <div className="Main_top_right">필터</div>
          </div>
          <div className="Main_body">
            <Mainbody />
            <Mainbody />
            <Mainbody />
            <Mainbody />
            <Mainbody />
            <Mainbody />
            <Mainbody />
            <Mainbody />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
