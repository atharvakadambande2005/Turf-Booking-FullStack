package com.atharva.bookmyturf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.atharva.bookmyturf.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}