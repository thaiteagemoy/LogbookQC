import { useState, useCallback } from 'react'
import HasilPengujian from './HasilPengujian'
import FrekuensiPengujian from './FrekuensiPengujian'

// Auto-filled demo data
const AUTO_DATA = {
    noBatch: 'P.BE-FB28.7C',
    noSpk: 'RPOC-AAP-2602-02992',
    tanggalAccQc: '01/03/2026',
    kategori: 'Tinting Base (WB)',
    laboran: 'MAULANA ZULKIFLI, ARIS ANDARISKA',
    namaSampel: 'AVITEX WIZZ Base A',
    plant: 'Bromo Emulsion',
    noTangki: '80',
    jumlahRework: '1',
}

export default function LogbookForm() {
    const [activeTab, setActiveTab] = useState('hasil')
    const [kategori, setKategori] = useState('Tinting Base (WB)')
    const [laboran, setLaboran] = useState(AUTO_DATA.laboran)
    const [keteranganSampel, setKeteranganSampel] = useState('BYPASS')
    const [keteranganKonsesi, setKeteranganKonsesi] = useState('KONSESI, GLOSS 85 UNDER')
    const [keteranganAnalis, setKeteranganAnalis] = useState('')

    const handleKeteranganSampelChange = (val) => {
        setKeteranganSampel(val)
        if (val === 'ACCEPT') {
            setKeteranganKonsesi('ACC')
        } else {
            setKeteranganKonsesi('')
        }
    }

    const isKonsesiReadonly = keteranganSampel === 'ACCEPT'

    return (
        <div className="form-card">
            {/* Header */}
            <div className="form-card-header">
                <span className="form-card-title">Form Logbook QC</span>
                <div className="form-card-actions">
                    <button className="btn btn-secondary">‹ Back</button>
                    <button className="btn btn-primary">💾 Save</button>
                </div>
            </div>

            {/* Auto-filled fields */}
            <div className="form-row">
                <div className="form-label">No. Batch</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.noBatch} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">No. SPK</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.noSpk} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Tanggal ACC QC</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.tanggalAccQc} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Kategori</div>
                <div className="form-value">
                    <select
                        className="form-select"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                    >
                        <option value="Cat WB">Cat WB</option>
                        <option value="Waterbased">Waterbased</option>
                        <option value="Intermediate (Pasta)">Intermediate (Pasta)</option>
                        <option value="Intermediate (Base)">Intermediate (Base)</option>
                        <option value="Solvent">Solvent</option>
                        <option value="Cat SB">Cat SB</option>
                        <option value="Pasta (SB)">Pasta (SB)</option>
                        <option value="Pasta (WB)">Pasta (WB)</option>
                        <option value="Tinting Base (SB)">Tinting Base (SB)</option>
                        <option value="Tinting Base (WB)">Tinting Base (WB)</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Laboran</div>
                <div className="form-value">
                    <input
                        className="form-input"
                        value={laboran}
                        onChange={(e) => setLaboran(e.target.value)}
                        placeholder="Nama laboran..."
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Nama Sampel</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.namaSampel} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Plant</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.plant} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">No. Tangki</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.noTangki} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-label">Jumlah Rework</div>
                <div className="form-value">
                    <input className="form-input readonly" readOnly value={AUTO_DATA.jumlahRework} />
                </div>
            </div>

            {/* Keterangan Sampel - Dropdown */}
            <div className="form-row">
                <div className="form-label">Keterangan Sampel</div>
                <div className="form-value">
                    <select
                        className="form-select"
                        value={keteranganSampel}
                        onChange={(e) => handleKeteranganSampelChange(e.target.value)}
                    >
                        <option value="ACCEPT">ACCEPT</option>
                        <option value="BYPASS">BYPASS</option>
                        <option value="REJECT">REJECT</option>
                    </select>
                </div>
            </div>

            {/* Keterangan Konsesi - conditional */}
            <div className="form-row">
                <div className="form-label">Keterangan Konsesi</div>
                <div className="form-value">
                    {isKonsesiReadonly ? (
                        <input className="form-input readonly" readOnly value={keteranganKonsesi} />
                    ) : (
                        <input
                            className="form-input"
                            value={keteranganKonsesi}
                            onChange={(e) => setKeteranganKonsesi(e.target.value)}
                            placeholder="Masukkan keterangan konsesi..."
                        />
                    )}
                </div>
            </div>

            {/* Keterangan Analis */}
            <div className="form-row">
                <div className="form-label">Keterangan Analis</div>
                <div className="form-value">
                    <input
                        className="form-input"
                        value={keteranganAnalis}
                        onChange={(e) => setKeteranganAnalis(e.target.value)}
                        placeholder=""
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-wrapper">
                <div className="tabs-bar">
                    <button
                        className={`tab-btn ${activeTab === 'hasil' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hasil')}
                    >
                        Hasil Pengujian
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'frekuensi' ? 'active' : ''}`}
                        onClick={() => setActiveTab('frekuensi')}
                    >
                        Frekuensi Pengujian
                    </button>
                </div>
            </div>

            <div className="tab-content">
                {activeTab === 'hasil' ? <HasilPengujian /> : <FrekuensiPengujian />}
            </div>
        </div>
    )
}
