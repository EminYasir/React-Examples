import { useState, useEffect } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

const App = () => {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers")
      ? JSON.parse(localStorage.getItem("workers"))
      : []
  );
  //sayfa yüklendiğinde eğer local storage te workers arrayinde veri var sa onu getir default değer olarak onla devam et
  //eğer yoksa boş array ile başla.
  //böylelikle sayfa yenilemede local storage te bulunan veri kaybını önlemiş oluruz

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]); //workers arrayi üzerinde yapılan değişimleri local hosta kaydediyor.
  //köşeliparantez içerisindeki parametre değişimine göre içerisinde ki kodu çalıştırıyor

  return (
    <>
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker workers={workers} setWorkers={setWorkers}></AddWorker>
      <WorkerList workers={workers} setWorkers={setWorkers}></WorkerList>
    </>
  );
};

export default App;
