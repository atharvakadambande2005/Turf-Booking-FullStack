package com.atharva.bookmyturf.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.atharva.bookmyturf.entity.Turf;
import com.atharva.bookmyturf.service.TurfService;

@RestController
@RequestMapping("/turfs")
@CrossOrigin("*")
public class TurfController {

    @Autowired
    private TurfService service;

    @PostMapping
    public String addTurf(@RequestBody Turf turf) {
        return service.addTurf(turf);
    }

    @GetMapping
    public List<Turf> getAllTurfs() {
        return service.getAllTurfs();
    }

    @PutMapping("/{id}")
    public String updateTurf(@PathVariable Long id, @RequestBody Turf turf) {
        return service.updateTurf(id, turf);
    }

    @DeleteMapping("/{id}")
    public String deleteTurf(@PathVariable Long id) {
        return service.deleteTurf(id);
    }
}