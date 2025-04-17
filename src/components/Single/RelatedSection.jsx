import React, { Fragment } from 'react'
import ProductCards from '../cards'

const RelatedSection = ({ courseSingle }) => {
    return (
        <div className='mt-[30px] '>
            <h2 className='text-[20px]  font-[700] text-[#707070] mb-[20px]'>{courseSingle ? 'دوره های مرتبط' : 'بلاگ های مرتبط'}</h2>
            <div className='flex flex-wrap flex items-center justify-between max-[680px]:justify-center'>
                {courseSingle ? (
                    <Fragment>
                        <ProductCards
                            isCourse={true}
                            title={'عنوان پست'}
                            date={'26 Oct 2024'}
                            author={'محمد حسین حاجیان'}
                            courseCategory={'دسته بندی'}
                            courseLevel={'سطح کورس'}
                            price={'1240000'}
                        />
                        <ProductCards
                            isCourse={true}
                            title={'عنوان پست'}
                            date={'26 Oct 2024'}
                            author={'محمد حسین حاجیان'}
                            courseCategory={'دسته بندی'}
                            courseLevel={'سطح کورس'}
                            price={'1240000'}
                        />
                        <ProductCards
                            isCourse={true}
                            title={'عنوان پست'}
                            date={'26 Oct 2024'}
                            author={'محمد حسین حاجیان'}
                            courseCategory={'دسته بندی'}
                            courseLevel={'سطح کورس'}
                            price={'1240000'}
                        />
                        <ProductCards
                            isCourse={true}
                            title={'عنوان پست'}
                            date={'26 Oct 2024'}
                            author={'محمد حسین حاجیان'}
                            courseCategory={'دسته بندی'}
                            courseLevel={'سطح کورس'}
                            price={'1240000'}
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <ProductCards
                            isBlog={true}
                        />
                        <ProductCards
                            isBlog={true}
                        />
                        <ProductCards
                            isBlog={true}
                        />
                        <ProductCards
                            isBlog={true}
                        />
                    </Fragment>

                )}




            </div>
        </div>
    )
}

export default RelatedSection