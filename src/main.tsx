import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DataContextProvider from "./state/data-context";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DataContextProvider>
            <ChakraProvider>
            <App/>
            </ChakraProvider>
        </DataContextProvider>
    </React.StrictMode>,
)
