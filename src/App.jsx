import { useState } from "react";
import { MainContent } from "./components/shared/MainContent";
import { MobileMain } from "./components/shared/MobileMain";
import { Sidebar } from "./components/shared/Sidebar";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator, withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

function App({signOut}) {

  return (
    <Authenticator>
      <CustomApp signOut={signOut}/>
    </Authenticator>
  );
};

function CustomApp({ signOut }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const [currentCategory, setCurrentCategory] = useState('Home');
  const [activedCats, setActivedCats] = useState({
    Home: true,
    Ventas: false,
    Control: false,
    Usuarios: false,
    Configuracion: false,
    Logout: false
  });

  const selectedOption = (option) => {
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

  const { authStatus } = useAuthenticator();

  return (
    <>
      {authStatus === 'authenticated' && (
        <div className="bg-[#262837] w-full h-full mb-16">
          <Sidebar showMenu={showMenu} onItemClick={selectedOption} activatedCats={currentCategory} logOut={signOut} />
          <MobileMain onItemClick={toggleMenu} showMenu={showMenu} />
          <MainContent selectedCat={currentCategory} />
        </div>
      )}
    </>
  );
}

export default withAuthenticator(App);