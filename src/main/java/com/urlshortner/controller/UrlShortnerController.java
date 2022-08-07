package com.urlshortner.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urlshortner.dto.UrlDTO;
import com.urlshortner.service.UrlService;

@RestController
@RequestMapping("/api/urlShortner")
public class UrlShortnerController {

	private static final Logger logger = LogManager.getLogger("urlshortner");
	private static final String URL = "http://localhost:8080/r/";

	@Autowired
	private UrlService vUrlService;

	@PostMapping("/shortenUrl")
	public ResponseEntity<String> shortenUrl(@RequestBody UrlDTO url) {
		logger.info("url shorten request: " + url);
		vUrlService.saveShortenUrl(url);
		logger.info("url shorten response: " + URL + url.getUid());
		return new ResponseEntity<>(URL + url.getUid(), HttpStatus.OK);
	}

}
