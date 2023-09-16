import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'
const App = () => {
  const [loremText, setLoremText] = useState([])
  const [numberOfPara, setNumberOfPara] = useState(0)
  const handleNumber = (e) => {
    setNumberOfPara(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    numberOfPara !== 0 && setLoremText(data.slice(0, numberOfPara))
  }
  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="number">Paragraphs: </label>
        <input
          type="number"
          name="number"
          id="number"
          max={data.length}
          min={0}
          value={numberOfPara}
          onChange={handleNumber}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {loremText.map((text) => {
          return <p key={nanoid()}>{text}</p>
        })}
      </div>
    </section>
  )
}
export default App
