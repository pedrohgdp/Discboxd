package com.discboxdapp.discboxd.DJ.controller;

import com.discboxdapp.discboxd.DJ.DTO.Album;
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
    public ResponseEntity<List<Album>> searchAlbum(@RequestParam String q){
        List<Album> result = djService.searchAlbum(q);
        return ResponseEntity.ok(result);
    }

}
