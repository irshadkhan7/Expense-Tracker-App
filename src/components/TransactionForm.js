import React, { useState } from "react";
import { uniqueId } from '../Utils';
// import SearchIcon from '@mui/icons-material/Search';
import transactionform from "../style/transactionform.css"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import { Modal,ModalBody, ModalHeader, Row, Col } from "reactstrap";



function TransactionForm({onNewTransaction}) {
const [nameValue, setNameValue] = useState('');
const [amountValue, setAmountValue] = useState('');



const [modal, setmodal] = useState(false);

const [modalnew, setmodalnew] = useState(false);

  /******************* manage Transaction data*****************/

const addTransaction = (type, evt) => {
  evt.preventDefault();
  
 const data =  { id: uniqueId(), name: nameValue,
    amount: parseInt(amountValue), type: type };
    // console.log(data);

    onNewTransaction(data);

    setNameValue('');
    setAmountValue('');

    setmodal(false)
    setmodalnew(false)
    // data.id()


      // alert(" Successfull")
       
      if(nameValue && amountValue,amountValue ){
          
        alert(" Successfull")
        // onNewTransaction(data);
        // onNewTransaction(true);

    }else{
        alert("All fileds are mandatry")
        // onNewTransaction('');
     }
}
  /*******************Start form validation*****************/

 const  handleSubmitAddTransaction = (event) =>{
  event.preventDefault();
}
  return (  
    <>
            {/*******************Start modal*****************/}
    <div >
      {/* <h2>Add New Transcation</h2>          onSubmit={handleSubmitAddTransaction}*/}
      <div >
        <from onSubmit={handleSubmitAddTransaction} >
        <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)} className="modal-css">
          <ModalHeader toggle={() => setmodal(!modal)} >Add Amount.......KGN</ModalHeader> 
          <ModalBody>
            <form >
              <Row >
                <Col lg={1200} >
                {/* <label >
            <h3> Name</h3>
          <div className="placeholder-btn">
            <input type="name"  placeholder="Buget/Expenses" value={nameValue} 
             onChange={(e) => setNameValue(e.target.value)} />
            <p className={nameValue? "data": "noData"}> {nameValue? "" : "Name is required"}</p>
          </div>
        </label> */}
        <label>
          <h3>Amount</h3>
          <div className="placeholder-btn">
            <input type="text" placeholder="Amount"  value={amountValue} 
             onChange={(e) => setAmountValue(e.target.value)}/>
            <p className={ nameValue? "data": "noData"}> {amountValue? "" : "Amout is required"}</p>

          </div>
        </label>
        <div className="income-btn">
           {/* <button className="btn mt-3"  onClick={(e)=> setmodal('income',e)}>+ Add Buget</button> */}
            <button  onClick={(e) => addTransaction ('income', e ) }>+ Add Buget</button>
            {/* <button onClick={(e) => addTransaction('expense', e)}>+ Add Expense</button> */}

            {/* <button onClick={(e) => addTransaction('expense', e)}>+ Add Expense</button> */}
        </div>
           </Col> 
              </Row>
            </form>
          </ModalBody>
        {/****************** new  secound modal***************/}
        </Modal>
        <Modal size="lg" isOpen={modalnew} toggle={() => setmodalnew(!modalnew)}>
          <ModalHeader toggle={() => setmodalnew(!modalnew)} >Add Expense</ModalHeader> 
          <ModalBody>
            <form >
              <Row >
                <Col lg={1200} >
                <label >
            <h3> Name</h3>
          <div className="placeholder-btn">
            <input type="name"  placeholder="Expenses" value={nameValue} 
             onChange={(e) => setNameValue(e.target.value)} />
            <p className={nameValue? "data": "noData"}> {nameValue? "" : "Name is required"}</p>
          </div>
        </label>
        <label>
          <h3>Amount</h3>
          <div className="placeholder-btn">
            <input type="text" placeholder="Amount"  value={amountValue} 
             onChange={(e) => setAmountValue(e.target.value)}/>
            <p className={amountValue? "data": "noData"}> {amountValue? "" : "Amout is required"}</p>

          </div>
        </label>
        <div className="income-btn">
           {/* <button className="btn mt-3"  onClick={(e)=> setmodal('income',e)}>+ Add Buget</button> */}
            {/* <button className="btn mt-3"   onClick={(e) => addTransaction ('income', e ) }>+ Add Buget</button> */}
            <button onClick={(e) => addTransaction('expense', e)}>+ Add Expense</button>
        </div>
           </Col> 
              </Row>
            </form>
          </ModalBody>
        </Modal>
        </from>

        {/************************ End Modal modal*********************/}
        {/****************** button menu ***************/}

        <form>
        <div className="fist-btn">
            <input  type="text "placeholder="search"/>
          <button>All Expenses</button>
          <button><LocalPizzaIcon />Food And Drink </button>
          <button><ShoppingBagIcon/> Grocery </button>
          <button><LocalHospitalIcon/> Health </button>
        </div>
         </form>

         <div className="iincome-btn">
<button className="btn mt-3"  onClick={() => setmodal(true)}>+Add Buget</button>
<button className="btn mt-3" onClick={() =>setmodalnew(true)}>+ Add Expense</button>
</div>

</div>
      </div>
    <div/>
    
    </>
  );
}

export default TransactionForm;
 