import {NavLink} from "react-router-dom";

const Tabs = () => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <NavLink
        to="/pagination"
        className={({ isActive }) => {
          return `px-6 py-2 rounded-lg font-medium  ${isActive ? 'bg-black text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`
        }}
      >
        Page Controls
      </NavLink>
      <NavLink
        to="/load-more"
        className={({ isActive }) => {
          return `px-6 py-2 rounded-lg font-medium  ${isActive ? 'bg-black text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`
        }}
      >
        Infinite Scroll
      </NavLink>
    </div>
  )
}

export default Tabs