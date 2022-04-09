import React from 'react';

import './App.css';
import 'antd/dist/antd.css'
import {HeaderLayout} from "./Layouts/HeaderLayout";

import {Footer} from "antd/es/layout/layout";
import {Form, Layout} from "antd";
import {FormM} from "./Layouts/FormM";
import Card from "./Layouts/Card";
function App() {
  return (
      <Layout>
        <>
          <HeaderLayout/>
        </>
        <div style={{ padding: '100px 50px 50px 50px'
        }}>
            <Card/>
         {/*<FormM/>*/}
        </div>
        <Footer style={{ textAlign: 'center' }}>Zaporojan Petru</Footer>
      </Layout>
  );
}

export default App;
