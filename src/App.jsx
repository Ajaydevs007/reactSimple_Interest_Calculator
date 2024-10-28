import { useState } from 'react'
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';




function App() {
  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)



  const [Isinvalidprinciple, setInvalidPrinciple] = useState(false)
  const [IsInvalidinterest, setInvalidInterest] = useState(false)
  const [IsInvalidyear, setInvalidYear] = useState(false)



  const [result, setResult] = useState(0)



  // console.log(principle);


  const validateInput = (tag) => {

    const { name, value } = tag
    console.log(name, value);


    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));


    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

      if (name == 'principle') {
        setPrinciple(value)
      
        
        setInvalidPrinciple(false)
      }
      else if (name == "interest") {
        setInterest(value)
        setInvalidInterest(false)
      }
      else {
        setYear(value)
        setInvalidYear(false)

      }
    }
    else {
      if (name == 'principle') {

        setInvalidPrinciple(true)
      }
      else if (name == 'interest') {
        setInvalidInterest(true)
      }
      else {
        setInvalidYear(true)
      }
    }






  }


  const handleCalculate = (e) => {
    e.preventDefault()
    
    if(interest && principle && year){

      setResult(principle*interest*year/100)



    }
    else{
      alert("Please fill the field")
    }

  }

  const reset=()=>{
    setInterest(0)
    setPrinciple(0)
    setYear(0)
    setResult(0)


    setInvalidPrinciple(false)
    setInvalidInterest(false)
    setInvalidYear(false)
  }





  return (
    <>




      <div style={{ height: "100vh" }} className='d-flex flex-column justify-content-center align-items-center bg-dark'>



        <div className='w-50'>
          <h1 className='my-3 text-white'>Simple Interest Calculator</h1>
          <h5 className='text-white'>Calculate Your Simple Interest Easily </h5>

          <div className='bg-warning p-5 my-5' style={{ color: 'white' }}>
            <h3 className='text-center mt-3'>₹ {result}</h3>
            <h2 className='text-center my-5'>Total Simple Interest</h2>
          </div>




          <form action="">

            <FloatingLabel controlId="floatingInput" label="₹ Principle Amount" className='mb-3' >
              <Form.Control name='principle' value={principle || ""} onChange={(e) => validateInput(e.target)} placeholder="name@example.com" />
            </FloatingLabel>
            {
              Isinvalidprinciple &&

              <p className='text-danger'>Invalid Principle Amount</p>

            }
            <FloatingLabel controlId="floatingPassword" label="Rate">
              <Form.Control placeholder="Password" value={interest || ""} name='interest' onChange={(e) => validateInput(e.target)} />
            </FloatingLabel>

            {
              IsInvalidinterest &&

              <p className='text-danger'>Invalid Interest Rate</p>
            }


            <FloatingLabel controlId="floatingPassword"  label="Time period">
              <Form.Control name='year' placeholder="Password" value={year || ""} className='my-3' onChange={(e) => validateInput(e.target)} />
            </FloatingLabel>

            {
              IsInvalidyear &&

              <p className='text-danger'>Invalid Time Period</p>
            }


            <Stack direction="row" spacing={2}>

              <Button onClick={handleCalculate} disabled={Isinvalidprinciple || IsInvalidinterest || IsInvalidyear} type='submit'>Calculate</Button>
              <Button onClick={reset}>Reset</Button>

            </Stack>

          </form>



        </div>





      </div>




    </>
  )
}

export default App
