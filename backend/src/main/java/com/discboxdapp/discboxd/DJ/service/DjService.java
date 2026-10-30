package com.discboxdapp.discboxd.DJ.service;

import com.discboxdapp.discboxd.DJ.DTO.Album;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DjService {

    public List<Album> searchAlbum(String query){
        List<Album> albums = new ArrayList<Album>();

        return albums;
    }

}
