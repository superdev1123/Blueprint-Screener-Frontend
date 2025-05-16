import React from 'react';

interface Props {
  results: string[];
}

const Result: React.FC<Props> = ({ results }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Assessment Results</h2>
      {results.length > 0 ? (
        <ul className="list-disc list-inside">
          {results.map((r, i) => (
            <li key={i}> {r} </li>
          ))}
        </ul>
      ) : (
        <p>No assessments assigned based on your answers.</p>
      )}
    </div>
  );
};

export default Result;