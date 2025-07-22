import React from "react";
import About from "../About/About";
import Advantages from "../Advantages/Advantages";
import Blog from "../Blog/Blog";
import Cares from "../Cares/Cares";
import Companies from "../Companies/Companies";
import Start from "../Start/Start";
import Tasks from "../Tasks/Tasks";
import Track from "../Track/Track";
import Started from "../Started/Started";

const Main: React.FC = () => {
  return (
    <main>
      <Start />
      <Companies />
      <Advantages />
      <Cares />
      {/*Добавить стейты на аккордионы*/}
      <About />
      <Track />
      <Tasks />
      <Blog />
      <Started />
    </main>
  );
};

export default Main;
