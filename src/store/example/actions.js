export const NAMESPACE = 'example';
export const TYPES = {
  FETCH: `${NAMESPACE}/FETCH`,
  FETCH_SUCCESS: `${NAMESPACE}/FETCH_SUCCESS`,
}

export const fetch = () => 
  ( { type: TYPES.FETCH } )

export const fetchSuccess = (todos) => 
  ( { type: TYPES.FETCH_SUCCESS, payload: { todos } } )