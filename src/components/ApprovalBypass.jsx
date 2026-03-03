import { useState } from 'react'

const SAMPLE_DATA = [
    { id: 1, noBatch: 'P.BS-FB27.2P', noSpk: 'RPOC-AAP-2602-00799', plant: 'Bromo Synthetic', kategori: 'Pasta (SB)', laboran: 'MASRUHIN BAIHAQI', noTangki: 'P24BS', status: '' },
    { id: 2, noBatch: 'P.BE-FB28.10C', noSpk: 'RPOC-AAP-2602-03184', plant: 'Bromo Emulsion', kategori: '', laboran: 'RAMANTO SAPTO DWI PUTRO', noTangki: '38', status: '' },
    { id: 3, noBatch: 'P.TG-FC02.1C', noSpk: 'RPOC-AAP-2602-00013', plant: 'Tengger', kategori: '', laboran: 'DYAH PUSPITA', noTangki: '28', status: '' },
    { id: 4, noBatch: 'P.ME-FB27.4B', noSpk: 'RPOC-AAP-2602-02704', plant: 'Merapi', kategori: '', laboran: 'TEDY EKO BUDIHARSO', noTangki: 'M2', status: '' },
    { id: 5, noBatch: 'P.BE-FC01.1E', noSpk: 'RPOC-AAP-2602-03027', plant: 'Bromo Emulsion', kategori: '', laboran: 'MAULANA ZULKIFLI', noTangki: '49', status: '' },
    { id: 6, noBatch: 'P.BE-FC02.4E', noSpk: 'RPOC-AAP-2602-03032', plant: 'Bromo Emulsion', kategori: '', laboran: 'MAULANA ZULKIFLI', noTangki: '58', status: '' },
    { id: 7, noBatch: 'P.BS-FB27.3P', noSpk: 'RPOC-AAP-2602-02788', plant: 'Bromo Synthetic', kategori: 'Pasta (SB)', laboran: 'MASRUHIN BAIHAQI', noTangki: 'P31BS', status: '' },
    { id: 8, noBatch: 'P.BE-FB28.7C', noSpk: 'RPOC-AAP-2602-02992', plant: 'Bromo Emulsion', kategori: '', laboran: 'MAULANA ZULKIFLI, ARIS ANDARISKA', noTangki: '80', status: '' },
    { id: 9, noBatch: 'P.BE-FC02.10B', noSpk: 'RPOC-AAP-2602-02591', plant: 'Bromo Emulsion', kategori: 'Cat WB', laboran: 'ALFI SYAHRINA', noTangki: '50', status: '' },
    { id: 10, noBatch: 'P.BE-FC01.2A', noSpk: 'RPOC-AAP-2602-03101', plant: 'Bromo Emulsion', kategori: 'Waterbased', laboran: 'ARIS ANDARISKA', noTangki: '62', status: '' },
]

const PLANT_OPTIONS = ['All', 'Bromo Emulsion', 'Bromo Synthetic', 'Tengger', 'Merapi']
const KATEGORI_OPTIONS = ['All', 'Cat WB', 'Waterbased', 'Intermediate (Pasta)', 'Intermediate (Base)', 'Solvent', 'Cat SB', 'Pasta (SB)', 'Pasta (WB)', 'Tinting Base (SB)', 'Tinting Base (WB)']
const LABORAN_OPTIONS = ['All', 'MASRUHIN BAIHAQI', 'RAMANTO SAPTO DWI PUTRO', 'DYAH PUSPITA', 'TEDY EKO BUDIHARSO', 'MAULANA ZULKIFLI', 'ARIS ANDARISKA', 'ALFI SYAHRINA']

