package com.discboxdapp.discboxd.DJ.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
@Data 
public class ImagesDTO {
    private String url;
    
    private int height;

    private int width;
}
