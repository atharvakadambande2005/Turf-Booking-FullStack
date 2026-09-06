package com.atharva.bookmyturf.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atharva.bookmyturf.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	  Optional<User> findByEmail(String email);

}
