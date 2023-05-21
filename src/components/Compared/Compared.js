import React from 'react'
import { Container, Wrapper, FormWrapper } from './compared.styled'
import  Box  from '../Box/Box'
import { Formik, Field, Form } from 'formik';
import { BtnLearn } from '../Results/results.styled';
import {GiBus} from "react-icons/gi"
import bus from "../../images/bus.jpg.webp"


const Compared = () => {

    const [isClicked, setIsClicked] = React.useState(false);

    const showButton = () => {
       isClicked ? setIsClicked(false) : setIsClicked(true)
    }
    
  return (
    <Container>
        <Wrapper>
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
          : <Box title={"Bus"} icon={<GiBus style={{fontSize:"70px"}}/>} text={"Bus emission are calculated as ? kg per passenger"} 
          result={"Emission with bus would be ? tones Co2" } image={bus} />}
          </FormWrapper>
          
        </Form>
      )}
    </Formik>
        </Wrapper>
    </Container>
  )
}

export default Compared