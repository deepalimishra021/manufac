import React, { useState } from "react";
import {
  calculateMeanOfFlavanoids,
  calculateMedian,
  calculateMode,
} from "../constants/FlavanoidsCalc";

const Flavanoids: React.FC = () => {
  const [mean, setMean] = useState<number[]>([]);
  const [median, setMedian] = useState<number[]>([]);
  const [mode, setMode] = useState<number[]>([]);

  const meanHandler = () => {
    const meanValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const meanValue = calculateMeanOfFlavanoids(alcoholValue);
      meanValue && meanValues.push(meanValue);
    }
    setMean(meanValues);
  };

  const medianHandler = () => {
    const medianValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const medianValue = calculateMedian(alcoholValue);
      medianValues.push(medianValue);
    }
    setMedian(medianValues);
  };

  const modeHandler = () => {
    let modeValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const modeValue = calculateMode(alcoholValue);
      modeValues = [...modeValues, ...modeValue];
    }
    setMode(modeValues);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Alcohol 1</th>
            <th>Alcohol 2</th>
            <th>Alcohol 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              Flavanoids
              <button
                onClick={() => meanHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mean
              </button>
            </th>
            <td>{mean ? mean[0] : ""}</td>
            <td>{mean ? mean[1] : ""}</td>
            <td>{mean ? mean[2] : ""}</td>
          </tr>
          <tr>
            <th>
              Flavanoids{" "}
              <button
                onClick={() => medianHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Median
              </button>
            </th>
            <td>{median ? median[0] : ""}</td>
            <td>{median ? median[1] : ""}</td>
            <td>{median ? median[2] : ""}</td>
          </tr>
          <tr>
            <th>
              Flavanoids{" "}
              <button
                onClick={() => modeHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mode
              </button>
            </th>
            <td>{mode ? mode[0] : ""}</td>
            <td>{mode ? mode[1] : ""}</td>
            <td>{mode ? mode[2] : ""}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Flavanoids;
