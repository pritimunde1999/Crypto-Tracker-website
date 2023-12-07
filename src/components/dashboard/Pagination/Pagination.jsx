import {useState} from 'react';
import "./Pagination.css"
import Pagination from '@mui/material/Pagination';


export default function PaginationComp({pageNumber,handlePageChange}) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='pagination-div'>
      <Pagination count={10} page={pageNumber} onChange={handlePageChange} 
       sx={{color: "var(--white)",
       "& .Mui-selected ": {
         backgroundColor: "var(--blue) !important",
         color: "#fff !important",
         borderColor: "var(--blue) !important",
       },
       "& .MuiPaginationItem-ellipsis": {
         border: "0px solid var(--grey) !important",
       },
       "& .MuiPaginationItem-text": {
         color: "var(--white)",
         border: "1px solid var(--grey)",
    }}    } 
      />
    </div>
  );
}
