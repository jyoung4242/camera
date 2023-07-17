//Library
import "./style.css";
import { SceneManager } from "./components/Scene";
import { LoadComponents } from "./components/Components/_components";

//Scenes
import { Test } from "./components/Scenes/testScene";

//Components
LoadComponents();

//Load Scenes
let sceneMgr = new SceneManager();
sceneMgr.register(Test);
sceneMgr.set("test");
