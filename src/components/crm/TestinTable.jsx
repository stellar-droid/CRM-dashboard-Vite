import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
const TestinTable = () => {

    const products = [ { id: 1, name: 'Product 1', price: 100 }, { id: 2, name: 'Product 2', price: 200 }, { id: 3, name: 'Product 3', price: 300 } ];
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  formatter: (cell, rowData, rowIdx, formatExtraData) => {
    return (
      <div className="d-flex">
        <span
          className="btn-view-edit mr-1"
          onClick={() => {
            console.log("View clicked", rowData);
          }}
        >
          <i className="fa fa-pencil-square-o" />
          Edit
        </span>
      </div>
    );
  },
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];
  return (
    <>
    <BootstrapTable keyField='id' data={ products } columns={ columns } />
    </>
  )
}

export default TestinTable