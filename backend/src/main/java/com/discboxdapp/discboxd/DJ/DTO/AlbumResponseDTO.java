package com.discboxdapp.discboxd.DJ.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
@Getter 
public class AlbumResponseDTO {
    private List<AlbumDTO> items;
}
