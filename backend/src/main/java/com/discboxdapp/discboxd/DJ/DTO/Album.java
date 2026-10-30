package com.discboxdapp.discboxd.DJ.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

public class Album {
    private String spotifyAlbumId;

    private String name;

    private String artistName;

    private LocalDate releaseDate;

    private String coverUrl;
}
