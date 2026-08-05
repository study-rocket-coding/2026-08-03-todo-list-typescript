import { Link } from "react-router";

function Nav() {
  const nickName = localStorage.getItem("nickname")

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
  }

  return (
    <nav className="flex flex-wrap gap-3 justify-between items-center px-6 md:px-8 py-5 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-control bg-brand-800 text-white flex items-center justify-center text-body font-bold">
          ✓
        </div>
        <h1 className="font-bold tracking-wider text-label text-brand-800 m-0">ONLINE TODO LIST</h1>
      </div>
      <ul className="flex items-center gap-5 text-label list-none m-0 p-0">
        <li className="text-gray-500">{ nickName } 的待辦清單</li>
        <li>
          <Link
            to="/"
            className="font-bold text-gray-900 no-underline hover:text-brand-900 transition-colors"
            onClick={ () => handleLogOut() }
          >
            登出
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
