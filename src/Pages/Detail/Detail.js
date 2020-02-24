import React from "react";
import "./Detail.scss";
import NavTop from "../../Components/NavTop";
import Map from "../../Pages/Detail/Map";

class Detail extends React.Component {
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
        </div>
        <div className="detail_body">
          <div className="db_leftwrap">
            <div className="db_left">케로로</div>

            <div className="detail_article">
              <h2 className="detail_article"> Live서비스 안드로이드 개발</h2>
              <h4> 아프리카 TV / 서울. 한국</h4>
              <div className="detail_box">
                <ul>
                  <li className="detail_text"> #연봉상위20%</li>
                  <li className="detail_text"> #인원급성장</li>
                  <li className="detail_text"> #1,000명이하</li>
                  <li className="detail_text"> #설립10년이상</li>
                  <li className="detail_text"> 워크샵</li>
                  <li className="detail_text"> #성과급</li>
                  <li className="detail_text"> #스톡옵션</li>
                  <li className="detail_text"> #건강검진</li>
                  <li className="detail_text"> #IT,컨텐츠</li>
                </ul>
              </div>
            </div>
            <section className="detail_article_body">
              <p>
                <span>
                  아프리카TV는 뉴미디어 플랫폼 '아프리카TV'를 중심으로 유저가
                  중심이 되는 새로운 미디어를 만들고 있습니다. 아프리카TV를 통해
                  재미와 감동을 선사하는 것은 물론 새로운 놀이 문화를 만들고,
                  BJ라는 유망한 직업군을 만들정도로 해당 분야에서 두각을
                  나타내고 있습니다.<br></br>
                  아프리카TV는 방송을 함에 있어 특별한 기술이나 장비, 비용이
                  없어도 누구나 쉽게 어디서든 PC와 Mobile을 활용해 라이브 방송을
                  진행할 수 있습니다. 또한, 시시각각 빠르게 변화하는
                  Mobile환경에서 늘 앞선 서비스와 기술로 대응하며 아프리카TV는
                  매년 높은 성장을 하고 있습니다.<br></br>
                  독보적인 1인 미디어 산업의 리더로서 국내 유저 뿐만 아니라 전
                  세계 유저와 함께 소통하기 위해 미국, 일본, 대만, 태국, 홍콩에
                  지사를 설립하여 글로벌 미디어의 중심으로 당사는 나아가고
                  있습니다.
                </span>
              </p>
              <h4>주요업무</h4>
              <p>
                <span>
                  - Android LIVE 서비스 플레이어 UI개발 <br></br>- Android LIVE
                  서비스 플레이어 클라이언트 개발 <br></br>
                  (영상 출력, 채팅 등의 소켓 처리)
                </span>{" "}
              </p>
              <h4> 자격요건</h4>
              <p>
                {" "}
                <span>
                  - 관련 경력 7년 이상 <br></br>- Android Native Application
                  경험을 보유하신 분<br></br>- OOP 개념을 이해하고 Java를
                  능숙하게 다룰 수 있는 분<br></br>- 각 플랫폼 별 UX 원칙을 잘
                  이해하고 있으신 분
                </span>
              </p>
              <h4> 헤택 및 복지 </h4>
              <p>
                <span>
                  • 4대보험, 퇴직연금, 상해보험 <br></br>• 생일반차, 연차,
                  경조휴가, 반차, 장기근속 Refresh휴가, 포상휴가<br></br>• 산전
                  후 휴가, 육아휴직, 남성출산휴가<br></br>• 스톡옵션, 워크샵/MT,
                  연말행사, 체육대회, 야유회<br></br>• 도서구입비 지원, 성과급,
                  선택적 복리후생 제도<br></br>• 교육·연수 신입사원교육(OJT),
                  직무능력향상교육, 리더쉽강화교육 <br></br>• 카페테리아, 사내
                  동호회 운영, 건강검진, 휴양시설 지원
                </span>
              </p>
            </section>

            <section className="map_in">
              <div className="outline">
                <span className="map_left">마감일 </span>
                <span className="map_right">상시</span>
                <div>
                  <span className="map_left">근무지역</span>
                  <span className="map_right">
                    경기도 성남시 분당구 삼평동 625 판교세븐밴처밸리 1단지 2동{" "}
                  </span>
                </div>
              </div>
              <div className="maping">
                <Map />
              </div>
            </section>

            <section className="follower">
              <div className="detail_footer">
                <div className="detail_footer_left">
                  <h4>아프리카TV</h4>
                  <h4 className="it">IT, 컨텐츠</h4>
                </div>
                <div className="detail_footer_right">팔로우</div>
              </div>
            </section>
          </div>
          <div className="db_right">
            <div className="db_rightwrap">
              <div className="db_right_text">
                <h3> 채용보상금</h3>
                <div className="db_text_top">
                  <div className="db_text_left">
                    {" "}
                    <h4>추천인</h4>
                    <p>500,000원</p>
                  </div>
                  <div className="db_text_right">
                    {" "}
                    <h4>지원자</h4>
                    <p>500,000원</p>
                  </div>{" "}
                </div>

                <div className="sharing"> 공유하기</div>
              </div>
              <div className="like">
                <i className="fas fa-heart"> 21</i>
              </div>
            </div>
            <button className="apply">지원하기</button>
          </div>
        </div>

        <div className="footer">
          <div className="footer_wrap">
            $ [웹 개발자 ] 3년차 3,500이면 잘 받는 건가요?
            <div className="more">
              {" "}
              <span> 더 알아보기 </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
