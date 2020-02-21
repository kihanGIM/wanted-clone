import React from "react";
import "./MainBody.scss";
import MainElement from "./MainElement";

class MainBody extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/companyListData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.companyData
        });
      });
  };

  render() {
    return (
      <>
        {this.state.data.map(company => {
          return (
            <MainElement
              img={company.img}
              data={company.data}
              data_A={company.data_A}
              data_B={company.data_B}
              data_R={company.data_R}
            />
          );
        })}
      </>
    );
  }
}

export default MainBody;
