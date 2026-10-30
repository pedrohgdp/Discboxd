package com.discboxdapp.discboxd.DJ.controller;

import com.discboxdapp.discboxd.DJ.DTO.AlbumDTO;
import com.discboxdapp.discboxd.DJ.service.DjService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/v1/dj")
public class DjController {

    private final DjService djService;

    public DjController(DjService dj){
        this.djService = dj;
    }

    @GetMapping("/albuns")
    public ResponseEntity<List<AlbumDTO>> searchAlbum(@RequestParam String q){
        List<AlbumDTO> result = djService.searchAlbum(q);
        return ResponseEntity.ok(result);
    }

}
