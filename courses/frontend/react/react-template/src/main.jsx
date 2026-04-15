import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Greeting } from "./components/Greeting";
import { Cards } from "./components/Cards";
import { Person } from "./components/Person.jsx";
import { Button } from "./components/Button";
import { DangerButton } from "./components/DangerButton.jsx";
import { TextInput } from "./components/TextInput";
import { ProfileImage } from "./components/ProfileImage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <App />
    <Cards />
    <Person />
    <Button />
    <DangerButton />
    <TextInput />
    <ProfileImage />
  </StrictMode>,
);
