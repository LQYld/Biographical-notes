'use client'
import { Slider } from '@douyinfe/semi-ui'
import { useState } from 'react'
import LQYldImageFile1 from '../../public/LQYld-1.jpg'
import LQYldImageFile2 from '../../public/LQYld-2.jpg'
import './index.css'

const pdfList = [LQYldImageFile1, LQYldImageFile2]
export default function Home() {
  const [sliderValue, setSliderValue] = useState(0)
  const sliderOnChange = (value) => setSliderValue(value)
  return (
    <div>
      <div className="header">Biographical Notes</div>
      <div className="slider-box">
        <Slider
          tipFormatter={(v) => `${v}%`}
          getAriaValueText={(v) => `${v}%`}
          onChange={sliderOnChange}
          value={sliderValue}
        />
      </div>
      {pdfList.map((pdf, pdfIndex) => {
        return (
          <div
            className="letter"
            style={{
              width: `${550 + 550 * Number(sliderValue / 100)}px`
            }}
            key={`pdfItem_${pdfIndex}`}
          >
            <img src={pdf.src} />
          </div>
        )
      })}
    </div>
  )
}
