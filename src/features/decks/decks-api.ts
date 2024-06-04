import axios from 'axios'
import {DeckType } from './decks-reducer.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

type DecksResponseType = {
  items: DeckType[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
  };
};

type DeckPostResponse = {
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};

export type AddDeckParams = {
  name: string;
};


export const decksAPI = {
  getDecks: () => {
    return instance.get<DecksResponseType>('v2/decks')
  },
  createDeck: (params: AddDeckParams) => {
    return instance.post<DeckType>('/v1/decks', params)
  }
}