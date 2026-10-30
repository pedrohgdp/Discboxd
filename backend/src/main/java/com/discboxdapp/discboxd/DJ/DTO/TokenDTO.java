package com.discboxdapp.discboxd.DJ.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor 
@NoArgsConstructor 
@Builder 
@Getter 
public class TokenDTO {
    private String access_token;
    private String token_type;
    private int expires_in;
}
