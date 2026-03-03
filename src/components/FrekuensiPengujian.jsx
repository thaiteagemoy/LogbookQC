import { useState } from 'react'

export default function FrekuensiPengujian() {
    const [data, setData] = useState({
        coloristic: '3',
        visco: '',
        sg: '',
        nv: '',
    })

    const update = (key, val) => setData(prev => ({ ...prev, [key]: val }))

    return (
        <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#1a202c', marginBottom: 16 }}>
                Frekuensi Pengujian
            </h2>
            <div className="frekuensi-grid">
                <div className="freq-row">
                    <div className="freq-label">Frekuensi Uji Coloristic</div>
                    <div className="freq-value">
                        <input
                            className="form-input"
                            type="number"
                            value={data.coloristic}
                            onChange={(e) => update('coloristic', e.target.value)}
                        />
                    </div>
                </div>
                <div className="freq-row">
                    <div className="freq-label">Frekuensi Uji Visco</div>
                    <div className="freq-value">
                        <input
                            className="form-input"
                            type="number"
                            value={data.visco}
                            onChange={(e) => update('visco', e.target.value)}
                        />
                    </div>
                </div>
                <div className="freq-row">
                    <div className="freq-label">Frekuensi Uji SG</div>
                    <div className="freq-value">
                        <input
                            className="form-input"
                            type="number"
                            value={data.sg}
                            onChange={(e) => update('sg', e.target.value)}
                        />
                    </div>
                </div>
                <div className="freq-row">
                    <div className="freq-label">Frekuensi Uji NV</div>
                    <div className="freq-value">
                        <input
                            className="form-input"
                            type="number"
                            value={data.nv}
                            onChange={(e) => update('nv', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