export default function ApprovalBypass() {
    const [rows, setRows] = useState(SAMPLE_DATA)
    const [search, setSearch] = useState('')
    const [filterPlant, setFilterPlant] = useState('All')
    const [filterKategori, setFilterKategori] = useState('All')
    const [filterLaboran, setFilterLaboran] = useState('All')

    const handleStatusChange = (id, val) => {
        setRows(prev => prev.map(r => r.id === id ? { ...r, status: val } : r))
    }

    const filtered = rows.filter(r => {
        const q = search.toLowerCase()
        const matchSearch = !q || [r.noBatch, r.noSpk, r.plant, r.kategori, r.laboran, r.noTangki]
            .some(v => v.toLowerCase().includes(q))
        const matchPlant = filterPlant === 'All' || r.plant === filterPlant
        const matchKategori = filterKategori === 'All' || r.kategori === filterKategori
        const matchLaboran = filterLaboran === 'All' || r.laboran === filterLaboran
        return matchSearch && matchPlant && matchKategori && matchLaboran
    })

    return (
        <div className="apv-page">
            <div className="form-card">
                <div className="form-card-header">
                    <span className="form-card-title">List</span>
                    <div className="form-card-actions">
                        <button className="btn btn-secondary">🔄 Reload</button>
                        <button className="btn btn-secondary">📊 Excel</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="apv-filters">
                    <div className="apv-filter-row">
                        <div className="apv-filter-group">
                            <label className="apv-filter-label">Kategori</label>
                            <div className="apv-filter-ctrl">
                                <select className="form-select" value={filterKategori} onChange={e => setFilterKategori(e.target.value)}>
                                    {KATEGORI_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="apv-filter-group">
                            <label className="apv-filter-label">Plant</label>
                            <div className="apv-filter-ctrl">
                                <select className="form-select" value={filterPlant} onChange={e => setFilterPlant(e.target.value)}>
                                    {PLANT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="apv-filter-group">
                            <label className="apv-filter-label">Laboran</label>
                            <div className="apv-filter-ctrl">
                                <select className="form-select" value={filterLaboran} onChange={e => setFilterLaboran(e.target.value)}>
                                    {LABORAN_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table controls */}
                <div className="apv-table-controls">
                    <span className="apv-show-label">Show <strong>{filtered.length}</strong> entries</span>
                    <div className="apv-search">
                        <label>Search:</label>
                        <input
                            className="form-input"
                            style={{ width: 180 }}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Cari..."
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="apv-table-wrap">
                    <table className="apv-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>No Batch</th>
                                <th>No SPK</th>
                                <th>Plant</th>
                                <th>Kategori</th>
                                <th>Laboran</th>
                                <th>No Tangki</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr><td colSpan={8} className="apv-empty">Tidak ada data</td></tr>
                            ) : filtered.map(row => (
                                <tr key={row.id}>
                                    <td className="apv-action-cell">
                                        <button className="apv-view-btn" title="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>{row.noBatch}</td>
                                    <td>{row.noSpk}</td>
                                    <td>{row.plant}</td>
                                    <td>{row.kategori}</td>
                                    <td>{row.laboran}</td>
                                    <td>{row.noTangki}</td>
                                    <td className="apv-status-cell">
                                        <div className="apv-status-btns">
                                            <button
                                                className={`apv-status-btn apv-accept ${row.status === 'ACCEPT' ? 'active' : ''}`}
                                                onClick={() => handleStatusChange(row.id, row.status === 'ACCEPT' ? '' : 'ACCEPT')}
                                            >ACCEPT</button>
                                            <button
                                                className={`apv-status-btn apv-reject ${row.status === 'REJECT' ? 'active' : ''}`}
                                                onClick={() => handleStatusChange(row.id, row.status === 'REJECT' ? '' : 'REJECT')}
                                            >REJECT</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="apv-pagination">
                    <span>Showing 1 to {filtered.length} of {filtered.length} entries</span>
                    <div className="apv-pages">
                        <button className="apv-page-btn" disabled>Previous</button>
                        <button className="apv-page-btn active">1</button>
                        <button className="apv-page-btn" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
