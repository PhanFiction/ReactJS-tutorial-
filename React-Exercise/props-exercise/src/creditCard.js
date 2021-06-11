import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let testInfo = {
    cardHolder: 'Tartaglia',
    expirationDate: '08/19',
    cardNum: '1234 5678 8765 4321',
    cvv: '1234',
    bankName: 'Snezhnaya Bank'
}

function Bank({info})
{
    return(
        <div className="bank-card-center">
            <div className="bank-card">
                <div className="bank-card-number-container">
                    <BankName bankName={info.bankName}/>
                </div>
                <BankCard bankCard={info.cardNum} cvv={info.cvv}/>
                <ValidDate date={info.expirationDate}/>
                <CardHolder cardHolder={info.cardHolder}/>
            </div>
        </div>
    );
}

function BankName({bankName})
{
    return(
        <div className="bank-name">
            {bankName}
        </div>
    );
}

function BankCard({bankCard, cvv})
{
    return(
        <div className="bank-card-number">
            {bankCard}
            <div className="cvv">
                {cvv}
            </div>
        </div>
    );
}

function ValidDate({date})
{
    return(
        <div className="valid-date">
            <div className="valid">
                VALID THRU
            </div>
            <div className="date">
                {date}
            </div>
        </div>
    );
}

function CardHolder({cardHolder})
{
    return(
        <div className="card-holder">
            {cardHolder}
        </div>
    );   
}

ReactDOM.render(<Bank info={testInfo}/>, document.querySelector('#root'));