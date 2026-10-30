package com.discboxdapp.discboxd.DJ.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Album {
    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true, nullable = false)
    private String spotifyAlbumId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String artistName;

    @Column(nullable = false)
    private LocalDate releaseDate;

    @Column(nullable = false)
    private String coverUrl;
}
