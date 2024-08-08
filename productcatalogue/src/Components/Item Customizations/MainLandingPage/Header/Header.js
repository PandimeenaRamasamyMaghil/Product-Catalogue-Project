import React, { useContext } from 'react'
import '../Header/Header.scss'
import SearchBox from './SearchBox1'
import searchIcon from '../../../../assets/images/searchicon.png'
import filterIcon from '../../../../assets/images/filter1.svg'
import Excel from '../../../../assets/images/Excel.svg'
import DownloadExcel from '../../../../assets/images/ExcelDownload.png'
import { Contextpagejs } from '../../../contextpage'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const{isExpanded,setIsExpanded}=useContext(Contextpagejs)
  const navigate=useNavigate()


  

  return (
    <div className={isExpanded?'Header-Container1':"Header-Container"}>

      {/* {**********************HeaderSection*****************************************************************} */}

      <div className='Header-Heading-Search-Filter-Container'>
        <h1 className='Header-Heading'>Menu(120)</h1>
        <SearchBox/>
        
        <img className="FilterIcon-Header" src={filterIcon} alt="" />
        <img className="Excel-Header" src={Excel} alt="" />
        <img className="Excel-Header-Download" src={DownloadExcel} alt="" />
        
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