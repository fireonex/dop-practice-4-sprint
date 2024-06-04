import { AddDeckParams, decksAPI } from './decks-api.ts'
import { Dispatch } from 'redux'
import { createDeckAC, DecksActions, DeckType, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => {
  return (dispatch: Dispatch<DecksActions>) => {
    decksAPI.getDecks()
      .then((res) => {
        dispatch(setDecksAC(res.data.items));
      })
  };
};

export const createDecksTC = (params: AddDeckParams) => async (dispatch: Dispatch<DecksActions>) => {
  const res = await decksAPI.createDeck(params)
  dispatch(createDeckAC(res.data))
}

