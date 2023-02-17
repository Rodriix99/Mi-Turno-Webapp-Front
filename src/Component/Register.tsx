import { useInput } from "../Hooks/useInput";

interface FormData {
  name: string;
  dni: number;
  email: string;
  password: string;
  password2: string;
}

const Register = () => {
  const { formulario, handleChange } = useInput<FormData>({
    name: "javier",
    dni: 4,
    email: "",
    password: "",
    password2: "",
  });

  const { name, dni, email, password, password2 } = formulario;

  return (
    <section className="">
      <div className="shadow-rl flex flex-col justify-center items-center w-full max-w-2xl p-8 mx-auto my-10 rounded-lg text-lg">
        <div className="w-full">
          <button className="flex items-center font-roboto text-purple-600">
            <svg
              className="mr-2 fill-purple-600"
              width="14"
              height="14"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.70509 15.705C9.09445 15.3156 9.09445 14.6844 8.70509 14.295L3.41009 9H16.0001C16.5524 9 17.0001 8.55228 17.0001 8C17.0001 7.44771 16.5524 7 16.0001 7H3.41009L8.70509 1.705C9.09445 1.31564 9.09445 0.684357 8.70509 0.294996C8.31573 -0.0943644 7.68445 -0.0943643 7.29509 0.294997L0.297195 7.29289C-0.0933288 7.68341 -0.0933296 8.31658 0.297195 8.7071L7.29509 15.705C7.68445 16.0944 8.31573 16.0944 8.70509 15.705Z"
                fill=""
              />
            </svg>
            Atrás
          </button>
        </div>

        <h1 className="font-roboto text-2xl font-bold mt-5 mb-5 text-center">
          Crear cuenta
        </h1>
        <form action="#" method="POST" className="space-y-6 w-full">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-black font-roboto"
              >
                Nombre y Apellido
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="dni"
                className="block text-sm text-black font-roboto"
              >
                DNI
              </label>
              <div className="mt-1">
                <input
                  id="dni"
                  name="dni"
                  onChange={handleChange}
                  type="text"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-black font-roboto"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                required
                className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-black font-roboto"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm text-black font-roboto"
              >
                Repetir Contraseña:
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password2"
                  onChange={handleChange}
                  type="password"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center font-roboto justify-center border black rounded-lg bg-gray-200">
            La contraseña debe contener:
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mb-5 "
            >
              Registrarme
            </button>
            <hr className="border-1 border-gray-300 " />
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-purple-600 transition duration-500 ease-in-out transform bg-purple-200 rounded-xl hover:bg-purple-300  mt-5"
            >
              ¿Ya tenés cuenta? Iniciá sesión
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
