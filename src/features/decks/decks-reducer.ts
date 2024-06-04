const initialState = {
  decks: [] as DeckType[], // do: add type
  searchParams: {
    name: '',
  },
}

export type AuthorType = {
  id: string;
  name: string;
};

export type DeckType = {
  isFavorite: boolean;
  author: AuthorType;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};




export type DecksState = typeof initialState
export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof createDeckAC>

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    case 'CREATE-DECK':
      return {...state, decks: [action.deck, ...state.decks]}
    default:
      return state
  }
}


export const setDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS', decks } as const)
export const createDeckAC = (deck: DeckType) => ({ type: 'CREATE-DECK', deck } as const)



