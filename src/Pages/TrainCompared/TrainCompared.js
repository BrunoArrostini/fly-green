import React from 'react'
import { Container, Wrapper, FormWrapper } from "../Compared/compared.styled"
import  Box  from '../../components/Box/Box'
import { Formik, Field, Form } from 'formik';
import { BtnLearn } from '../../Pages/Results/results.styled';
import train from "../../images/train.jpg"
import {WiTrain} from "react-icons/wi"
import {useParams, useNavigate} from 'react-router-dom';
import BarChart from '../../components/Charts/BarChart';

const TrainCompared = () => {
    const param = useParams();
    const Tot = Math.ceil(param.each * 3.37)

    const [isClicked, setIsClicked] = React.useState(false);

    const showButton = () => {
       isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    const navigate = useNavigate();

    const finalRedirect = () => {
      navigate("/final/")
    }
    
  return (
    <Container>
       {!isClicked ? 
       <>
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
          <BtnLearn type="submit" onClick={showButton}>Confirm</BtnLearn> 
          </FormWrapper>
        </Form>
      )}
    </Formik>
        </Wrapper>
        </>
        : <Box title={"Train"} text={"Train emission per passenger is 91g/km"} 
        result={"If you've travelled by train single footprint"} resultTot={`Would have been : ${Tot} Co2 Kg`} func={finalRedirect}  image={train} sub={"Next"}
        chart={<BarChart label1={"Airplane"} label2={"Train"} data1={`${param.each * 0.285}`} data2={param.each * 0.091}/>}/>}
    </Container>
  )
}

export default TrainCompared