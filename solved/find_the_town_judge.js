// In a town, there are n people labelled from 1 to n.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

function findJudge(n, trust) {
  const counts = Array(n+1).fill(0);

  for (let [i,j] of trust) {
    counts[i] -= 1 // people dont trust this guy
    counts[j] += 1 // people trust this guy
    // console.log(i)
    // console.log(j)
    // console.log(counts)
    // console.log('---')
  }

  for (let i = 1; i < counts.length; i++) {
    if (n-1 === counts[i]) return i; // everyone trsuts this guy but the judge themselves
  }

  return -1
};

console.log(findJudge(2, [[1,2]])) // 2
console.log(findJudge(3, [[1,3],[2,3]])) // 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])) // -1
console.log(findJudge(3, [[1,2],[2,3]])) // -1
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])) // 3
console.log(findJudge(4, [[1,3],[1,4],[2,3]])) // -1







  // const notTheJudge = [];
  // const mapOfCounts = {};
  // const mapOfTrustedFolk = [];

  // if (n === 1 && trust.length === 0) return n;
  // if (n > 1 && trust.length === 0) return -1;
  // if (trust.length === 1) return trust[0][1]

  // for (let pair of trust) {
  //   if (!notTheJudge.includes(pair[0])) notTheJudge.push(pair[0]); // push in ppl who aren't the judge;
  //   !mapOfCounts[pair[1]] ? mapOfCounts[pair[1]] = 1 : mapOfCounts[pair[1]]++; // take into account who people trust;
  //   if (mapOfCounts[pair[1]] > 1 && !mapOfTrustedFolk.includes(pair[1])) mapOfTrustedFolk.push(pair[1]); // if that person is trusted and they aren't already in our list of trusted folk, add them in
  // }

  // let answer = mapOfTrustedFolk.filter(person => !notTheJudge.includes(person)); // filter out people who aren't the judge;
  // if (answer.length === 0) return -1;

  // return answer[0];