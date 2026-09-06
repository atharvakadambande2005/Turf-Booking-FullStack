package com.atharva.bookmyturf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.atharva.bookmyturf.dto.LoginResponse;
import com.atharva.bookmyturf.entity.User;
import com.atharva.bookmyturf.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        return service.registerUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @PostMapping("/login")
    public LoginResponse loginUser(@RequestBody User user) {
        return service.loginUser(
                user.getEmail(),
                user.getPassword()
        );
    }
}