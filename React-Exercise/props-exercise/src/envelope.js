import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let fromPerson = {
  fullname: 'Tartaglia',
  address: 'Fatui Bank',
  city: 'Snezhnaya',
  country: 'Teyvat'
}

let toPerson = {
  fullname: 'ZhongLi',
  address: 'Wang Sheng Funeral',
  city: 'Liyue',
  country: 'Teyvat'
}

function AddressLabel({person})
{
  return(
    <div className="person-container">
      <div className="person">
        <div className="name">
          {person.fullname}
          <div className="address">
            {person.address}
            <div className="city-country">
              {person.city + ', ' + person.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stamp()
{
  return(
    <div className="stamp"> 
      Stamp
    </div>
  );
}

function Envelope({fromPerson, toPerson})
{
  return(
    <div className="envelope-wrapper">
      <div className="envelope">
        <div className="sender">
          <AddressLabel person={fromPerson}/>
          <div className="stamp-container">
            <Stamp/>
          </div>
        </div>
        <div className="receiver">
          <AddressLabel person={toPerson}/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Envelope fromPerson={fromPerson} toPerson={toPerson}/>, document.querySelector('#root'));
