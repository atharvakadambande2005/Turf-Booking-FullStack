package com.atharva.bookmyturf.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atharva.bookmyturf.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    boolean existsByTurfIdAndBookingDateAndStartTime(
            Long turfId,
            LocalDate bookingDate,
            LocalTime startTime);
    
    List<Booking> findByUserId(Long userId);

}