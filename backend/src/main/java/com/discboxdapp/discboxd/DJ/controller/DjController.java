package com.discboxdapp.discboxd.DJ.controller;

import com.discboxdapp.discboxd.DJ.model.Album;
import com.discboxdapp.discboxd.DJ.service.DjService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/v1/dj")
public class DjController {

    DjService djService = new DjService();

    @GetMapping("/albuns")
    public ResponseEntity<List<Album>> searchAlbum(@RequestParam String q){

        return ResponseEntity.ok(resultado);
    }
}
