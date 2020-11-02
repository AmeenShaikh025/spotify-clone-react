export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAmrkPobyX3ohUcfKlXVGRPBIq7vCYVptgqKPsTpga6lKzB0dy8JjyhphBiAE1M8HyQCLQ9vxN8nP-GmwpmH7xNjccek0G4gM6OOEgLDwxJXhfbIItcZdcavkJm05WCAjtshrEPg426m1A4UxjVdVu0fqiKCaXZb-9gmw4LuI3WD0fb",
};

const reducer = (state, action) => {
  // console.log("action",action);

  switch (action.type) {
    case "SET_USER":
      // console.log(action);
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      // console.log(action);
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      // console.log(action);
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer;
