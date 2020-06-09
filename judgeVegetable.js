const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
function judgeVegetable(vegetables, metric){
  // setting blank slate
  let highestMetric = -1;
  let winnerNameSoFar = '';
  for (let i = 0; i < vegetables.length; i++) {
    // metric = either plumpless or redness, so it can access both
    // vetetable[i][metric] helps you acccess the object
    if (vegetables[i][metric] > highestMetric) {
      highestMetric = vegetables[i][metric]
      // to get the winner in the vegetable[i]
      winnerNameSoFar = vegetables[i].submitter
    }
  }
  return winnerNameSoFar;
}

const metric = 'redness'

judgeVegetable(vegetables, metric)