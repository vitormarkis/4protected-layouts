const Login: React.FC = () => {
  return (
    <form className="p-6 rounded-2xl mx-auto mt-14 w-[420px] bg-gray-800 flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">👇 Entrar</h1>
        <h3 className="text-sm text-gray-500">Faça login para continuar.</h3>
      </div>
      <input
        type="email"
        placeholder="seuemail@gmail.com"
        className="p-3 rounded-lg border-2 border-black bg-gray-700"
      />
      <input
        type="password"
        placeholder="Digite sua senha..."
        className="p-3 rounded-lg border-2 border-black bg-gray-700"
      />

      <button type="submit" className="p-3 rounded-lg border-2 border-black bg-green-600">Enviar</button>
    </form>
  )
}

export default Login
