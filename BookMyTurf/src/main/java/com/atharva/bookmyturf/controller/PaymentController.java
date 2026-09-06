package com.atharva.bookmyturf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.atharva.bookmyturf.entity.Payment;
import com.atharva.bookmyturf.service.PaymentService;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    private PaymentService service;

    @PostMapping
    public String makePayment(@RequestBody Payment payment) {
        return service.makePayment(payment);
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return service.getAllPayments();
    }
}