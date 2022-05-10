import React from 'react'

import { EpisodesProps } from './types'

const Episodes = ({ episode, buttonType, handleAddToFavorites }: EpisodesProps) => {
  const { name } = episode

  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => handleAddToFavorites(episode)}>Add favorite</button>
    </div>
  )
}

export default Episodes
