// all terms:
import DSA from "./terms/dsaTerms";
import CYBERTERMS from "./terms/cyberTerms";
import JAVATERMS from "./terms/javaTerms";
import JSTERMS from "./terms/jsTerms";

export function loadTerm(set) {
    const TERMS = set === 'dsa' ?
        DSA : set === 'cyber' ?
        CYBERTERMS : set === 'java' ?
        JAVATERMS : set === 'js' ?
        JSTERMS : null;
    
    const ALL_TERM_DEF = Object.keys(TERMS);
    const definition = ALL_TERM_DEF[Math.floor(Math.random() * ALL_TERM_DEF.length)]
    const term = TERMS[definition];

    return {problem: definition, answer: term};
}


// const ALL_TERM_DEF = Object.keys(TERMS);

// const loadTerm = (definitions, terms) => {
// // retrieve a random term definition from terms hash table
// const definition = definitions[Math.floor(Math.random() * terms.length)];
// const term = terms[definition] 

// return {problem: definition, answer: term}
// }