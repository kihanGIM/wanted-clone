import React,{Component} from 'react';
import "./NavBody.scss";
import CategoryTab from './CategoryTab';

const namesArr = [
    {id:1, text:'F&B',},
    {id:2, text:'개발',}, 
    {id:3, text:'건설, 시설'},
    {id:4, text:'게임, 제작' },
    {id:5, text:'경영, 비지니스'},
    {id:6, text:'고객서비스, 리테일'},
    {id:7, text:'디자인'},
    {id:8, text:'마케팅, 광고'},
    {id:9, text:'물류, 무역'},
    {id:10, text:'미디어'},
    {id:11, text:'법률, 법집행기관'},
    {id:12, text:'엔지니어링, 설계'},
    {id:13, text:'영업'},
    {id:14, text:'의료, 제약, 바이오'},
    {id:15, text:'인사, 교육'},
    {id:16, text:'정부, 비영리'},
    {id:17, text:'제조, 생산'},
    {id:18, text:'투자, 분석, 부동산'}
]


const nameList = namesArr.map((name) =>{
     return(
    <CategoryTab text={name.text}/>
  )
})

class NavBody extends Component {
    render(){
        return (
            <>
                {nameList}
            </>
  );
    }
}

export default NavBody
