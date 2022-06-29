import { Button } from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';

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

function OrderHistory() {

  return (
    <div style={{ backgroundColor: '#F1F2F4' }}>
      <p style={breadCrumbCss}>Dashboard/ Order History</p>


        <div className='order-history-table' style={{
          backgroundColor: '#FFF', margin: '30px', display: 'block', padding: 30
        }}>

          <h5 style={headingCss}>My Order History</h5>
          <Table bordered responsive>
            <thead >
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>#1001</td>
                <td>22/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>#1002</td>
                <td>23/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr> <tr>
                <th scope="row">3</th>
                <td>#1003</td>
                <td>23/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr> <tr>
                <th scope="row">4</th>
                <td>#1004</td>
                <td>24/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr> <tr>
                <th scope="row">5</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">6</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">7</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">8</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">9</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
              <tr>
                <th scope="row">10</th>
                <td>#1005</td>
                <td>25/06/2022</td>
                <td>$ 1007</td>
                <td><Button href="/order-detail">View Order</Button></td>

              </tr>
            </tbody>
          </Table>
      </div>
    </div>
  );
}

export default OrderHistory;
