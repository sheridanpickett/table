import React,{useState} from 'react';
import styled from 'styled-components';

const StyledButtonBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;

`

const StyledPageDisplay = styled.div`
  justify-self: start;
`

const ButtonBar = ({length, itemsPerPage, pageNumber, setPageNumber}) => {
  
  const[rowIndex, setRowIndex] = useState(0);
  
  const numberOfButtons = (Math.ceil(length/itemsPerPage) + 1);
  const buttonsInRow = 10;
  const numberOfRows = Math.floor(numberOfButtons/buttonsInRow);


  const increaseRowIndex = rowIndex => {
    if(rowIndex < numberOfRows) {
      setRowIndex(rowIndex + 1);
    }
  }

  const decreaseRowIndex = rowIndex => {
    if(rowIndex > 0) {
      setRowIndex(rowIndex - 1);
    }
  }

  let buttons = [];
  for(let i = 1; i < numberOfButtons; i++) {
    buttons.push(<button key={i} onClick={()=>setPageNumber(i)}>{i}</button>);
  }
  const selectedButtons = buttons.slice((rowIndex*buttonsInRow), ((rowIndex*buttonsInRow)+buttonsInRow));
  return(
    <StyledButtonBar>
    <StyledPageDisplay>
      {`showing ${(pageNumber-1)*itemsPerPage} to ${((pageNumber-1)*itemsPerPage)+buttonsInRow} of ${length} entries`}
    </StyledPageDisplay>
    <div>
      <button onClick={()=>setRowIndex(0)}>Prev++</button>
      <button onClick={()=>decreaseRowIndex(rowIndex)}>Prev</button>
      {selectedButtons}
      <button onClick={()=>increaseRowIndex(rowIndex)}>Next</button>
      <button onClick={()=>setRowIndex(numberOfRows)}>Next++</button>
    </div>
    <div></div>
    </StyledButtonBar>
  )
}

export default ButtonBar;