import { useState, useEffect } from 'react';

export default function EMICalculator() {
  const [downPayment, setDownPayment] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const propertyPrice = 26000000; // 2.60 Crore

  useEffect(() => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    if (principal <= 0) return;
    const emiAmount = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const total = emiAmount * months;
    setEmi(Math.round(emiAmount));
    setTotalAmount(Math.round(total));
    setTotalInterest(Math.round(total - principal));
  }, [downPayment, interestRate, tenure]);

  const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="emi-calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">EMI Calculator</h2>
          <p className="text-xl text-gray-600">Plan your home loan with ease</p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Calculate Your EMI</h3>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600">Property Price</p>
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(propertyPrice)}</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold">Down Payment</label>
                  <span className="text-blue-600 font-bold">{formatCurrency(downPayment)}</span>
                </div>
                <input type="range" min="0" max={propertyPrice} step="100000" value={downPayment}
                       onChange={(e) => setDownPayment(Number(e.target.value))}
                       className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold">Interest Rate (p.a.)</label>
                  <span className="text-blue-600 font-bold">{interestRate}%</span>
                </div>
                <input type="range" min="6" max="15" step="0.1" value={interestRate}
                       onChange={(e) => setInterestRate(Number(e.target.value))}
                       className="w-full h-3 bg-gradient-to-r from-green-200 to-green-500 rounded-lg" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold">Loan Tenure</label>
                  <span className="text-blue-600 font-bold">{tenure} Years</span>
                </div>
                <input type="range" min="5" max="30" step="1" value={tenure}
                       onChange={(e) => setTenure(Number(e.target.value))}
                       className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-500 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-xl mb-4">Monthly EMI</h3>
              <div className="text-5xl font-bold">{formatCurrency(emi)}</div>
              <p className="mt-2">per month for {tenure} years</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(propertyPrice - downPayment)}</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
                <p className="text-sm text-gray-600">Interest</p>
                <p className="text-xl font-bold text-orange-600">{formatCurrency(totalInterest)}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
              <p className="text-sm text-gray-600">Total Payment</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalAmount)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}