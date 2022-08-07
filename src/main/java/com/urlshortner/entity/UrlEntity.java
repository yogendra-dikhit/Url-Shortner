package com.urlshortner.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "url")
public class UrlEntity {
	
	@Id
	private String uid;
	private String url;

}
