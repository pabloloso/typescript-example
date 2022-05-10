import { EpisodesResponse } from '../../types/EpisodesResponse'

type ButtonType = 'primary' | 'flat' ;

export interface EpisodesProps {
  episode: EpisodesResponse,
  buttonType: ButtonType,
  handleAddToFavorites: (episode: EpisodesResponse) => void
}
