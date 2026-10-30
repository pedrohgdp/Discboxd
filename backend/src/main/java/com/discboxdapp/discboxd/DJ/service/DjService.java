package com.discboxdapp.discboxd.DJ.service;

import com.discboxdapp.discboxd.DJ.DTO.AlbumDTO;
import com.discboxdapp.discboxd.DJ.DTO.SpotifyResponseDTO;
import com.discboxdapp.discboxd.DJ.DTO.TokenDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class DjService {

    private final RestClient restClient = RestClient.builder().baseUrl("https://api.spotify.com/v1").build();

    private TokenService tokenService;

    public DjService(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    //Search for a list of albuns
    public List<AlbumDTO> searchAlbum(String q){

        TokenDTO token = tokenService.getToken();

        SpotifyResponseDTO response = restClient.get()
                                                .uri(uriBuilder -> uriBuilder
                                                        .path("/search")
                                                        .queryParam("q", q)
                                                        .queryParam("type", "album")
                                                        .build())
                                                .header("Authorization", "Bearer " + token.getAccess_token())
                                                .retrieve()
                                                .body(SpotifyResponseDTO.class);
        
        List<AlbumDTO> albuns = response.getAlbums().getItems();
        
        return albuns;
    }

}
