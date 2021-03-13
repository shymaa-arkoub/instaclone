package com.practice.instagramclone.Entity;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name="Status")
public class Status {
    @Id
    @GeneratedValue
    private int id;

    private String userId;
    private String statusId;
    private String path;
    private Timestamp timeStamp;
    private String userName;

    public Status() {
    }

    public Status(int id, String userId, String statusId, String path, Timestamp timeStamp) {
        this.id = id;
        this.userId = userId;
        this.statusId = statusId;
        this.path = path;
        this.timeStamp = timeStamp;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }

    public String getStatusId() {
        return statusId;
    }

    public String getPath() {
        return path;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setStatusId(String statusId) {
        this.statusId = statusId;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }
}
