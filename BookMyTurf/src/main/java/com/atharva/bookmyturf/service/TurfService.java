package com.atharva.bookmyturf.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.atharva.bookmyturf.entity.Turf;
import com.atharva.bookmyturf.repository.TurfRepository;

@Service
public class TurfService {

    @Autowired
    private TurfRepository repo;

    public String addTurf(Turf turf) {
        repo.save(turf);
        return "Turf Added Successfully";
    }

    public List<Turf> getAllTurfs() {
        return repo.findAll();
    }

    public String updateTurf(Long id, Turf turf) {

        Turf existingTurf = repo.findById(id).orElse(null);

        if (existingTurf == null) {
            return "Turf Not Found";
        }

        existingTurf.setName(turf.getName());
        existingTurf.setLocation(turf.getLocation());
        existingTurf.setPricePerHour(turf.getPricePerHour());
        existingTurf.setDescription(turf.getDescription());
        existingTurf.setImage(turf.getImage());

        repo.save(existingTurf);

        return "Turf Updated Successfully";
    }

    public String deleteTurf(Long id) {

        Turf turf = repo.findById(id).orElse(null);

        if (turf == null) {
            return "Turf Not Found";
        }

        repo.delete(turf);

        return "Turf Deleted Successfully";
    }
}