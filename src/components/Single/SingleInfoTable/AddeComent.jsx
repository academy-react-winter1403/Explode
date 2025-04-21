import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router';

const AddeComent = ({ singleId }) => {
  // alert()
  return (
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 right-0 left-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0"
    >
      <div class="relative mx-auto mt-16 max-h-full w-full max-w-2xl p-4">
        <div class="relative rounded-lg bg-white shadow-sm dark:bg-gray-700">
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5 dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white"></h3>

            <button
              type="button"
              class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                class="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="space-y-4 p-4 md:p-5">
            <Formik
              onSubmit={(e) => console.log(e)}
              initialValues={{ Describe: '', Title: '', CourseId: singleId }}
            >
              <Form>
                <Field name="Title" />
                <Field name="Describe" />
                <button type="submit">submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddeComent;
