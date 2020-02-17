import React from 'react';
import "./MainBody.scss";
import MainElement from "./MainElement";


      const bodyArr= [

        {id:1,img:"https://static.wanted.co.kr/images/company/1478/eq9xexi0y668srgp__400_400.jpg",data:'DevOps엔지니어',data_A:'에어프레미아',data_B:'서울.한국',data_R:'채용보상금 1,000,000원'},
        {id:2,img:"https://static.wanted.co.kr/images/company/506/hupyg19h2skogwa8__400_400.jpg",data: 'PHP 웹 개발자',data_A:'이랜서',data_B:'서울.한국',data_R:'채용보상금 1,000,000원'},
        {id:3,img:"https://static.wanted.co.kr/images/company/113/nzubucnnl3s6vbbs__400_400.jpg",data: 'Backend 개발자',data_A:'빅케어',data_B:'서울.한국',data_R:'채용보상금 1,000,000원'}
        
      ]
          
      const bodyList = bodyArr.map((name) =>{
       return(
        <MainElement img={name.img}  data={name.data} data_A={name.data_A} data_B={name.data_B}data_R={name.data_R}/>
        )
      })

     class MainBody extends React.Component {
      render(){
        return (
           <>
             {bodyList}
           </>
       );
      }
     }

    //     render(){
    //         return(
    //             <div className="Main_body_in">
    //             <div className="Main_header"></div>
    //             <div className="Main_text">
    //               <span className="Main_text_top">DevOps엔지니어</span>
    //               <span className="Main_text_body">에어프레미아</span>
    //               <span className="Main_text_body">서울.한국</span>
    //               <span className="Main_text_end">채용보상금 1,000,000원</span>
    //             </div>
                
    //             </div>
    //        );
    //     }
    // }

    export default MainBody
    
    