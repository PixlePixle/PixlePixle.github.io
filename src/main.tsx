import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Loading from './components/Loading.tsx'
import ExamplePage from './ExamplePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loading />
    <ExamplePage />
  </React.StrictMode>,
)
