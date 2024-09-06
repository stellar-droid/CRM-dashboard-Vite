// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'flatpickr/dist/themes/material_blue.css'; 
import "primereact/resources/themes/lara-light-cyan/theme.css";
import MainRoutes from './Routes/MainRoutes';
import './App.css';





function App() {
  return (
    <>

      {/* <Index /> */}
     
        <MainRoutes />
    

    </>
  );
}

export default App;
