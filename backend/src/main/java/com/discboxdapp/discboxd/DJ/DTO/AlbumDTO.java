package com.discboxdapp.discboxd.DJ.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
public class AlbumDTO {
    private String id;

    private List<ImagesDTO> images;

    private String name;

    private String releaseDate;
}
