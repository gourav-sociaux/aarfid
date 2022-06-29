import { Button } from 'reactstrap';
import React from 'react';
import { Table } from 'reactstrap';
import hiltonLogo from './hilton.png';

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
  width:'33%' ,
  display: 'inline-block',
  width: 'fit-content',
  marginBottom: '20px',
}
function AccountDetails() {

  return (
    <div style={{ backgroundColor: '#F1F2F4' }}>
      <p style={breadCrumbCss}>Dashboard/ Profile</p>


      <div className='order-history-table' style={{
        backgroundColor: '#FFF', margin: '30px', display: 'block', padding: 30
      }}>

        <h5 style={headingCss}>My Account Details</h5>
        <div>
          <div style={brandCss}>

            <img style={{}} src={hiltonLogo} alt='brand-logo' />
            <div style={{ width: 'fit-content', marginLeft: '10px' }}  >
              <p style={{ fontSize: '13px', marginTop: '10px' }}>Member Since: July 25 2022</p>
              <h5>Door Lock</h5>

          <Button style={{background:'#0065B3',marginTop:'10px'}}>Edit Profile</Button>

            </div>

          </div>
          <div style={{ display: 'inline-block', width:'33%' ,marginLeft:'100px',marginRight:'100px' }}>
            <div>             <span style={{ fontSize: '12px' }}>Location Name</span>
              <p>HGVC Office</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>Contact Name</span>
              <p>Mr. Chad Carpenter</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>Address 1</span>
              <p>ABC</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>Address 2</span>
              <p>FL</p>
            </div>
          </div>
          <div style={{ display: 'inline-block', width:'33%' }}>
            <div>             <span style={{ fontSize: '12px' }}>City</span>
              <p>Orlando</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>State</span>
              <p>Florida</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>Postal</span>
              <p>32861</p>
            </div>
            <div>             <span style={{ fontSize: '12px' }}>Email</span>
              <p>test@aarfid.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
