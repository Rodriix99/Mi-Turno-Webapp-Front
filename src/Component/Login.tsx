function Login() {
  return (
    <section className="">
      <div className="shadow-xl flex flex-col justify-center items-center w-full max-w-md p-5 mx-auto mt-24 rounded-lg text-lg">
        <h1>Iniciar sesión</h1>
        <form action="#" method="POST" className="space-y-6 w-full">
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-600"
            >
              Usuario
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                //placeholder="Your Email"
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out  rounded-lg hover:border-gray-400 focus:border-violet-500 "
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-600"
            >
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                //placeholder="Your Password"
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out  rounded-lg hover:border-gray-400 focus:border-violet-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm ">
              <a
                href="#"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-violet-600 rounded-xl hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mb-5 "
            >
              Ingresar
            </button>
            <hr className="border-1 border-gray-300 " />
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-violet-600 transition duration-500 ease-in-out transform bg-violet-200 rounded-xl hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mt-5 "
            >
              ¿No tenés cuenta? Registrate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
