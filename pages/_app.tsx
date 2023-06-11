import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/custom.scss'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    return <Component {...pageProps} />
}
