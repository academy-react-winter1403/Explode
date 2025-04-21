import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import IconSet from '../shared/IconSet'
import * as yup from 'yup'

const CreateComment = ({ replyStatus, handleOnSubmit, sendLoading }) => {
    const commentValidation = yup.object({
        Title: yup.string().required('عنوان نظر الزامی است'),
        Describe: yup.string().required('متن نظر الزامی است')
    })
    return (
        <div className={`${replyStatus ? 'flex' : 'hidden'}  items-center justify-center w-[100%]`}>
            <div className='rounded-[24px] border-[1px] border-primary p-[10px] w-[60%]'>
                <Formik onSubmit={(values) => handleOnSubmit(values)} initialValues={{ Title: '', Describe: '' }} validationSchema={commentValidation}>
                    <Form className='flex items-center gap-[3px] w-[80%] gap-[10px] w-[100%]'>
                        <button type='submit' className='cursor-pointer w-[40px] h-[40px] rounded-full bg-primary items-center justify-center flex'>{sendLoading ? <FaSpinner className="animate-spin" /> : <IconSet className={'relative top-[2px] right-[1px]'} imageAddress={'/src/assets/icons/sent.svg'} firstSize={20} secondSize={20} />}</button>
                        <div className='cursor-pointer w-[40px] border-[1px] border-[#F1F1F1] h-[40px] rounded-full  items-center justify-center flex'><IconSet imageAddress={'/src/assets/icons/smile.svg'} firstSize={20} secondSize={20} /></div>

                        <div className='flex flex-col w-[80%] gap-[10px]'>
                            <Field name="Title" placeholder='عنوان نظر خود را بنویسید' className='outline-hidden' />
                            <ErrorMessage name='Title' component={'span'} className='text-right text-[red]' />
                            <span className='h-[1px] bg-[#DCDCDC]'></span>
                            <Field name="Describe" placeholder='متن نظر خود را بنویسید' className='outline-hidden' />
                            <ErrorMessage name='Describe' component={'span'} className='text-right text-[red]' />
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default CreateComment