import WasLogged from "./WasLogged";
import NotLogged from "./NotLogged";
import { useAuth } from "@/hooks";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 w-full h-14 z-10 shadow">
      <nav className="relative flex items-center h-full">
        {user ? <WasLogged /> : <NotLogged />}
      </nav>
    </header>
  );
};

export default Header;