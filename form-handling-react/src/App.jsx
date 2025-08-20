import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  const [activeForm, setActiveForm] = useState('controlled')

  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Form Handling in React</h1>
        <p>Demonstrating Controlled Components vs Formik Implementation</p>
        
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setActiveForm('controlled')}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeForm === 'controlled' ? '#007bff' : '#f8f9fa',
              color: activeForm === 'controlled' ? 'white' : 'black',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Controlled Components
          </button>
          <button
            onClick={() => setActiveForm('formik')}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeForm === 'formik' ? '#28a745' : '#f8f9fa',
              color: activeForm === 'formik' ? 'white' : 'black',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Formik Implementation
          </button>
        </div>
      </header>

      <main>
        {activeForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>
          Switch between implementations to see the difference between 
          manual controlled components and Formik with Yup validation.
        </p>
      </footer>
    </div>
  )
}

export default App
