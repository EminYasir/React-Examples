import Button from "./Button";
import Card from "./Card";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="error-modal">
      <Card addClass="p-0 w-[36rem] z-20">
        <header className="bg-red-700 p-4 rounded-t-xl text-white">
          <h2 className="text-center text-xl text-white">
            {props.error.tittle}
          </h2>
        </header>
        <section className="p-4">{props.error.content}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const cleanupRef = useRef();

  useEffect(() => {
    console.log("Modal oluşturuldu");

    return () => {
      if (cleanupRef.current) {
        console.log("Component kaldırıldı");
        //props.setWorkers([]);
      }
    };
  }, [cleanupRef, props]);
//returnn kullanarak sadece component kaldırılım-nca çalışmasını istiyorum.
//cleanup ilgili kompom-nent kapandığında çalışıyor. return içindeki kısım çalışır yani
  useEffect(() => {
    return () => {
      cleanupRef.current = true;
    };
  }, []);


  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={props.error} onConfirm={props.onConfirm} />,
        document.getElementById("modelOverlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
