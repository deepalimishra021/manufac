import React, { useState } from "react";
import {
  calculateMeanOfGamma,
  calculateMedianOfGamma,
  calculateModeOfGamma,
} from "../constants/GammaCalc";

const Gamma = () => {
  const [mean, setMean] = useState<number[]>([]);
  const [median, setMedian] = useState<number[]>([]);
  const [mode, setMode] = useState<number[]>([]);

  const meanHandler = () => {
    const meanValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const meanValue = calculateMeanOfGamma(alcoholValue);
      meanValue && meanValues.push(meanValue);
    }
    setMean(meanValues);
  };

  const medianHandler = () => {
    const medianValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const medianValue = calculateMedianOfGamma(alcoholValue);
      medianValue && medianValues.push(medianValue);
    }
    setMedian(medianValues);
  };

  const modeHandler = () => {
    const modeValues: number[] = [];
    for (let alcoholValue = 1; alcoholValue <= 3; alcoholValue++) {
      const modeValue = calculateModeOfGamma(alcoholValue);
      modeValue && modeValues.push(modeValue);
    }
    setMode(modeValues);
  };

  return (
    <div>
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
              Gamma
              <button
                onClick={() => meanHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mean
              </button>
            </th>
            <td>{mean && mean.length ? mean[0].toFixed(3) : ""}</td>
            <td>{mean && mean.length  ? mean[1].toFixed(3) : ""}</td>
            <td>{mean && mean.length ? mean[2].toFixed(3) : ""}</td>
          </tr>
          <tr>
            <th>
              Gamma{" "}
              <button
                onClick={() => medianHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Median
              </button>
            </th>
            <td>{median&& median.length ? median[0].toFixed(3) : ""}</td>
            <td>{median && median.length? median[1].toFixed(3) : ""}</td>
            <td>{median&& median.length ? median[2].toFixed(3) : ""}</td>
          </tr>
          <tr>
            <th>
              Gamma{" "}
              <button
                onClick={() => modeHandler()}
                style={{ marginLeft: "10px", display: "block" }}
              >
                Mode
              </button>
            </th>
            <td>{mode&& mode.length ? mode[0].toFixed(3) : ""}</td>
            <td>{mode && mode.length? mode[1].toFixed(3) : ""}</td>
            <td>{mode && mode.length? mode[2].toFixed(3) : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gamma;
