const playlist = [
    { titulo: 'Canción 1', artista: 'Artista 1', duracion: 180 },
    { titulo: 'Canción 2', artista: 'Artista 2', duracion: 210 },
    { titulo: 'Canción 3', artista: 'Artista 3', duracion: 150 },
    { titulo: 'Canción 4', artista: 'Artista 4', duracion: 240 },
    { titulo: 'Canción 5', artista: 'Artista 5', duracion: 195 },
    { titulo: 'Canción 6', artista: 'Artista 6', duracion: 170 },
    { titulo: 'Canción 7', artista: 'Artista 7', duracion: 220 },
    { titulo: 'Canción 8', artista: 'Artista 8', duracion: 200 },
    { titulo: 'Canción 9', artista: 'Artista 9', duracion: 160 },
    { titulo: 'Canción 10', artista: 'Artista 10', duracion: 250 }
]

// forEach recorre todas las canciones.
playlist.forEach(cancion => {
    console.log(`${cancion.titulo} - ${cancion.artista}`)
})
