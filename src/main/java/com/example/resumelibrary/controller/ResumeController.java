package com.example.resumelibrary.controller;

import com.example.resumelibrary.exception.ResourceNotFoundException;
import com.example.resumelibrary.model.Resume;
import com.example.resumelibrary.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ResumeController {

    @Autowired
    ResumeRepository resumeRepository;

    // Get All resume
    @GetMapping("/resumes")
    public List<Resume> getAllNotes() {
        return resumeRepository.findAll();
    }

    // Create a new resume
    @PostMapping("/resumes")
    public Resume createResume(@Valid @RequestBody Resume resume) {
        return resumeRepository.save(resume);
    }

    // Get a Single resume
    @GetMapping("/resumes/{id}")
    public Resume getResumeById(@PathVariable(value = "id") Long resumeId) {
        return resumeRepository.findById(resumeId)
                .orElseThrow(() -> new ResourceNotFoundException("Resume", "id", resumeId));
    }

    // Update a resume
    @PutMapping("/resumes/{id}")
    public Resume updateResume(@PathVariable(value = "id") Long resumeId,
                           @Valid @RequestBody Resume resumeDetails) {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new ResourceNotFoundException("Resume", "id", resumeId));

        resume.setAuthor(resumeDetails.getAuthor());
        resume.setEmail(resumeDetails.getEmail());
        resume.setDescription(resumeDetails.getDescription());
        resume.setPdfUrl(resumeDetails.getPdfUrl());
        resume.setStarRating(resumeDetails.getStarRating());
        resume.setTags(resumeDetails.getTags());

        Resume updatedResume = resumeRepository.save(resume);
        return updatedResume;
    }


    // Delete a Note
    //TODO: Change to soft delete
    @DeleteMapping("/resumes/{id}")
    public ResponseEntity<?> deleteResume(@PathVariable(value = "id") Long resumeId) {
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new ResourceNotFoundException("Resume", "id", resumeId));

        resumeRepository.delete(resume);

        return ResponseEntity.ok().build();
    }
}