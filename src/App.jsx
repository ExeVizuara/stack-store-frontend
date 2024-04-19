import { useState } from "react";
import { MainContent } from "./components/shared/MainContent";
import { MobileMain } from "./components/shared/MobileMain";
import { Sidebar } from "./components/shared/Sidebar";
import logo from "../public/logo_vitec.png"
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ signOut }) {

  {/* Menu movil */ }

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  {/* Sidebar */ }
  const [currentCategory, setCurrentCategory] = useState('Home');

  const [activedCats, setActivedCats] =
    useState({
      Home: true,
      Ventas: false,
      Control: false,
      Usuarios: false,
      Configuracion: false,
      Logout: false
    });

  const SelectedOption = (option) => {
    setCurrentCategory(option);
    setActivedCats({
      Home: option === 'Home',
      Ventas: option === 'Ventas',
      Control: option === 'Control',
      Usuarios: option === 'Usuarios',
      Configuracion: option === 'Configuracion',
      Logout: option === 'Logout'
    });
    console.log(option);
    setShowMenu(!showMenu);
  };
  
  return (

    <div className="bg-[#262837] w-full h-full mb-16">
      <Sidebar showMenu={showMenu} onItemClick={SelectedOption} activatedCats={ currentCategory } />
      <MobileMain onItemClick={toggleMenu} showMenu={showMenu} />
      <MainContent selectedCat={currentCategory} />
      <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
      </View>
    </div>
  );
};

export default withAuthenticator(App);