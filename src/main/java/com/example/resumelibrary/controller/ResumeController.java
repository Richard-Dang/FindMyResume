package com.example.resumelibrary.controller;

import com.example.resumelibrary.exception.ResourceNotFoundException;
import com.example.resumelibrary.model.Resume;
import com.example.resumelibrary.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ResumeController {

    @Autowired
    ResumeRepository resumeRepository;

    // Get All resume
    @GetMapping("/resumes")
    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    // Create a new resume
    @PostMapping(path ="/resumes", consumes = "multipart/form-data")
    public Resume createResume(@RequestPart("uploadFile") MultipartFile file, @RequestPart("resume") Resume resume) {
        try{
            resume.setFile(file.getBytes());
        }
        catch(IOException e){
            e.printStackTrace();
        }
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
        resume.setFile(resumeDetails.getFile());
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