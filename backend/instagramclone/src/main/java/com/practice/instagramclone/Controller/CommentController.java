package com.practice.instagramclone.Controller;

import com.practice.instagramclone.Entity.Comments;
import com.practice.instagramclone.Entity.Post;
import com.practice.instagramclone.Service.CommentService;
import com.practice.instagramclone.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("")
    private Comments submitComment(@RequestBody Comments comment)
    {
        return commentService.submitComment(comment);
    }

    @GetMapping("/{postId}")
    private ArrayList<Comments> getAllComment(@PathVariable("postId") String postId)
    {
        return commentService.getAllComment(postId);
    }
}
