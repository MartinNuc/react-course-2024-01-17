import React from "react";

export const AlbumItem = React.memo(({ album, onChange }) => {

  function handleChange(change) {
    onChange({
      ...album,
      ...change
    });
  }

  return <p>
    Title:
    <input value={album.title}
      onChange={(e) => handleChange({ title: e.target.value })}
    />

    Rating
    <input type='number'
      value={album.rating}
      onChange={(e) => handleChange({ rating: Number(e.target.value) })}
    />
  </p>
})
