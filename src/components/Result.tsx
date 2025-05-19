import React from "react";
import { useResultStore } from "../store/useResultStore";

const Result: React.FC = () => {
  const results = useResultStore((state) => state.results);
  const resetResults = useResultStore((state) => state.resetResults);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Assessment Results</h2>
      {results && results.length > 0 ? (
        <ul className="list-disc list-inside">
          {results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      ) : (
        <p>No assessments assigned based on your answers.</p>
      )}
      <button
        onClick={resetResults}
        className="text-gray-700 py-2 rounded hover:bg-red-800 bg-red-500 w-full mt-4"
      >
        Reset Questionnaire
      </button>
    </div>
  );
};

export default Result;