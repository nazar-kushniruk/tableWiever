import React from 'react';
import ColumnsRef from './columns_ref';
import Table from './table';
import { connect } from 'react-redux';

const App = ({ renderColumns }) => {


  return (
    <div
      style={{ padding: '10px 150px 10px 150px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 50px 10px 50px'
          }}>
        <h2>User Table</h2>
        <ColumnsRef />
      </div>
      <Table renderColumns={renderColumns}/>
    </div>
  )
}


function mapStateToProps(state) {
  const renderColumns = state.renderColumns;
  return {
    renderColumns
  }
}


export default connect(mapStateToProps)(App);