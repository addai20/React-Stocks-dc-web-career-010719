import React from 'react'

const Stock = (props) => {
  console.log(props);
  //undertand this structure and how it helps reduce repitition
  const {id, ticker, name, type, price} = props.stockObj

  return (
    <div>

      <div className="card" onClick={() => props.buySell(props.stockObj)}>
        <div className="card-body">
          <h5 className="card-title">{
                name
            }</h5>
          <p className="card-text">{
              ticker
            }</p>
          <p className="card-text">{
              type
            }</p>
          <p className="card-text">{
              price
            }</p>
        </div>
      </div>


    </div>
  )
};

export default Stock
