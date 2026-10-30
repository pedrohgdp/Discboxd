package com.discboxdapp.discboxd.DJ.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
@Data 
public class AlbumDTO {
    private String id;

    private List<ImagesDTO> images;

    private String name;

    private String release_date;
}
