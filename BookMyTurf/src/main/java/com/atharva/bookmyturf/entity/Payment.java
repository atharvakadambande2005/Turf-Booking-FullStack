package com.atharva.bookmyturf.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    private String paymentMethod;

    private String paymentStatus;

    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    // Default Constructor
    public Payment() {
    }

    // Parameterized Constructor
    public Payment(Long id, Double amount, String paymentMethod,
                   String paymentStatus, Booking booking) {
        this.id = id;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.paymentStatus = paymentStatus;
        this.booking = booking;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public Double getAmount() {
        return amount;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public Booking getBooking() {
        return booking;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}