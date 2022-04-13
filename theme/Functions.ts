export const setSize = (size: number) => {
  const viewport = 1440;
  const context = viewport * 0.01;

  return `${size / context}vw`;
};
