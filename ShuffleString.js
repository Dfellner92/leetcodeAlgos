var restoreString = function (s, indices) {
  const sorted = [];
  for (let i = 0; i < s.length; i++) {
    sorted.push([s[i], indices[i]]);
  }
  return sorted
    .sort((a, b) => a[1] - b[1])
    .map((node) => node[0])
    .join("");
};
