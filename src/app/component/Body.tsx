import { useState } from "react";
import { ARRAY_FILMS } from "../mocks/films-mock";
import { Films } from "../models/Films";
import { MyVerticallyCenteredModal } from "./movies/MyVerticalCentralModal";

export const Body = () => {
  const [modalShow, setModalShow] = useState(false);
  const [arrFilms, setArrFilms] = useState<Films>(new Films(0, "", "", "", ""));
  const [objMovies, setObjMovies] = useState<Films[]>(ARRAY_FILMS);

  return (
    <div>
      <header>
        <div className="bd-example">
          <div className=" d-flex justify-content-center ">
            <div className="col-md-9 mt-5">
              <table className="table table-dark table-hover">
                <thead>
                  <tr className="text-info text-start">
                    <th style={{ width: "5%" }}>id</th>
                    <th style={{ width: "30%" }}>Nombre</th>
                    <th style={{ width: "5%" }}>Genero</th>
                    <th style={{ width: "15%" }}>Protagonita</th>
                    <th style={{ width: "10%" }}>Protagonita</th>
                    <th style={{ width: "35%" }}>Imagen</th>
                  </tr>
                </thead>
                <tbody>
                  {objMovies.map((myFilms: Films, index: number) => (
                    <tr key={myFilms.idFilms} className="text-start">
                      <td>{myFilms.idFilms}</td>
                      <td>{myFilms.nameFilms}</td>
                      <td>{myFilms.genderFilms}</td>
                      <td>{myFilms.protagonistFilms}</td>
                      <td>
                        <i className="fa-solid fa-trash-can rojito"></i>{" "}
                        <i className="fa-solid fa-edit"></i>{" "}
                        <i className="fa-solid fa-rotate text-info"> </i>{" "}
                      </td>
                      <td>
                        <a
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            setModalShow(true);
                            setArrFilms(myFilms);
                          }}
                        >
                          <img
                            src={myFilms.imageFilms}
                            alt=""
                            className="imagenU"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                obj = {arrFilms}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
