export const addFeed = (text, expiry, color) => ({
  type: 'ADD_FEED',
  text: text,
  expiry: expiry,
  color: color,
});

export const restoreFeed = feed => ({
  type: 'RESTORE_FEED',
  feed: feed,
});

export const removeFeed = id => ({
  type: 'REMOVE_FEED',
  id: id,
});

export const toggleFeed = id => ({
  type: 'TOGGLE_FEED',
  id: id,
});

export const resetFeed = () => ({
  type: 'RESET_FEED',
});
