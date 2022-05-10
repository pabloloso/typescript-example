import React, { useEffect, useState } from 'react'

import Episodes from '../Episodes'

import { EpisodesResponse } from '../../types/EpisodesResponse'

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState<Array<EpisodesResponse>>([])

  console.log(episodes)

  const handleAddToFavorites = (episode: EpisodesResponse) => {
    console.log(episode)
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => setEpisodes(data.results))
  }, [])

  return (
    <div>
      {episodes.map(episode => (
        <Episodes
          key={episode.id}
          buttonType='flat'
          episode={episode}
          handleAddToFavorites={handleAddToFavorites}
        />
      ))}
    </div>
  )
}

export default EpisodesList
