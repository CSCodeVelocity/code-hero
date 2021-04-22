const correctlyTypedChars = (original, copy, count) => {
  const newLineCount = copy.split('\n').length - 1;

  if (original.indexOf(copy) > -1) {
    return copy.length - newLineCount;
  }
  return count;
};

export { correctlyTypedChars };
