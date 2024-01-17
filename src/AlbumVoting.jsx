import { useState, useCallback } from "react";
import { AlbumItem } from "./AlbumItem";

export const AlbumVoting = () => {
  const [albums, setAlbums] = useState(new Array(15).fill({
    id: 0,
    title: '',
    rating: 0
  }).map((album, index) => ({ ...album, id: index })));

  const handleChange = useCallback((updatedAlbum) => {
    setAlbums(albums => albums.map(album => album.id === updatedAlbum.id ? updatedAlbum : album));
  }, [setAlbums]);

  return <div>
    {albums.map(album => <AlbumItem key={album.id} album={album} onChange={handleChange} />)}
  </div>
}
