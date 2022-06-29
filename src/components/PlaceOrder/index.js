import { Button } from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';
import hiltonLogo from './hilton.png';
import aarfidDummy from './aarfid-dummy.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuantityPicker from './QuantityPicker';
const breadCrumbCss = {
  paddingTop: '30px',
  fontSize: '12px',
  width: 'fit-content',
  paddingLeft: '30px'
}

const headingCss = {
  fontSize: '20px',
  width: 'fit-content',
  marginBottom: '20px',
}

const brandCss = {
  width: 'fit-content',
  marginBottom: '20px',
}



function PlaceOrder() {

  return (
    <div style={{ backgroundColor: '#F1F2F4' }}>
      <p style={breadCrumbCss}>Dashboard/ Place New Order</p>

      <div className='order-history-table' style={{
        backgroundColor: '#FFF', margin: '30px', display: 'block', padding: 30
      }}>

        <h5 style={headingCss}>Place New Order</h5>
        <div style={brandCss}>

          <img style={{ display: 'inline-block' }} src={hiltonLogo} alt='brand-logo' />
          <div style={{ display: 'inline-block', width: 'fit-content', marginLeft: '10px' }}  >
            <h5>Door Lock</h5>
            <p>Shipment Date: July 25 2022</p>
          </div>


        </div>


        <div style={{marginRight:'5px',display: 'inline-block', border: '1px solid #c3c3c3', overflow: 'auto', width: '48%' }}>
        <Table responsive>
            <thead >
              <tr>
              <th>Photo</th>
                <th>Item #</th>
                <th>Product Title</th>
                <th>Qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>            <img src={aarfidDummy} alt='brand-logo' /> </td>

                <td>1001234</td>
                <td>Product 1</td>
               
                <td><QuantityPicker/></td>
                <td><Button style={{background:'#0065B3'}}>Add+</Button></td>
              </tr>
              <tr>
              <td>            <img src={aarfidDummy} alt='brand-logo' /></td>

                <td>9001234</td>
                <td>Product 3</td>
                
                <td><QuantityPicker/></td>
                <td><Button style={{background:'#0065B3'}}>Add+</Button></td>
              </tr>
              <tr>
              <td>            <img src={aarfidDummy} alt='brand-logo' /></td>

                <td>9001234</td>
                <td>Product 4</td>
                
                <td><QuantityPicker/></td>
                <td><Button style={{background:'#0065B3'}}>Add+</Button></td>
              </tr>
              <tr>
              <td>            <img src={aarfidDummy} alt='brand-logo' /></td>

                <td>9001234</td>
                <td>Product 2</td>
                
                <td><QuantityPicker/></td>
                <td><Button style={{background:'#0065B3'}}>Add+</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{marginLeft:'5px',display: 'inline-block', border: '1px solid #c3c3c3', overflow: 'auto', width: '48%' }}>
<h5 style={{margin:'15px'}}> My Cart</h5>
          <Table responsive>
            <thead >
              <tr>
                <th>Item #</th>
                <th>Product Title</th>
                <th>Photo</th>
                <th>Qty</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001234</td>
                <td>Product 1</td>
                <td>            <img src={aarfidDummy} alt='brand-logo' />
                </td>
                <td>1</td>
                <td>$3,456.12</td>
              </tr>
              <tr>
                <td>9001234</td>
                <td>Product 2</td>
                <td>            <img src={aarfidDummy} alt='brand-logo' />
                </td>
                <td>1</td>
                <td>$3,016.12</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ marginTop: '-17px', float: 'right', border: '1px solid #c3c3c3', width: '354px', alignContent: 'start' }}>
            <div style={{ margin: '10px' }}>
              <p style={{ display: 'inline-block', marginRight: '100px' }}>Sales Tax Rate</p>
              <p style={{ display: 'inline-block' }}>$10.00</p>

            </div>
            <div style={{ margin: '10px' }}>
              <p style={{ display: 'inline-block', marginRight: '100px' }}>Other Tax Rate</p>
              <p style={{ display: 'inline-block' }}>$10.00</p>

            </div>
            <div style={{ backgroundColor: 'lightGray', padding: '8px' }}>
              <p style={{ display: 'inline-block', marginRight: '100px' }}>Order Total</p>
              <h5 style={{ display: 'inline-block' }}>$5986.32</h5>

            </div>
          </div>

         
        </div>
        <div style={{  float: 'right', margin:'15px' }}>
          <Button style={{background:'#FE1616'}}>Cancel Order</Button>
          <Button style={{background:'#29B901',marginLeft:'10px',marginRight:'10px'}}>Save Order</Button>
          <Button style={{background:'#0065B3'}}>Complete Order</Button>

          </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
