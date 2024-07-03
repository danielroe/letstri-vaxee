export const useTestStore = createStore("test", ({ state, getter }) => {
  const count = state(0);
  const double = getter(() => count.value * 2);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
    double,
  };
});
