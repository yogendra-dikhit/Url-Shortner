package com.urlshortner.controller;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.urlshortner.dto.UrlDTO;
import com.urlshortner.service.UrlService;

@Controller
public class HomeController {
	
	private static final Logger logger = LogManager.getLogger("urlshortner");
	
	@Autowired
	private UrlService vUrlService;

	@GetMapping("/")
	public String getHomePage() {
		return "index";
	}
	
	@GetMapping("/r/{id}")
	public void getredirectPage(@PathVariable String id, HttpServletResponse res) throws IOException {
		logger.info("Redirect request: "+id);
		Optional<String> uid = Optional.ofNullable(id);
		Optional<UrlDTO> urlDTO;
		if (uid.isPresent()) {
			urlDTO = vUrlService.getOriginalUrl(uid.get());
			if(urlDTO.isPresent())
				res.sendRedirect(urlDTO.get().getUrl());
		}
	}
}
