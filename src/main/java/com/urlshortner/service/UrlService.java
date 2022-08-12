package com.urlshortner.service;

import java.util.Optional;

import com.urlshortner.dto.UrlDTO;

public interface UrlService {
	
	public void saveShortenUrl(UrlDTO url);
	public Optional<UrlDTO> getOriginalUrl(String uid);

}
