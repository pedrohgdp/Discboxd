package com.discboxdapp.discboxd.DJ.service;

import com.discboxdapp.discboxd.DJ.DTO.AlbumDTO;
import com.discboxdapp.discboxd.DJ.DTO.SpotifyResponseDTO;
import com.discboxdapp.discboxd.DJ.DTO.TokenDTO;

import ch.qos.logback.core.subst.Token;
import jakarta.transaction.Transactional;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.net.http.HttpClient;
import java.util.ArrayList;
import java.util.List;

@Service
public class DjService {
    private RestClient restClient;

    private TokenService tokenService = new TokenService();

    //Search for a list of albuns
    public List<AlbumDTO> searchAlbum(String q){

        TokenDTO token = tokenService.getToken();

        String url = "https://api.spotify.com/v1/search" + "?" +"q=" + "album=" + q + "&type=album";

        SpotifyResponseDTO response = restClient.get()
                                                .uri(url)
                                                .header("Authorization", "Bearer " + token.getAccess_token())
                                                .retrieve()
                                                .body(SpotifyResponseDTO.class);
        
        List<AlbumDTO> albuns = response.getAlbums().getItems();
        
        return albuns;
    }

}
