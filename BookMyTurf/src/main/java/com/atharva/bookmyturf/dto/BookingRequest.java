package com.atharva.bookmyturf.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class BookingRequest {

    private Long userId;
    private Long turfId;
    private LocalDate bookingDate;
    private LocalTime startTime;
    private LocalTime endTime;

    // Default Constructor
    public BookingRequest() {
    }

    // Parameterized Constructor
    public BookingRequest(Long userId, Long turfId, LocalDate bookingDate,
                          LocalTime startTime, LocalTime endTime) {
        this.userId = userId;
        this.turfId = turfId;
        this.bookingDate = bookingDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // Getters
    public Long getUserId() {
        return userId;
    }

    public Long getTurfId() {
        return turfId;
    }

    public LocalDate getBookingDate() {
        return bookingDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    // Setters
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setTurfId(Long turfId) {
        this.turfId = turfId;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }
}