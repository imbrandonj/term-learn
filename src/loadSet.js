// all terms:
import DSA from './terms/dsaTerms';
import PYTERMS from './terms/pythonTerms';
import CYBERTERMS from './terms/cyberTerms';
import JAVATERMS from './terms/javaTerms';
import JSTERMS from './terms/jsTerms';
import PMTERMS from './terms/pmTerms';
import AWSTERMS from './terms/awsTerms';
import SECTERMS from './terms/secTerms';

export function loadSet(set) {
  return set === 'dsa'
    ? DSA
    : set === 'python'
      ? PYTERMS
      : set === 'cyber'
        ? CYBERTERMS
        : set === 'java'
          ? JAVATERMS
          : set === 'js'
            ? JSTERMS
            : set === 'pm'
              ? PMTERMS
              : set === 'aws'
                ? AWSTERMS
                : set === 'sec'
                  ? SECTERMS
                  : null;
}
