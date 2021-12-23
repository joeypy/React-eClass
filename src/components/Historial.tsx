import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  add,
  loadLocalData,
  selectHistorial,
} from "../features/historial/historialSlice";

// Prueba para usar redux y guardar en el localstore la data de historial
interface Item {
  id?: number;
  user?: string;
  artist?: string;
  track?: string;
}

const Historial = () => {
  const historial = useAppSelector(selectHistorial);
  const dispatch = useAppDispatch();
  const [item, setItem] = useState<Item>({
    id: 0,
    user: "",
    artist: "",
    track: "",
  });

  const handleInputId = (event: any) => {
    let value = parseInt(event.target.value);
    setItem({ ...item, id: value });
  };

  function handleInput(event: any) {
    let field = event.target.name;
    let value = event.target.value;
    setItem({ ...item, [field]: value });
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await dispatch(add(item));
    setItem({
      id: 0,
      user: "",
      artist: "",
      track: "",
    });
  };

  useEffect(() => {
    
    try {
      let stateLocalStore = localStorage.getItem("state");
      if (stateLocalStore !== null) {
        let state = JSON.parse(stateLocalStore);
        dispatch(loadLocalData(state));
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return (
    <div>
      <form action="">
        <label htmlFor="id">ID</label>
        <input
          aria-label="Set id"
          name="id"
          value={item.id}
          type="number"
          onChange={handleInputId.bind(this)}
        />
        <label htmlFor="user">User</label>
        <input
          aria-label="Set user"
          name="user"
          value={item.user}
          type="text"
          onChange={handleInput.bind(this)}
        />
        <label htmlFor="artist">Artist</label>
        <input
          aria-label="Set artist"
          name="artist"
          value={item.artist}
          type="text"
          onChange={handleInput.bind(this)}
        />
        <label htmlFor="track">Track</label>
        <input
          aria-label="Set track"
          name="track"
          value={item.track}
          type="text"
          onChange={handleInput.bind(this)}
        />
        <button type="submit" onClick={handleSubmit.bind(this)}>
          Submit
        </button>
      </form>
      <ul>
        {historial.map((item) => {
          return (
            <li key={item.id + item.artist}>
              id:{item.id}, artist:{item.artist}, track:{item.track}, user:
              {item.user}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Historial;
