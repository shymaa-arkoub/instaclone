package com.practice.instagramclone.Controller;

import com.practice.instagramclone.Entity.Status;
import com.practice.instagramclone.Service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/status")
public class StatusController {
    @Autowired
    StatusService statusService;

    @PostMapping("")
    private Status submitStatus(@RequestBody Status status)
    {
        return statusService.submitStatus(status);

    }
    @GetMapping("")
    private ArrayList<Status> getAllStatus()
    {
        return statusService.retrieveAllStatus();
    }
}
