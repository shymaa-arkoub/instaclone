package com.practice.instagramclone.Service;

import com.practice.instagramclone.Entity.Post;
import com.practice.instagramclone.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

@Service
public class PostService {
    @Autowired
    PostRepo postRepo;

    @Autowired
    UserService userService;
    public Post submitPost(Post post)
    {
        return postRepo.save(post);
    }

    public ArrayList<Post> getAllPost()
    {
        ArrayList<Post> postList=postRepo.findAll();
        for(int i=0;i<postList.size();i++)
        {
            Post post=postList.get(i);
            post.setUserName(userService.displayUserMetaDataOf(post.getUserId()).getUserName());
        }
        return postList;
    }
}
