import { useEffect, useState } from "react";
import type { Screener } from "./types/screener";
import { fetchScreener } from "./api/screener";
import Questionnaire from "./components/Questionnaire";
import Result from "./components/Result";
import { useResultStore } from "./store/useResultStore";

function App() {
  const [screener, setScreener] = useState<Screener | null>(null);
  const [loading, setLoading] = useState(true);

  const results = useResultStore((state) => state.results);
  const setResults = useResultStore((state) => state.setResults);

  useEffect(() => {
    fetchScreener()
      .then((data) => setScreener(data))
      .catch((err) => console.error("Failed to fetch screener:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        Loading...
      </div>
    );
  }

  if (!screener) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        Error loading screener
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      {results ? (
        <Result />
      ) : (
        <Questionnaire screener={screener} onComplete={setResults} />
      )}
    </div>
  );
}

export default App;