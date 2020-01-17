import React,{useState} from 'react';
import styled from 'styled-components';
import ButtonBar from './ButtonBar';
import ToolbarTop from './ToolbarTop';

const StyledTable = styled.div`
  display: grid;
  margin: 30px;
  margin-top: 0;
  grid-template-columns: .6fr 2fr 1fr 1fr;
  max-height: 500px;
  overflow-y: scroll;
`
const StyledTableHeader = styled.div`
  display: grid;
  margin: 30px;
  margin-bottom: 0;
  padding-right: 16.812px;
  grid-template-columns: .6fr 2fr 1fr 1fr;
`

const Table = ({headings, data}) => {
  console.log(data);

  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  let table = []

  if(data.length > 0) {
    table = data.map((item, index) => {
      return (
        <>
          <div style={{'border-top': '1px solid #dfdfdf'}}>{item.ItemCode}</div>
          <div style={{'border-top': '1px solid #dfdfdf'}}>{item.Description}</div>
          <div style={{'border-top': '1px solid #dfdfdf'}}>{item.Type}</div>
          <div style={{'border-top': '1px solid #dfdfdf'}}>{item.Quantity}</div>
        </>
      )
    })
  }

  const headingsRow = headings.map((heading, index)=><div key={index}>{heading}</div>)

  const tablePage = table.slice(((pageNumber*itemsPerPage) - itemsPerPage),(pageNumber*itemsPerPage));
  
  return (
    <>
      <ToolbarTop itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
      <StyledTableHeader>
        {headingsRow}
      </StyledTableHeader>
      <StyledTable>
        {tablePage}
      </StyledTable>
      <ButtonBar length={data.length} pageNumber={pageNumber} setPageNumber={setPageNumber} itemsPerPage={itemsPerPage}/>
    </>
  )
}

export default Table;