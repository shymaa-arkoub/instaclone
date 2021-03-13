import React, { Component } from "react";
import "./Post.css";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";
import Avatar from "@material-ui/core/Avatar";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }
  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    const thisContext = this;
    fetch("http://localhost:8080/comments/" + this.props.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        thisContext.setState({ commentList: data });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  submitComment = event => {
    const thisContext = this;
    if (event.key == "Enter") {
      let comment = event.currentTarget.value;
      if (comment != null || comment != undefined) {
        let payload = {
          commentId: Math.floor(Math.random() * 100000).toString(),
          userId: JSON.parse(localStorage.getItem("users")).uid,
          postId: this.props.id,
          timeStamp: new Date().getTime(),
          comment: comment
        };

        const requestOpt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        };

        fetch("http://localhost:8080/comments", requestOpt)
          .then(response => response.json())
          .then(data => {
            this.getComments();
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      }
    }
  };
  render() {
    return (
      <div className="post_container">
        <div className="post_header">
          <Avatar className="post_img" src={this.props.profileImage} />
          <div className="post_username">{this.props.username}</div>
        </div>

        <div>
          <img width="615px" src={this.props.postImage} />
        </div>

        <div>
          <div style={{ marginLeft: "10px" }}>
            <img src={love} className="post_reactimg" />
            <img src={comment} className="post_reactimg" />
            <img src={share} className="post_reactimg" />
          </div>
          <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
            {this.props.likes} likes
          </div>
        </div>

        <div>
          {this.state.commentList.map((item, index) =>
            index < 4 ? (
              <div className="post_comment">
                {item.userName} : {item.comment}
              </div>
            ) : (
              <span></span>
            )
          )}
          <input
            onKeyPress={this.submitComment}
            className="post_commenttxt"
            type="text"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}

export default Post;
