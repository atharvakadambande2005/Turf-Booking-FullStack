package com.atharva.bookmyturf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.atharva.bookmyturf.entity.Turf;

public interface TurfRepository extends JpaRepository<Turf, Long> {

}