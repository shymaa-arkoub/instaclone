import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./StatusBar.css";
import upload_img from "../../images/statusadd.png";
class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        username: "username1",
        imageURL: "../../images/pp1.png"
      },
      {
        username: "username2",
        imageURL: "../../images/pp1.png"
      }
    ];
    this.setState({ statusList: data });
  };
  render() {
    return (
      <div className="statusbar_container">
        <img
          src={upload_img}
          width="55px"
          height="55px"
          className="statusbar_uploadicon"
        />
        {this.state.statusList.map((item, index) => (
          <div className="statusbar_status">
            <Avatar className="statusbar_statusimg" src={item.imageURL} />
            <div className="statusbar_text">{item.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default StatusBar;
