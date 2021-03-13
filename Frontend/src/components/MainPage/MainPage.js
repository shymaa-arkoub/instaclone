import React, { Component } from "react";
import Post from "../Post/Post";
import upload_img from "../../images/upload.png";
import "./MainPage.css";
import { auth, storage } from "../firebase.js";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      progressBar: ""
    };
  }
  componentDidMount() {
    this.getPost();
  }
  getPost = () => {
    const thisContext = this;
    fetch("http://localhost:8080/post")
      .then(response => response.json())
      .then(data => {
        this.setState({ postArray: data });
      });
  };

  upload = event => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;
    var uploadTask = storage
      .ref("images")
      .child(image.name)
      .put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({ progressBar: progress });
      },
      error => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          let paylod = {
            postId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0
          };
          const requestOpt = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paylod)
          };

          fetch("http://localhost:8080/post", requestOpt)
            .then(response => response.json())
            .then(data => {
              thisContext.getPost();
            })
            .catch(error => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
        });
      }
    );
  };
  render() {
    return (
      <div>
        <div className="mainpage_container">
          <div className="mainpage_divider"></div>
          <div className="mainpage_fileupload">
            <label for="file-upload">
              <img className="mainpage_uploadicon" src={upload_img} />
            </label>
            <input onChange={this.upload} id="file-upload" type="file" />
          </div>
          <div className="mainpage_divider"></div>
        </div>
        <div className="mainpage_uploadprogress">{this.state.progressBar}</div>
        {console.log(this.state.postArray)}
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postId}
            username={item.userName}
            postImage={item.postPath}
            profileImage={item.profileImage}
            timeStamp={item.timeStamp}
            likes={item.likeCount}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
