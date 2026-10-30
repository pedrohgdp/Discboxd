package com.discboxdapp.discboxd.DJ.service;

import javax.print.attribute.standard.Media;

import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import com.discboxdapp.discboxd.DJ.DTO.TokenDTO;

public class TokenService {
    private RestClient restClient;

    private String clientId;

    private String clientSecret;

    public TokenDTO getToken(){
        TokenDTO tokenDTO = new TokenDTO();
        
        MultiValueMap<String, String> form = new LinkedMultiValueMap<>();

        form.add("grant_type", "client_credentials");
        form.add("client_id", clientId);
        form.add("client_secret", clientSecret);

        tokenDTO = restClient.post()
                            .uri("https://accounts.spotify.com/api/token")
                            .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                            .body(form)
                            .retrieve()
                            .body(TokenDTO.class);
                            
        return tokenDTO;
    }
}
