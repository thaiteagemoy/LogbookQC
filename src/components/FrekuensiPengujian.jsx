import { useState, useCallback } from 'react'

const CATEGORIES = [
    { id: 'f_colouristic_da', label: 'Frekuensi Colouristic, Da' },
    { id: 'f_colouristic_da2', label: 'Frekuensi Colouristic, Da (2)' },
    { id: 'f_colouristic_db', label: 'Frekuensi Colouristic, Db' },
    { id: 'f_colouristic_db2', label: 'Frekuensi Colouristic, Db (2)' },
    { id: 'f_colouristic_dc', label: 'Frekuensi Colouristic, DC' },
    { id: 'f_colouristic_dc2', label: 'Frekuensi Colouristic, DC (2)' },
    { id: 'f_colouristic_de', label: 'Frekuensi Colouristic, DE' },
    { id: 'f_colouristic_de2', label: 'Frekuensi Colouristic, DE (2)' },
    { id: 'f_colouristic_dh', label: 'Frekuensi Colouristic, Dh' },
    { id: 'f_colouristic_dh2', label: 'Frekuensi Colouristic, Dh (2)' },
    { id: 'f_colouristic_dl', label: 'Frekuensi Colouristic, DL' },
    { id: 'f_colouristic_dl2', label: 'Frekuensi Colouristic, DL (2)' },
    { id: 'f_colouristic_wi', label: 'Frekuensi Colouristic, WI' },
    { id: 'f_contrast_ratio', label: 'Frekuensi Contrast Ratio_%' },
    { id: 'f_contrast_ratio_min', label: 'Frekuensi Contrast Ratio_% Min' },
    { id: 'f_fineness_hegman', label: 'Frekuensi Fineness_Hegman' },
    { id: 'f_fineness_hegman_min', label: 'Frekuensi Fineness_Hegman min' },
    { id: 'f_gloss_60_max', label: 'Frekuensi Gloss 60 max' },
    { id: 'f_gloss_60_min', label: 'Frekuensi Gloss 60 min' },
    { id: 'f_gloss_60_range', label: 'Frekuensi Gloss 60 range' },
    { id: 'f_gloss_85_max', label: 'Frekuensi Gloss 85 max' },
    { id: 'f_gloss_85_range', label: 'Frekuensi Gloss 85 range' },
    { id: 'f_ph_left', label: 'Frekuensi pH' },
    { id: 'f_ph_right', label: 'Frekuensi pH (2)' },
    { id: 'f_selisih_sg', label: 'Frekuensi Selisih SG Water Bases Atas Bawah' },
    { id: 'f_selisih_visc_cp', label: 'Frekuensi Selisih Viscosity Sampling Atas & Bawah (cP)' },
    { id: 'f_selisih_visc_ku', label: 'Frekuensi Selisih Viscosity Sampling Atas & Bawah (KU)' },
    { id: 'f_selisih_visc_poise', label: 'Frekuensi Selisih Viscosity Sampling Atas & Bawah (Poise)' },
    { id: 'f_sg_water', label: 'Frekuensi Specific Gravity Water-Based_g/ml' },
    { id: 'f_tinting_bm', label: 'Frekuensi Tinting Strength BM_%' },
    { id: 'f_tinting_bo', label: 'Frekuensi Tinting Strength BO_%' },
    { id: 'f_tinting_gk', label: 'Frekuensi Tinting Strength GK_%' },
    { id: 'f_tinting_re', label: 'Frekuensi Tinting Strength RE_%' },
    { id: 'f_tinting_rv', label: 'Frekuensi Tinting Strength RV_%' },
    { id: 'f_visc_cp_brookfield', label: 'Frekuensi Viscosity_cPs_Brookfield RVT_(30oC)' },
    { id: 'f_visc_kreb_25', label: 'Frekuensi Viscosity_Kreb Unit (25oC)' },
    { id: 'f_visc_kreb_30', label: 'Frekuensi Viscosity_Kreb Unit (30oC)' },
    { id: 'f_visc_rion', label: 'Frekuensi Viscosity_Rion' },
    { id: 'f_visc_poise_brookfield', label: 'Frekuensi Viscosity_Poise_Brookfield RVT_(30oC)' },
    { id: 'f_non_volatile', label: 'Frekuensi Non Volatile Matter_%' },
]

function buildInitialInputs() {
    const state = {}
    CATEGORIES.forEach(cat => { state[cat.id] = '' })
    return state
}

export default function FrekuensiPengujian() {
    const [data, setData] = useState(buildInitialInputs)

    const update = useCallback((key, val) => {
        setData(prev => ({ ...prev, [key]: val }))
    }, [])

    return (
        <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#1a202c', marginBottom: 16 }}>
                Frekuensi Pengujian
            </h2>
            <div className="hp-grid">
                {CATEGORIES.map((cat, index) => (
                    <div
                        className={`hp-item ${index % 2 === 0 ? 'hp-item-left' : 'hp-item-right'}`}
                        key={cat.id}
                    >
                        <div className="hp-item-label">{cat.label}</div>
                        <div className="freq-input-wrap">
                            <input
                                className="form-input"
                                type="number"
                                step="any"
                                min="0"
                                value={data[cat.id]}
                                onChange={(e) => update(cat.id, e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
