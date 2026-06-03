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
import MATH_IMAGE_TERMS from './terms/mathImageTerms';
import d655_IMAGE_TERMS from './terms/d655ImageTerms';

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
                    ? {
                        ...MATHTERMS,
                        ...MATH_IMAGE_TERMS,
                      }
                    : set === 'd665'
                      ? {
                          ...D665,
                          ...d655_IMAGE_TERMS,
                        }
                      : null;
}
