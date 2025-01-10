import { Outlet } from "react-router"

export const Navbar = () => {
  return (
    <div className="flex p-5">
      navbar
      <Outlet />
    </div>
  )
}
