import { useState, useCallback } from 'react'

// All 40 categories from the screenshots (in pairs left-right)
const CATEGORIES = [
    // left column, right column pairs
    { id: 'colouristic_da', label: 'Colouristic, Da' },
    { id: 'colouristic_da2', label: 'Colouristic, Da (2)' },
    { id: 'colouristic_db', label: 'Colouristic, Db' },
    { id: 'colouristic_db2', label: 'Colouristic, Db (2)' },
    { id: 'colouristic_dc', label: 'Colouristic, DC' },
    { id: 'colouristic_dc2', label: 'Colouristic, DC (2)' },
    { id: 'colouristic_de', label: 'Colouristic, DE' },
    { id: 'colouristic_de2', label: 'Colouristic, DE (2)' },
    { id: 'colouristic_dh', label: 'Colouristic, Dh' },
    { id: 'colouristic_dh2', label: 'Colouristic, Dh (2)' },
    { id: 'colouristic_dl', label: 'Colouristic, DL' },
    { id: 'colouristic_dl2', label: 'Colouristic, DL (2)' },
    { id: 'colouristic_wi', label: 'Colouristic, WI' },
    { id: 'contrast_ratio', label: 'Contrast Ratio_%' },
    { id: 'contrast_ratio_min', label: 'Contrast Ratio_% Min' },
    { id: 'fineness_hegman', label: 'Fineness_Hegman' },
    { id: 'fineness_hegman_min', label: 'Fineness_Hegman min' },
    { id: 'gloss_60_max', label: 'Gloss 60 max' },
    { id: 'gloss_60_min', label: 'Gloss 60 min' },
    { id: 'gloss_60_range', label: 'Gloss 60 range' },
    { id: 'gloss_85_max', label: 'Gloss 85 max' },
    { id: 'gloss_85_range', label: 'Gloss 85 range' },
    { id: 'ph_left', label: 'pH' },
    { id: 'ph_right', label: 'pH' },
    { id: 'selisih_sg', label: 'Selisih SG Water Bases Atas Bawah' },
    { id: 'selisih_visc_cp', label: 'Selisih Viscosity Sampling Atas & Bawah (cP)' },
    { id: 'selisih_visc_ku', label: 'Selisih Viscosity Sampling Atas & Bawah (KU)' },
    { id: 'selisih_visc_poise', label: 'Selisih Viscosity Sampling Atas & Bawah (Poise)' },
    { id: 'sg_water', label: 'Specific Gravity Water-Based_g/ml' },
    { id: 'tinting_bm', label: 'Tinting Strength BM_%' },
    { id: 'tinting_bo', label: 'Tinting Strength BO_%' },
    { id: 'tinting_gk', label: 'Tinting Strength GK_%' },
    { id: 'tinting_re', label: 'Tinting Strength RE_%' },
    { id: 'tinting_rv', label: 'Tinting Strength RV_%' },
    { id: 'visc_cp_brookfield', label: 'Viscosity_cPs_Brookfield RVT_(30oC)' },
    { id: 'visc_kreb_25', label: 'Viscosity_Kreb Unit (25oC)' },
    { id: 'visc_kreb_30', label: 'Viscosity_Kreb Unit (30oC)' },
    { id: 'visc_rion', label: 'Viscosity_Rion' },
    { id: 'visc_poise_brookfield', label: 'Viscosity_Poise_Brookfield RVT_(30oC)' },
    { id: 'non_volatile', label: 'Non Volatile Matter_%' },
]

// Build initial state: each category has an array of input values
function buildInitialInputs() {
    const state = {}
    CATEGORIES.forEach(cat => {
        state[cat.id] = ['']
    })
    return state
}

function MultiInput({ values, onChange }) {
    const addInput = () => {
        onChange([...values, ''])
    }

    const removeInput = (idx) => {
        if (values.length === 1) return
        const next = values.filter((_, i) => i !== idx)
        onChange(next)
    }

    const updateInput = (idx, val) => {
        const next = [...values]
        next[idx] = val
        onChange(next)
    }

    // Always show as horizontal scrollable row
    const manyInputs = true

    if (manyInputs) {
        return (
            <div className="multi-input-row">
                <div className="multi-input-btn-col">
                    <button className="input-control-btn" onClick={addInput} title="Tambah input">+</button>
                    <button
                        className="input-control-btn delete"
                        onClick={() => removeInput(values.length - 1)}
                        title="Hapus input terakhir"
                        disabled={values.length <= 1}
                    >−</button>
                </div>
                <div className="multi-input-scroll">
                    <div className="multi-input-table">
                        {values.map((val, idx) => (
                            <div className="multi-input-cell" key={idx}>
                                <div className="multi-input-num">{idx + 1}</div>
                                <input
                                    type="number"
                                    step="any"
                                    value={val}
                                    onChange={(e) => updateInput(idx, e.target.value)}
                                    placeholder="0.000"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', gap: 5, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
                <button className="input-control-btn" onClick={addInput} title="Tambah input">+</button>
                {values.length > 1 && (
                    <button
                        className="input-control-btn delete"
                        onClick={() => removeInput(values.length - 1)}
                        title="Hapus input terakhir"
                    >−</button>
                )}
            </div>
            <div className="multi-input-col">
                {values.map((val, idx) => (
                    <input
                        key={idx}
                        type="number"
                        step="any"
                        value={val}
                        onChange={(e) => updateInput(idx, e.target.value)}
                        placeholder="0.000"
                    />
                ))}
            </div>
        </div>
    )
}

export default function HasilPengujian() {
    const [inputs, setInputs] = useState(buildInitialInputs)

    const handleChange = useCallback((id, values) => {
        setInputs(prev => ({ ...prev, [id]: values }))
    }, [])

    // Group into pairs for 2-column grid
    const pairs = []
    for (let i = 0; i < CATEGORIES.length; i += 2) {
        pairs.push([CATEGORIES[i], CATEGORIES[i + 1]])
    }

    return (
        <div>
            <h2 className="hp-section-title">Pengujian Tinting Base (WB)</h2>
            <div className="hp-grid">
                {CATEGORIES.map((cat, index) => (
                    <div
                        className={`hp-item ${index % 2 === 0 ? 'hp-item-left' : 'hp-item-right'}`}
                        key={cat.id}
                    >
                        <div className="hp-item-label">{cat.label}</div>
                        <MultiInput
                            values={inputs[cat.id]}
                            onChange={(vals) => handleChange(cat.id, vals)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
