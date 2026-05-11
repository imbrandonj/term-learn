// all terms:
import DSA from './terms/dsaTerms';
import PYTERMS from './terms/pythonTerms';
import CYBERTERMS from './terms/cyberTerms';
import JAVATERMS from './terms/javaTerms';
import JSTERMS from './terms/jsTerms';
import PMTERMS from './terms/pmTerms';
import AWSTERMS from './terms/awsTerms';
import NETTERMS from './terms/netTerms';
import MATHTERMS from './terms/mathTerms';
import D665 from './terms/d665';

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
                : set === 'net'
                  ? NETTERMS
                  : set === 'math'
                    ? MATHTERMS
                    : set === 'd665'
                      ? D665
                      : null;
}
