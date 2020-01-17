import React from 'react';

const ToolbarTop = ({itemsPerPage, setItemsPerPage}) => {
  return (
    <>
      <label>Show entries</label>
      <br />
      <select
        value={itemsPerPage}
        onChange={e=>setItemsPerPage(e.target.value)}
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
    </>
  )
}

export default ToolbarTop;