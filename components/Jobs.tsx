import JobRow from "./JobRow";

function Jobs() {
  return (
    <div className="bg-slate-200 py-4 rounded-xl ">
      <div className="container">
        <h2 className="font-bold mb-4">Recent jobs</h2>

        <div className="flex flex-col gap-4">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
}

export default Jobs;
