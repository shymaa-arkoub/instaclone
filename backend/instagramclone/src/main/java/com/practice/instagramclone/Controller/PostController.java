package com.practice.instagramclone.Controller;

import com.practice.instagramclone.Entity.Post;
import com.practice.instagramclone.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    PostService postService;
    @PostMapping("")
    private Post submitPost(@RequestBody Post post)
    {
        return postService.submitPost(post);
    }

    @GetMapping("")
    private ArrayList<Post> getAllPost()
    {
        return postService.getAllPost();
    }
}
