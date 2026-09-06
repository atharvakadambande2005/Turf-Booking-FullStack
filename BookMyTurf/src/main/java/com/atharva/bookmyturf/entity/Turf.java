package com.atharva.bookmyturf.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "turfs")
public class Turf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String location;

    private Double pricePerHour;


    private String description;
    
    private String image;

    // Default Constructor
    public Turf() {
    }

    // Parameterized Constructor
    public Turf(Long id, String name, String location, Double pricePerHour, String image, String description) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.pricePerHour = pricePerHour;
        this.image = image;
        this.description = description;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public Double getPricePerHour() {
        return pricePerHour;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setPricePerHour(Double pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}