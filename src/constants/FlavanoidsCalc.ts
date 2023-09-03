import allData from "./Wine-Data.json";

export function calculateMeanOfFlavanoids(alcoholValue: number): number | null {
  const filteredData :any= allData.filter((obj) => obj.Alcohol === alcoholValue);
  if (filteredData.length === 0) {
    return null;
  }

  const mean =
    filteredData.reduce((sum : number, obj:any) => sum + parseFloat(obj.Flavanoids), 0) /
    filteredData.length;

  return parseFloat(mean.toFixed(3));
}

export const calculateMedian = (alcoholValue: number): number => {
  const filteredData :any= allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return NaN; // Handle case when no data is found
  }

  const flavanoidsForAlcohol = filteredData
    .map((obj:any) => parseFloat(obj.Flavanoids))
    .sort((a:number, b:number) => a - b);
  const middleIndex = Math.floor(flavanoidsForAlcohol.length / 2);

  if (flavanoidsForAlcohol.length % 2 === 0) {
    // For even number of elements, average the middle two values
    const median =
      ((flavanoidsForAlcohol[middleIndex - 1] +
        flavanoidsForAlcohol[middleIndex]) /
        2).toFixed(3);
    return parseFloat(median);
  } else {
    // For odd number of elements, return the middle value
    const median = flavanoidsForAlcohol[middleIndex].toFixed(3);
    return parseFloat(median);
  }
};

export function calculateMode(alcoholValue: number): number[] {
  const filteredData :any = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return []; // Handle case when no data is found
  }

  const frequencyCount: { [key: string]: number } = {};

  filteredData.forEach((obj :any) => {
    const flavanoids = parseFloat(obj.Flavanoids);
    frequencyCount[flavanoids.toString()] =
      (frequencyCount[flavanoids.toString()] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(frequencyCount));
  const modeValues = Object.entries(frequencyCount)
    .filter(([, count]) => count === maxCount)
    .map(([flavanoids]) => parseFloat(flavanoids));

  return modeValues.map((value) => parseFloat(value.toFixed(3)));
}
