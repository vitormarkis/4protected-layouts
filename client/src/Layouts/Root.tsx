import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  const style =
    (styleClasses: string) =>
    ({ isActive }: { isActive: boolean; isPending: boolean }) =>
      `${isActive ? "bg-black/20" : ""} ${styleClasses}`

  return (
    <div className="w-screen h-screen bg-gray-900 text-white">
      <header className="w-full bg-gray-800">
        <main className="p-4 w-full max-w-[1280px] mx-auto">
          <ul>
            <NavLink
              to="/"
              className={style("px-4 py-2 rounded-lg")}
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={style("px-4 py-2 rounded-lg")}
            >
              Profile
            </NavLink>
          </ul>
        </main>
      </header>
      <div className="w-full max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
