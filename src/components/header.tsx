import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="justify-between w-full flex flex-row border-b border-gray-500 h-20 py-4 px-20">
      <div className="flex font-bold h-full">
        <p className="my-auto">ToDo-List</p>
      </div>
      <ul className="flex flex-row font-bold gap-12 h-full">
        <li className="my-auto hover:cursor-pointer">
          <Link to={`/Home`} className="group">
            Home
          </Link>
        </li>
        <li className="my-auto hover:cursor-pointer">
          <Link to={`/Menu`} className="group">
            Menu
          </Link>
        </li>
        <li className="my-auto hover:cursor-pointer">
          <Link to={`/Settings`} className="group">
            Settings
          </Link>
        </li>
      </ul>
      <div className="flex font-bold gap-12 h-full">
        <button>Entrar</button>
        <button className="border border-blue-600 rounded-md px-4 hover:bg-blue-400 hover:border-transparent">
          Criar Conta
        </button>
      </div>
    </header>
  );
}
