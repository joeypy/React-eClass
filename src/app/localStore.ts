export const updateStateFromLocalStore = (state: any) => {
  localStorage.setItem("state", JSON.stringify(state));
};
