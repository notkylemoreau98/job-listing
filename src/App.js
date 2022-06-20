import { useState, useEffect } from "react";
import JobBoard from "./components/JobBoard";
import data from "./api/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div className="">
      {jobs.length === 0 ? (
        <p>Looking for jobs...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
