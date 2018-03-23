package com.example.resumelibrary.repository;

import com.example.resumelibrary.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeRepository extends JpaRepository<Resume,Long>{
}
