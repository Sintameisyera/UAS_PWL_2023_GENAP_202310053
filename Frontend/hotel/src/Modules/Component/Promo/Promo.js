import React, { useState, useEffect } from "react";
import rooms from "../../../Asset/rooms.png";
import "../Promo/Promo.css";

export default function Promo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tabel_promo");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Gagal mendapatkan data promo", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Fcontainer">
      <img src={rooms} className="img-fluid pr" alt="rooms" />

      <div className="promo pt-10">PROMO</div>

      {data.length > 0 &&
        data.map((v, index) => (
          <div className="pstandar pt-4 pb-4 kpromo" key={index} style={{ marginBottom: "30px "}}>
            <img
              src={v.foto}
              className="img-fluid standar"
              alt="Standar"
              style={{ width: "90%", marginLeft: "5%" }}
            />

            <div>
              <h1 className="text-center pt-2">{v.judul}</h1>
              <div className="bgt text-center">
                <h1 className="t1 text-center">Diskon {v.diskon}</h1>
              </div>
              <h3 className="text-center pt-2 fw-light">Periode {v.periode}</h3>
            </div>
          </div>
        ))}
    </div>
  );
}
 




// import React from "react";
// import rooms from "../../../Asset/rooms.png";
// import "../Promo/Promo.css";
// import standar from "../../../Asset/standar.jpg";
// import twin from "../../../Asset/twin.jpg";

// export default function promo() {
//   return (
//     <div className="Fcontainer">
//       <img src={rooms} class="img-fluid pr" alt="rooms"></img>

//       <div className="promo pt-10">PROMO</div>
//       <div className="pstandar pt-4 pb-4 kpromo" >
//         <img src={standar} class="img-fluid standar" alt="Standar" style={{width: "90%", marginLeft: "5%"}}></img>

//         <div>
//             <h1 className="text-center pt-2">Standar + Breakfast</h1>
//             <div className="bgt text-center">
//                 <h1 className="t1 text-center">Diskon 50% </h1>
//             </div>
//             <h3 className="text-center pt-2 fw-light">Periode 1-30 september 2023</h3>
//         </div>
//       </div>

//       <div className="ptwin pt-4 pb-4 kpromo mt-4" >
//         <img src={twin} class="img-fluid twin" alt="Twin" style={{width: "90%", marginLeft: "5%"}}></img>

//         <div>
//             <h1 className="text-center pt-2">Twin + Breakfast</h1>
//             <div className="bgt text-center">
//                 <h1 className="t1 text-center">Diskon 50% </h1>
//             </div>
//             <h3 className="text-center pt-2 fw-light">Periode 1-30 september 2023</h3>
//         </div>
//       </div>



//     </div>
//   );
// }
