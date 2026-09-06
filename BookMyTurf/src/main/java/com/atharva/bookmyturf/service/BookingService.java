package com.atharva.bookmyturf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atharva.bookmyturf.dto.BookingRequest;
import com.atharva.bookmyturf.entity.Booking;
import com.atharva.bookmyturf.entity.Turf;
import com.atharva.bookmyturf.entity.User;
import com.atharva.bookmyturf.repository.BookingRepository;
import com.atharva.bookmyturf.repository.TurfRepository;
import com.atharva.bookmyturf.repository.UserRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private TurfRepository turfRepo;

    public String bookTurf(BookingRequest request) {

        User user = userRepo.findById(request.getUserId()).orElse(null);
        Turf turf = turfRepo.findById(request.getTurfId()).orElse(null);

        if (user == null || turf == null) {
            return "User or Turf Not Found";
        }

        boolean booked = repo.existsByTurfIdAndBookingDateAndStartTime(
                request.getTurfId(),
                request.getBookingDate(),
                request.getStartTime());

        if (booked) {
            return "Slot Already Booked";
        }

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setTurf(turf);
        booking.setBookingDate(request.getBookingDate());
        booking.setStartTime(request.getStartTime());
        booking.setEndTime(request.getEndTime());
        booking.setTotalAmount(turf.getPricePerHour());
        booking.setStatus("BOOKED");

        repo.save(booking);

        return "Booking Successful";
    }

    public List<Booking> getAllBookings() {
        return repo.findAll();
    }
    
    public List<Booking> getBookingsByUser(Long userId) {
        return repo.findByUserId(userId);
    }
    
    
    public String cancelBooking(Long id) {

        Booking booking = repo.findById(id).orElse(null);

        if (booking == null) {
            return "Booking Not Found";
        }

        booking.setStatus("CANCELLED");
        repo.save(booking);

        return "Booking Cancelled Successfully";
    }
    
    
}