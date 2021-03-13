package com.practice.instagramclone.Service;

import com.practice.instagramclone.Entity.Users;
import com.practice.instagramclone.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public Users submitMetaDataOfUser(Users user)
    {
        return userRepo.save(user);
    }

    public Users displayUserMetaDataOf(String userId)
    {
        return userRepo.findByUserId(userId);
    }
}
