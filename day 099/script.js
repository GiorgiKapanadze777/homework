// script.js
document.getElementById('mortgage-type-btn').addEventListener('click', function() {
    const btn = document.getElementById('mortgage-type-btn');
    const currentType = btn.innerText;

    if (currentType === 'Repayment') {
        btn.innerText = 'Interest Only';
        document.getElementById('mortgage-type').value = 'interest-only';
        btn.setAttribute('aria-pressed', 'false');
    } else {
        btn.innerText = 'Repayment';
        document.getElementById('mortgage-type').value = 'repayment';
        btn.setAttribute('aria-pressed', 'true');
    }

    btn.classList.toggle('active');
});

document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseInt(document.getElementById('loan-term').value);
    const mortgageType = document.getElementById('mortgage-type').value;

    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTerm * 12;

    let monthlyRepayment;

    if (mortgageType === 'repayment') {
        monthlyRepayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
        monthlyRepayment = loanAmount * monthlyInterestRate;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results:</h2>
        <p>Monthly Repayment: £${monthlyRepayment.toFixed(2)}</p>
        <p>Total Repayment: £${(monthlyRepayment * numberOfPayments).toFixed(2)}</p>
        <p>Total Interest Paid: £${((monthlyRepayment * numberOfPayments) - loanAmount).toFixed(2)}</p>
    `;
});

document.getElementById('clear-all').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mortgage-form').reset();
    document.getElementById('results').innerHTML = `
        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1719491657/Challenges/c6ycrrkeluyeo3dg2qeq.jpg" alt="Results illustration">
        <h2>Results shown here</h2>
        <p>Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.</p>
    `;
    const btn = document.getElementById('mortgage-type-btn');
    btn.innerText = 'Repayment';
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    document.getElementById('mortgage-type').value = 'repayment';
});
