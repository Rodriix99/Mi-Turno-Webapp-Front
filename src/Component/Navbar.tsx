import misReservas from "../assets/icons/misReservas.svg";
import miCuenta from "../assets/icons/miCuenta.svg";
import reportes from "../assets/icons/reports.svg";
import operador from "../assets/icons/operator.svg";
import sucursal from "../assets/icons/branch.svg";

export const Navbar = () => {
  const user = { userType: "admin" };

  return (
    <nav className="shadow-nav lg:py-4 lg:px-24 border-gray-200 rounded white:bg-gray-800 white:border-gray-700  sm: py-3 px-5">
      {user.userType !== "admin" ? (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded">
            Reservar
          </button>

          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-50 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mis Reservas{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={misReservas}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mi Cuenta{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={miCuenta}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div>
            <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded">
              Crear sucursal
            </button>
            <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 ml-3 rounded sm: ml-1.5">
              Sucursal
            </button>
          </div>

          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-50 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sucursales{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={sucursal}
                    alt="Sucursal"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Operadores{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={operador}
                    alt="Operador"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Reportes{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={reportes}
                    alt="Reportes"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-black rounded font-semibold font-roboto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet md:p-0 dark:text-zinc-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Mi Cuenta{" "}
                  <img
                    className="pl-1 hover:text-cruceHover"
                    src={miCuenta}
                    alt="Mi cuenta"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
