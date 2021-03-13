package com.practice.instagramclone.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name="Comments")
public class Comments {
    @javax.persistence.Id
    @GeneratedValue
    private int Id;
    private String commentId;
    private String postId;
    private String userId;
    private Timestamp timeStamp;
    private String comment;
    private String userName;

    public Comments() {
    }

    public Comments(int id, String commentId, String postId, String userId, Timestamp timeStamp, String comment) {
        Id = id;
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.timeStamp = timeStamp;
        this.comment = comment;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
