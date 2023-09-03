import allData from "./Wine-Data.json";

export function calculateMeanOfGamma(alcoholValue: number): number | null {
  const filteredData : any = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null;
  }

  const gammaValues = filteredData.map(
    (obj :any) => (obj.Ash * obj.Hue) / obj.Magnesium
  );

  const sum = gammaValues.reduce((acc :number, value:number) => acc + value, 0);
  const mean = sum / gammaValues.length;

  return parseFloat(mean.toFixed(3));
}

export function calculateMedianOfGamma(alcoholValue: number): number | null {
  const filteredData :any= allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null;
  }

  const gammaValues = filteredData.map(
    (obj:any) => (obj.Ash * obj.Hue) / obj.Magnesium
  );
  gammaValues.sort((a:number, b:number) => a - b);

  const middleIndex = Math.floor(gammaValues.length / 2);
  let median;

  if (gammaValues.length % 2 === 0) {
    // If the number of values is even, take the average of the two middle values
    median = (gammaValues[middleIndex - 1] + gammaValues[middleIndex]) / 2;
  } else {
    // If the number of values is odd, take the middle value
    median = gammaValues[middleIndex];
  }

  return parseFloat(median.toFixed(3));
}

export function calculateModeOfGamma(alcoholValue: number): number | null {
  const filteredData :any = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null; // Return null if no data found for the given alcohol value
  }

  const gammaValues = filteredData.map(
    (obj :any) => (obj.Ash * obj.Hue) / obj.Magnesium
  );

  // Calculate the mode of gammaValues
  let mode = calculateMode(gammaValues);
  if (!mode){
    return 0
  }

  return parseFloat(mode.toFixed(3));
}

export function calculateMode(arr: number[]): number | null {
  const frequency: { [key: string]: number } = {};
  let maxCount = 0;
  let mode: number | null = null;

  for (const num of arr) {
    frequency[num.toFixed(3)] = (frequency[num.toFixed(3)] || 0) + 1;
    if (frequency[num.toFixed(3)] > maxCount) {
      maxCount = frequency[num.toFixed(3)];
      mode = parseFloat(num.toFixed(3));
    }
  }

  return mode;
}
