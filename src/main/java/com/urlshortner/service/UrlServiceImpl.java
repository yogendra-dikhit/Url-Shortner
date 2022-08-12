package com.urlshortner.service;

import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urlshortner.dto.UrlDTO;
import com.urlshortner.entity.UrlEntity;
import com.urlshortner.repository.UrlRepository;
import com.urlshortner.util.UniqueIdGenerator;

@Service
public class UrlServiceImpl implements UrlService {

	private static final Logger logger = LogManager.getLogger("urlshortner");

	@Autowired
	private UrlRepository vUrlRepository;

	@Override
	public void saveShortenUrl(UrlDTO dto) {
		String uid = "";
		UrlEntity entity = new UrlEntity();
		try {
			uid = UniqueIdGenerator.getUID();
			if(vUrlRepository.existsById(uid))
				uid = UniqueIdGenerator.getUID();
			dto.setUid(uid);
			BeanUtils.copyProperties(dto, entity);
			vUrlRepository.save(entity);
		} catch (Exception e) {
			logger.info("Exception in UrlServiceImpl.generateShortenUrl(): " + e);
		}
	}

	@Override
	public Optional<UrlDTO> getOriginalUrl(String uid) {
		Optional<UrlEntity> entity = Optional.empty();
		UrlDTO dto = null;
		try {
			entity = vUrlRepository.findById(uid);
			if (entity.isPresent()) {
				dto = new UrlDTO();
				BeanUtils.copyProperties(entity.get(), dto);
			}
		} catch (Exception e) {
			logger.info("Exception in UrlServiceImpl.generateShortenUrl(): " + e);
		}
		return Optional.ofNullable(dto);
	}

}
