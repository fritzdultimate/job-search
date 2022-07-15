const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value);
  const nextValueIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];

  return nextValue;
};

export default nextElementInList;
