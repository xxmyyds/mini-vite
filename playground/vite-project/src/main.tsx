import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

const App = () => <div>hello xxmyyd</div>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import.meta.hot?.accept(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
