package com.urlshortner.util;

import java.util.Random;

public interface UniqueIdGenerator {
	
	static final String ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	static final String DIGITS = "0123456789";
	static final Random rnd = new Random();
	
	static String getUID() {
		StringBuffer uid = new StringBuffer();
		for(int i=0; i<3; i++) uid.append(ALPHA.charAt(rnd.nextInt(ALPHA.length())));
		for(int i=0; i<3; i++) uid.append(DIGITS.charAt(rnd.nextInt(DIGITS.length())));
		
		return uid.toString();
	}

}
