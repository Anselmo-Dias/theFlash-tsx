import { Curiosities } from "./components/Curiosities";
import { Divider } from "./components/Divider";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Villains } from "./components/Villains";

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Divider newStyle/>
      <History />
      <Divider />
      <Villains />
      <Divider newStyle/>
      <Curiosities />
      <Divider />
    </>
  );
}


