package com.urlshortner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urlshortner.entity.UrlEntity;

@Repository
public interface UrlRepository extends JpaRepository<UrlEntity, String> {

}
