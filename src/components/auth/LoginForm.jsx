import React from 'react'
import ModalWrapper from '../modals/ModalWrapper'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { ErrorMessage, Field, Formik, useField } from 'formik'
import { closeModal } from '../modals/modalReducer'
import { Form } from 'formik'
import { FormControl } from '@mui/material'
import { TextField } from '@mui/material'
import { Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { signInUser } from './authActions'


const MyTextInput = ({label,...props}) => {
    const [field,meta] = useField(props)

  return (
    <div>
        <label>{label}</label>
        <TextField style={{marginTop:'1rem'}} fullWidth error={meta.touched && !!meta.error} {...field} {...props} />
        {meta.touched && meta.error ? 
        (
            <Alert severity='error'>{meta.error}</Alert>

        ) : null}
    </div>

  )
}



export default function LoginForm() {

   
    

    // const [field,meta]= useField()
    const dispatch = useDispatch()
  return (
   <ModalWrapper 
   header='Sign In to Diary App' >

   <Formik
   initialValues={{email:'',password:''}}
   validationSchema={Yup.object({
       email:Yup.string().required().email(),
       password:Yup.string().required()
   })}
   onSubmit ={(values,{setSubmitting})=>{
    dispatch(signInUser(values))
    setSubmitting(false)
    dispatch(closeModal())
   
      
       
       
   }}
   >
       
      

       {({isSubmitting,isValid,dirty})=>(

        <Form>
            <FormControl sx={{margin:'2rem'}}>

            <MyTextInput name='email'/>
    <MyTextInput name='password' placeholder='Password' type='password' />

                

<LoadingButton label='submit'
    type='submit'
    loading={isSubmitting}

   
   sx={{margin:'1rem 0'}}
    disabled ={!isValid || !dirty || isSubmitting}
    
   
    variant="contained">

       Login </LoadingButton>

                
                
                
                
            </FormControl>

        


        </Form>



       )}

</Formik>
       </ModalWrapper>
  )
}
