import React from 'react'
import { Container, Wrapper, FormWrapper } from './compared.styled'
import  Box  from '../../components/Box/Box'
import { Formik, Field, Form } from 'formik';
import { BtnLearn } from '../Results/results.styled';
import {GiBus} from "react-icons/gi"
import bus from "../../images/bus.jpg.webp"
import {useNavigate, useParams, useLocation } from 'react-router-dom';
import BarChart from '../../components/Charts/BarChart';


const Compared = () => {

    const [isClicked, setIsClicked] = React.useState(false);

    const showButton = () => {
       isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    const navigate = useNavigate();
    const param = useParams();
    const location = useLocation();
    

    const each = Math.ceil(`${location.state * 0.027}`)
    const total = Math.ceil(param.pass * each)

    const trainRedirect = () => {
      navigate("/train/" + each)
    }
    
  return (
    <Container>
       {!isClicked ? <>
        <Wrapper>
        <GiBus style={{fontSize:"50px", marginBottom:"20px"}}/>
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
          <div id="my-radio-group">In your opinion, <br/>Could a bus pollute more?</div>
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
          </FormWrapper>
        </Form>
      )}
    </Formik>
        </Wrapper>
        <BtnLearn type="submit" onClick={showButton}>Confirm</BtnLearn> 
        </>
          : <Box title={"Bus"} text={"A bus produces 27gkm Co2 per passenger"} 
          result={`Single passenger trip emmission: ${each} Co2 kg`}
          resultTot={`Total footprint for this trip: ${total} Co2 kg`} image={bus} func={trainRedirect} sub={"Next"} 
          chart={<BarChart label1={"Airplane"} label2={"Bus"} data1={`${location.state * 0.285}`} data2={each}/>}/>}
    </Container>
  )
}

export default Compared