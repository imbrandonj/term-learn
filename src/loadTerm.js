// all terms:
import DSA from './terms/dsaTerms';
import PYTERMS from './terms/pythonTerms';
import CYBERTERMS from './terms/cyberTerms';
import JAVATERMS from './terms/javaTerms';
import JSTERMS from './terms/jsTerms';

export function loadTerm(set) {
  const TERMS =
    set === 'dsa'
      ? DSA
      : set === 'python'
        ? PYTERMS
        : set === 'cyber'
          ? CYBERTERMS
          : set === 'java'
            ? JAVATERMS
            : set === 'js'
              ? JSTERMS
              : null;

  const ALL_TERM_DEF = Object.keys(TERMS); // the keys are the term definitions
  const definition =
    ALL_TERM_DEF[Math.floor(Math.random() * ALL_TERM_DEF.length)]; // select 1 definition
  const term = TERMS[definition]; // term is the answer

  return { problem: definition, answer: term };
}
