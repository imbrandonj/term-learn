// loads a random term
export function loadTerm(terms) {
  const ALL_TERM_DEF = Object.keys(terms); // the keys are the term definitions
  return ALL_TERM_DEF[Math.floor(Math.random() * ALL_TERM_DEF.length)]; // select 1 definition
}
