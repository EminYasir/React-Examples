import { useRef,Fragment, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const salaryInputRef = useRef();

  // useEffect(()=>{
  //   console.log("Çalıştı");
  // },[]); bir kere çalışmasını sağlar


  const minimumSalary = 5000;
  
  // const [enteredWorkerName, setEnteredWorkerName] = useState("");
  // const [enteredWorkerSalary, setEnteredWorkerSalary] = useState("");
  // const workerNameChangeHandler = (event) => {
  //   setEnteredWorkerName(event.target.value);
  // };

  // const workerSalaryChangeHandler = (event) => {
  //   setEnteredWorkerSalary(event.target.value);
  // };


  const addWorkerHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredSalary=salaryInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({
        tittle: "İsim Alanı Zorunludur!",
        content: "Lütfen bir isim giriniz.",
      });
      return;
    }

    if (enteredSalary.trim().length === 0) {
      setError({
        tittle: "Maaş Alanı Zorunludur!",
        content: "Lütfen maaş giriniz.",
      });
      return;
    }
    if (+enteredSalary < minimumSalary) {
      //+ koyarak stringi number a çevirdim
      setError({
        tittle: "Maaş Alanı Zorunludur!",
        content: `Lütfen ${minimumSalary} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      //prevState diyince bi önceki durumu da alıyor
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        salary: enteredSalary,
      },
      ...prevState,
    ]);

    nameInputRef.current.value = "";
    salaryInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal error={error} setWorkers={props.setWorkers} onConfirm={errorHandler}></ErrorModal>
      )}
      <Card addClass="mt-10 p-5">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi giriniz"
            id="name"
            ref={nameInputRef}
          ></input>
          <label htmlFor="sallary" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş mikratı giriniz"
            id="salary"
            ref={salaryInputRef}
          ></input>
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
    //   <div>
    //   {error && <ErrorModal  error={error} onConfirm={errorHandler}></ErrorModal>}
    //   <Card addClass="mt-10 p-5">
    //     <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
    //       <label htmlFor="name" className="font-medium">
    //         Çalışan İsmi
    //       </label>
    //       <input
    //         type="text"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Çalışan ismi giriniz"
    //         id="name"
    //         onChange={workerNameChangeHandler}
    //         value={enteredWorkerName}
    //       ></input>
    //       <label htmlFor="sallary" className="font-medium">
    //         Maaş Miktarı
    //       </label>
    //       <input
    //         type="number"
    //         className="max-w-[40rem] w-full mx-auto border p-2"
    //         placeholder="Maaş mikratı giriniz"
    //         id="salary"
    //         onChange={workerSalaryChangeHandler}
    //         value={enteredWorkerSalary}
    //       ></input>
    //       <Button className="mt-2" type="submit">
    //         Ekle
    //       </Button>
    //     </form>
    //   </Card>
    // </div>
  );
};

export default AddWorker;
