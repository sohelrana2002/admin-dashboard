import SideBar from '../../shared/SideBar/SideBar'
import Navbar from '../../shared/Navbar/Navbar'
import DataTable from '../../components/DataTable/DataTable'

import './List.scss'



const List = () => {
  return (
    <div className="list">
        <SideBar />

        <div className="list__container">
          <Navbar />
          <DataTable />
        </div>
    </div>
  )
}

export default List