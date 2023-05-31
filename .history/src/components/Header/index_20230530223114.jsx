import './header.css'

import { BiLogOut } from 'react-icons/bi'

export function Header(){
  return(
    <header className="admin-header">
      <nav>
        <button>
          <BiLogOut size={28} color='#db2629'/>
        </button>
      </nav>
    </header>
  )
}