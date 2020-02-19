import React from 'react';
import "./Main.scss";
import search from "../../Images/search.png";
import NavBody from"../../Components/NavBody";
import Mainbody from"../../Components/MainBody";
// import navTop from"../Components/navTop";

class Main extends React.Component {
  constructor(props){
  super(props);
   this.state ={  
     search:false
   };
  }
   
  SearchandleClick = () => {
    this.setState({
      search: !this.state.search
    });
  };

  render (){
    return (
      <div className="One">
        <div className="Nav">
          <div className="Nav_topwrap">
          {this.state.search && <div className="tc">개발 웹개발자 서버 개발자</div>}
          <div className="Nav_top">
            <div className="Nav_topin">
              <a classname ="wanted" href="https://www.wanted.co.kr/newintro">Wanted</a> 
              <ul className = "topin_center">
              {/* <div className={this.state.search ? "search_on" : "sherch_off"}> */}
                <li className="tc_text_one" onClick={this.SearchandleClick}>탐색</li>
              {/* </div>  */}
              {/* <li className="tc_text_one">탐색 */}

                
              {/* </li> */}
                 

                <li className="tc_text">직군별 연봉</li>
                <li className ="tc_text">이력서</li>
                <li className="tc_text">이벤트</li>
                <li className="tc_text">매치업</li>
              </ul>
              <ul className = "topin_right">
                <div className="search_for">
                <button className="Search" type = "button">
                <img className="Search_for" src ={search} alt="search"/>
                  </button>
                  </div>
                <li className="tr_left">회원가입/로그인</li>
                <li className="tr_center">서비스 소개</li>
                <li className ="tr_right">기업서비스</li>
              </ul>
            </div>
          </div>
          </div>
          <div className="Nav_bodywrap">
          <div className="Nav_body">
          <ul className="Nav_body_top">
            <li className ="Nbtt"> 전체
              {/* <a href="https://www.wanted.co.kr/wdlist?country=kr&job_sort=job.latest_order&years=-1&locations=all"></a> */}
            </li>
          </ul>
          <div className="Nav_body_bottom">
              <NavBody/> 
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
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
            <Mainbody/>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;