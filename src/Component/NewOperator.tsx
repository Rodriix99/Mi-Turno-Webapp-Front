function NewOperator() {
  return (
    <section>
      <div className="shadow-rl flex flex-col justify-center items-center w-full max-w-4xl p-8 mx-auto my-10 rounded-lg text-lg">
        <h1 className="font-roboto text-xl font-bold mt-5 mb-5 text-start ">
          Creación de operadores
        </h1>
        <form className="space-y-6 w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-black font-roboto"
            >
              Nombre
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm text-black font-roboto"
            >
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                className=" border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600 "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div>
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
                  type="text"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label
                htmlFor="branch"
                className="block text-sm text-black font-roboto"
              >
                Sucursal
              </label>
              <div className="mt-1">
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
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
                Repetir Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password2"
                  type="password"
                  required
                  className="border border-gray-300 block w-full px-5 py-3 text-base text-neutral-600 rounded-lg hover:border-gray-400 focus:border-purple-600"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-roboto text-center text-white transition duration-500 ease-in-out transform bg-purple-600 rounded-xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mb-5 "
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewOperator;
