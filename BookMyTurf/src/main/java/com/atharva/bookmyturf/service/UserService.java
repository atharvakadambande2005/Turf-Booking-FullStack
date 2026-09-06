package com.atharva.bookmyturf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atharva.bookmyturf.dto.LoginResponse;
import com.atharva.bookmyturf.entity.User;
import com.atharva.bookmyturf.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // Register User
    public String registerUser(User user) {

        user.setEmail(user.getEmail().trim().toLowerCase());

        repo.save(user);

        return "User Registered Successfully";
    }

    // Get All Users
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // Login + Auto Register
    public LoginResponse loginUser(String email, String password) {

        // Clean email
        email = email.trim().toLowerCase();

        User user = repo.findByEmail(email).orElse(null);

        // -----------------------------------
        // USER DOES NOT EXIST
        // -----------------------------------
        if (user == null) {

            user = new User();

            user.setName(email.split("@")[0]);
            user.setEmail(email);
            user.setPassword(password);
            user.setRole("USER");

            repo.save(user);

            return new LoginResponse(
                    user.getId(),
                    user.getName(),
                    user.getRole()
            );
        }

        // -----------------------------------
        // USER ALREADY EXISTS
        // -----------------------------------
        if (user.getPassword() != null &&
            user.getPassword().equals(password)) {

            return new LoginResponse(
                    user.getId(),
                    user.getName(),
                    user.getRole()
            );
        }

        // Wrong password
        return null;
    }
}