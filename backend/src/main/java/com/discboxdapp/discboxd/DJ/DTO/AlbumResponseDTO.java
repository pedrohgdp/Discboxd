package com.discboxdapp.discboxd.DJ.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
@Data 
public class AlbumResponseDTO {
    private List<AlbumDTO> items;
}
