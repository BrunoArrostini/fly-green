import React from 'react'
import { Container, Wrapper, FormWrapper } from "../Compared/compared.styled"
import  Box  from '../Box/Box'
import { Formik, Field, Form } from 'formik';
import { BtnLearn } from '../Results/results.styled';
import train from "../../images/train.jpg"
import {WiTrain} from "react-icons/wi"
import { useParams, useNavigate } from 'react-router-dom';

const TrainCompared = () => {

    const param = useParams();
    const navigate = useNavigate();
    const Tot = Math.ceil(param.each * 3.37)

    const [isClicked, setIsClicked] = React.useState(false);

    const showButton = () => {
       isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    const FinalRedirect = () => {
        navigate("/final/")
      }
    
  return (
    <Container>
        <Wrapper>
        <WiTrain style={{fontSize:"50px", marginBottom:"20px"}}/>
        <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
      }}
    >
      {({ values }) => (
        <Form >
          <FormWrapper>
          <div id="my-radio-group">What about train <br/>Could it pollute more?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="yes" required />
              Yes
            </label>
            <label>
              <Field type="radio" name="picked" value="no" required/>
              No
            </label>
          </div>
          {!isClicked ? <BtnLearn type="submit" onClick={showButton}>Confirm</BtnLearn> 
          : <Box title={"Train"} text={"Train emission per passenger is approximately 91g/km"} 
          result={"If you've travelled by train single footprint"} resultTot={`Would have been : ${Tot} Co2 Kg`} image={train} func={FinalRedirect} sub={"Next"}/>}
          </FormWrapper>
          
        </Form>
      )}
    </Formik>
        </Wrapper>
    </Container>
  )
}

export default TrainCompared