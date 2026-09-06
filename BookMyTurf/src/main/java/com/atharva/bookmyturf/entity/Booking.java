package com.atharva.bookmyturf.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate bookingDate;

    private LocalTime startTime;

    private LocalTime endTime;

    private Double totalAmount;

    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "turf_id")
    private Turf turf;

    // Default Constructor
    public Booking() {
    }

    // Parameterized Constructor
    public Booking(Long id, LocalDate bookingDate, LocalTime startTime,
                   LocalTime endTime, Double totalAmount, String status,
                   User user, Turf turf) {
        this.id = id;
        this.bookingDate = bookingDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalAmount = totalAmount;
        this.status = status;
        this.user = user;
        this.turf = turf;
    }

    // Getters
    public Long getId() {
        return id;
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

    public Double getTotalAmount() {
        return totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public User getUser() {
        return user;
    }

    public Turf getTurf() {
        return turf;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
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

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setTurf(Turf turf) {
        this.turf = turf;
    }
}