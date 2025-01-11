import { Outlet } from "react-router"

export const Navbar = () => {
  return (
    <div className="text-3xl font-bold underline">
      navbar
      <Outlet />
    </div>
  )
}
