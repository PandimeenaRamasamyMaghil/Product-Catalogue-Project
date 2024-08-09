import React, { useContext, useState } from 'react'
import '../Header/Header.scss'

import SearchBox from './SearchBox1'
import searchIcon from '../../../../assets/images/searchicon.png'
import filterIcon from '../../../../assets/images/filter1.svg'
import Excel from '../../../../assets/images/Excel.svg'
import DownloadExcel from '../../../../assets/images/ExcelDownload.png'
import { Contextpagejs } from '../../../contextpage'
import { useNavigate } from 'react-router-dom'
import Menu120 from './Menu120'
import Filter from './Filter'


const Header = () => {
  const{isExpanded,setIsExpanded}=useContext(Contextpagejs)

  const [filterSelected,setFilterSelected]=useState(false)
  const navigate=useNavigate()

  const handleFilter=()=>{
    setFilterSelected(!filterSelected)

  }


  

  return (
    <div className={isExpanded?'Header-Container1':"Header-Container"}>

      {/* {**********************HeaderSection*****************************************************************} */}

      <div className='Header-Heading-Search-Filter-Container'>
        <Menu120/>
     
        <SearchBox/>
        <div className='Filter-Div'  >
        
        <img className="FilterIcon-Header"  onClick={handleFilter}  src={filterIcon} alt="" />
        {filterSelected && <Filter/>}
        </div>
        <img className={filterSelected?"Excel-Header1":"Excel-Header"}src={Excel} alt="" />
        <img className={filterSelected?"Excel-Header-Download1":"Excel-Header-Download"} src={DownloadExcel} alt="" />
        
        </div>

  {/* {**********************Header Button*****************************************************************} */}

      <div  className='Add-Item-Container'>
        <h3 className='Add-Item-Heading-Plus'>+</h3>
        <h3 className='Add-Item-Heading'>Add Item</h3>
        

      </div>







    </div>
  )
}

export default Header