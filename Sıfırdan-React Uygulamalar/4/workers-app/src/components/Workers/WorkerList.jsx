import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers ,setWorkers } = props;

  if (workers.length<1) {
    return;
  }

  const deleteWorkerHandler = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card addClass="mt-10 ">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2"
            key={worker.id}
            onClick={()=>deleteWorkerHandler(worker.id)}
          >
            <span className="">{worker.name}</span>
            <span className="text-teal-600 font-medium">{worker.salary} $</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
