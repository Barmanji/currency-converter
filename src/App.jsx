import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <div
      className="relative flex flex-col items-center justify-between min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://w.wallhaven.cc/full/l8/wallhaven-l8x1pr.jpg')`,
      }}
    >
      <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

      <footer className="w-full bg-white/20 backdrop-blur-lg py-4 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ul className="footer-list flex space-x-3 mb-4">
            <li>
              <a
                className="links"
                href="https://github.com/Barmanji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.999%200C3.582%200%200%203.596%200%208.032a8.031%208.031%200%200%200%205.472%207.621c.4.074.546-.174.546-.387%200-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057%201.225.828%201.225.828.714%201.227%201.873.873%202.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969%200-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125%200%200%20.672-.216%202.2.823a7.633%207.633%200%200%201%202.003-.27%207.65%207.65%200%200%201%202.003.271c1.527-1.039%202.198-.823%202.198-.823.436%201.106.162%201.922.08%202.125.513.562.822%201.279.822%202.156%200%203.085-1.87%203.764-3.652%203.963.287.248.543.738.543%201.487%200%201.074-.01%201.94-.01%202.203%200%20.215.144.465.55.386A8.032%208.032%200%200%200%2016%208.032C16%203.596%2012.418%200%207.999%200z%22%2F%3E%3C%2Fsvg%3E"
                  alt="GitHub"
                  className="h-8 w-8 hover:opacity-50 transition-opacity"
                />
              </a>
            </li>

            <li>
              <a
                className="links"
                href="https://twitter.com/ItsBarmanji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22%23000%22%20rx%3D%2260%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M355.904%20100H408.832L293.2%20232.16L429.232%20412H322.72L239.296%20302.928L143.84%20412H90.8805L214.56%20270.64L84.0645%20100H193.28L268.688%20199.696L355.904%20100ZM337.328%20380.32H366.656L177.344%20130.016H145.872L337.328%20380.32Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22%23fff%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                  alt="Twitter"
                  className="h-8 w-8 hover:opacity-50 transition-opacity"
                />
              </a>
            </li>

            <li>
              <a
                className="links"
                href="https://www.linkedin.com/in/ajay-barman-0b37011a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="h-8 w-8 hover:opacity-50 transition-opacity"
                />
              </a>
            </li>
          </ul>
          <p id="footer" className="text-sm text-gray-300">
            © | 2024 | Barmanji
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

