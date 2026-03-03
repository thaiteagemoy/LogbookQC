import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import LogbookForm from './components/LogbookForm'
import ApprovalBypass from './components/ApprovalBypass'

export default function App() {
    const [page, setPage] = useState('logbook')

    const titles = {
        approval: 'Approval SPK Bypass',
        logbook: 'Logbook QC',
    }

    return (
        <div className="app-layout">
            <Sidebar page={page} setPage={setPage} />
            <div className="main-wrapper">
                <Topbar />
                <div className="main-content">
                    <h1 className="page-title">{titles[page]}</h1>
                    {page === 'logbook' && <LogbookForm />}
                    {page === 'approval' && <ApprovalBypass />}
                </div>
                <footer className="app-footer">
                    Copyright © 2026 <a href="#">Avian Brands</a>. All rights reserved.
                </footer>
            </div>
        </div>
    )
}
