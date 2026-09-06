package com.atharva.bookmyturf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atharva.bookmyturf.entity.Payment;
import com.atharva.bookmyturf.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository repo;

    public String makePayment(Payment payment) {
        payment.setPaymentStatus("PAID");
        repo.save(payment);
        return "Payment Successful";
    }

    public List<Payment> getAllPayments() {
        return repo.findAll();
    }
}