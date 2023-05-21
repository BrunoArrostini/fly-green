import React from 'react'
import { Container, Wrapper, FormWrapper } from './compared.styled'
import  Box  from '../Box/Box'
import { Formik, Field, Form } from 'formik';
import { BtnLearn } from '../Results/results.styled';
import {GiBus} from "react-icons/gi"
import bus from "../../images/bus.jpg.webp"
import {useNavigate, useParams, useLocation } from 'react-router-dom';


const Compared = () => {

    const [isClicked, setIsClicked] = React.useState(false);

    const showButton = () => {
       isClicked ? setIsClicked(false) : setIsClicked(true)
    }

    const navigate = useNavigate();
    const param = useParams();
    const location = useLocation();
    

    const each = `${location.state * 0.027}`
    const total = Math.ceil(param.pass * each)

    const trainRedirect = () => {
      navigate("/train/" + each)
    }
    
  return (
    <Container>
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
          {!isClicked ? <BtnLearn type="submit" onClick={showButton}>Confirm</BtnLearn> 
          : <Box title={"Bus"} text={"A regular bus produces 27g/km Co2 each passenger"} 
          result={`Each passenger pollute ${each} Co2 kg for this trip`}
          resultTot={`Total footprint for indicated passenger is ${total} Co2 kg`} image={bus} func={trainRedirect} sub={"Next"}/>}
          </FormWrapper>
          
        </Form>
      )}
    </Formik>
        </Wrapper>
    </Container>
  )
}

export default Compared