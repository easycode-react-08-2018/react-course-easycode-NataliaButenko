export const REMOVE_SERVER = 'remove_server';

export const removeServer = (server) => {
  return {
    type: REMOVE_SERVER,
    payload: {
      server
    }
  }
};