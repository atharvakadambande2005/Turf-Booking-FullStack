package com.atharva.bookmyturf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.atharva.bookmyturf.dto.BookingRequest;
import com.atharva.bookmyturf.entity.Booking;
import com.atharva.bookmyturf.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public String bookTurf(@RequestBody BookingRequest request) {
        return service.bookTurf(request);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }
    
    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUser(@PathVariable Long userId) {
        return service.getBookingsByUser(userId);
    }
    
    @PutMapping("/cancel/{id}")
    public String cancelBooking(@PathVariable Long id) {
        return service.cancelBooking(id);
    }
}