import React from 'react';
import DynamicForm from './DynamicForm';

const App = ({ formSchema }) => {
    const handleFormSubmit = (formData) => {
        console.log('Form Data:', formData);
    };

    return (
        <div className="container mt-5">
            <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />
        </div>
    );
};

export async function getServerSideProps() {

    const res = await fetch(`${process.env.API_URL}/api/formSchema`)
    const formSchema = await res.json()
    return { props: { formSchema } }
  }

export default App;