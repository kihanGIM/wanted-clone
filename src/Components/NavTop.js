import React from 'react';
import search from "../Images/search.png";
import "./NavTop.scss";

 class NavTop extends React.Component {
    
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

    render() {
        return (
           
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
      
          
        )
    }
}

export default NavTop;