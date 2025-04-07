function run() {
    let mobilePrice = Number(document.getElementById("mobileprice").value);
    let interest = Number(document.getElementById("intrest").value);
    let installment = Number(document.getElementById("installment").value);

    if (installment < 1 || mobilePrice < 1 || interest < 1) {
        alert("Please fill in all fields with valid values.");
    } else {
        localStorage.setItem("mobilePrice", mobilePrice);
        localStorage.setItem("interest", interest);
        localStorage.setItem("installment", installment);

        let totalCost = mobilePrice + interest;
        localStorage.setItem("totalCost", totalCost);

        let monthlyInstallment = totalCost / installment;
        localStorage.setItem("monthlyInstallment", monthlyInstallment.toFixed(2));

        window.location.href = "./result.html";
    }
}

function loadResult() {
    if (localStorage.getItem("mobilePrice")) {
        document.getElementById("mp").innerHTML = `Rs. ${localStorage.getItem("mobilePrice")}`;
        document.getElementById("it").innerHTML = `Rs. ${localStorage.getItem("interest")}`;
        document.getElementById("months").innerHTML = `${localStorage.getItem("installment")} months`;
        document.getElementById("tc").innerHTML = `Rs. ${localStorage.getItem("totalCost")}`;
        document.getElementById("mi").innerHTML = `Rs. ${localStorage.getItem("monthlyInstallment")}`;
    }
}

if (window.location.pathname.includes("result.html")) {
    loadResult();
}
