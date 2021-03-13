package com.practice.instagramclone.Service;

import com.practice.instagramclone.Entity.Comments;
import com.practice.instagramclone.Entity.Post;
import com.practice.instagramclone.Repository.CommentRepo;
import com.practice.instagramclone.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CommentService {

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    UserService userService;

    public Comments submitComment(Comments comment)
    {
        return commentRepo.save(comment);
    }

    public ArrayList<Comments> getAllComment(String postId)
    {
        ArrayList<Comments> commentList=commentRepo.findAllByPostId(postId);
        for(int i=0;i<commentList.size();i++)
        {
            Comments comment=commentList.get(i);
            comment.setUserName(userService.displayUserMetaDataOf(comment.getUserId()).getUserName());
        }
        return commentList;
    }
}
