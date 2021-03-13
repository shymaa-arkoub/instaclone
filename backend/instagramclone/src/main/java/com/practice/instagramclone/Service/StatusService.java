package com.practice.instagramclone.Service;

import com.practice.instagramclone.Entity.Status;
import com.practice.instagramclone.Entity.Users;
import com.practice.instagramclone.Repository.StatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class StatusService {

    @Autowired
    StatusRepo statusRepo;
    @Autowired
    UserService userService;
    public Status submitStatus(Status status)
    {
        return statusRepo.save(status);
    }
    public ArrayList<Status> retrieveAllStatus()
    {

        ArrayList<Status> statusList=statusRepo.findAll();
        for (int i=0 ; i < statusList.size();i++)
        {
            Status statusItem=statusList.get(i);
            statusItem.setUserName(userService.displayUserMetaDataOf(statusItem.getUserId()).getUserName());

        }
        return statusList;
    }
}
