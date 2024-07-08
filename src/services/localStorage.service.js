export const saveToLocalStorage = (name, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(name, serializedValue);
};

export const getFromLocalStorage = (name) => {
  const item = JSON.parse(localStorage.getItem(name));
  if (item) return item;
  return null;
};


export const removeFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};