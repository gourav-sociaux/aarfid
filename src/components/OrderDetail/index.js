import { Button } from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';
import hiltonLogo from './hilton.png';
// import reactlogo from '../assets/reactlogo.png';
import aarfidDummy from './aarfid-dummy.png';
const breadCrumbCss={
  paddingTop: '30px', 
  fontSize: '12px',
   width: 'fit-content',
    paddingLeft: '30px'
}

const headingCss={
  fontSize: '20px',
   width: 'fit-content',
   marginBottom:'20px',
}

const brandCss={
   width: 'fit-content',
   marginBottom:'20px',
}
function OrderDetail() {

  return (
    <div style={{ backgroundColor: '#F1F2F4' }}>
      <p style={breadCrumbCss}>Dashboard/ Order Detail</p>


        <div className='order-history-table' style={{
          backgroundColor: '#FFF', margin: '30px', display: 'block', padding: 30
        }}>

          <h5 style={headingCss}>Order Detail</h5>
          <div style={brandCss}>
            
            <img style={{display:'inline-block'}} src={hiltonLogo} alt='brand-logo'/>
            <div  style={{display:'inline-block', width:'fit-content',marginLeft:'10px'}}  >
              <h5>Door Lock</h5>
            <p>Shipment Date: July 25 2022</p>
            </div>
            
          
          </div>
          <div style={{border: '1px solid #c3c3c3',overflow:'auto'}}>

          <Table bordered responsive>
            <thead >
              <tr>
                <th>Item #</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Qty</th>
                <th>UOM</th>
                <th>Unit Price</th>
                <th>Ext Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001234</td>
                <td>Lorem Ipsum Details here</td>
                <td>   <img src={aarfidDummy} alt='brand-logo' /></td>
                <td>1</td>
                <td>-</td>
                <td>$3,456.12</td>
                <td>$3,456.12</td>
              </tr>
              <tr>
              <td>9001234</td>
                <td>Lorem Ipsum Details here</td>
                <td>   <img src={aarfidDummy} alt='brand-logo' /></td>
                <td>1</td>
                <td>-</td>
                <td>$3,016.12</td>
                <td>$3,016.12</td>
              </tr>
            </tbody>
          </Table>
          <div style={{marginTop:'-17px',float:'right',border: '1px solid #c3c3c3',width:'354px',alignContent: 'start'}}>
            <div style={{margin:'10px'}}>
            <p style={{display:'inline-block',marginRight:'100px'}}>Sales Tax Rate</p>
            <p style={{display:'inline-block'}}>$10.00</p>

              </div>
              <div style={{margin:'10px'}}>
            <p style={{display:'inline-block',marginRight:'100px'}}>Other Tax Rate</p>
            <p style={{display:'inline-block'}}>$10.00</p>

              </div>
              <div style={{backgroundColor:'lightGray',padding:'8px'}}>
            <p style={{display:'inline-block',marginRight:'100px'}}>Order Total</p>
            <h5 style={{display:'inline-block'}}>$5986.32</h5>

              </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default OrderDetail;
