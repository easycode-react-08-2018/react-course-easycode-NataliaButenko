export const ADD_SERVERS = 'add_server';

export const addServer = (server) => {
  return {
    type: ADD_SERVERS,
    payload: {
      server
    }
  }
};