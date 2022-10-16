import React, { useState } from "react";
import ToDo from "./components/ToDo";

function App() {

  const [input, setInput] = useState("");

  const [yapilacaklarDizisi, setYapilacaklarDizisi] = useState([]);

  const handleInput = function (olay) {
    olay.preventDefault();


    if (input.replaceAll(" ", "").length === 0) {
      alert("To do listesine boş bir ekleme yapamazsiniz")
      return
    }


    const tarih = new Date();

    const todoObj = {
      text: input,
      id: tarih.getTime(),
      createdAt: `Tarih: ${tarih.getDate()}/ ${tarih.getMonth() + 1}/${tarih.getFullYear()} || Saat: ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}`,
      isDone: false,
    }


    setYapilacaklarDizisi([...yapilacaklarDizisi, todoObj]);

    setInput("");
  }


  const handleRemoveDone = function () {
    let geciciDizi = [];
    yapilacaklarDizisi.map(item => {
    if (item.isDone !== true) {
    geciciDizi = [...geciciDizi, item]
    }
    return null;
    } )

    // geciciDizi = yapilacaklarDizisi.filter(item => item.isDone === false)
    // burada filter kullanarak yaptım

    setYapilacaklarDizisi(geciciDizi);
  }

  return (

    <div className="container mt-5">
      <form onSubmit={handleInput} className="mb-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Görev Giriniz" value={input} onChange={(olay) => setInput(olay.target.value)} />
          <button className="btn btn-primary" type="submit" >Add</button>
          <button className="btn btn-outline-primary" type="button" onClick={handleRemoveDone}>Remove Completed</button>
          {/* {console.log("render edildi button altı")} */}
        </div>
      </form>
      <div>
        {yapilacaklarDizisi.map(item =>
          <ToDo obje={item} liste={yapilacaklarDizisi} setListe={setYapilacaklarDizisi} key={item.id} />
        )}

      </div>

    </div>
  )
}

export default App;
