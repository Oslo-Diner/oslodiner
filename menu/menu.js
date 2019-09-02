
var cta = document.querySelectorAll(".cta");
var backDrop =document.querySelector(".backdrop");
var emailForm =document.querySelector(".modal");
var totalBill;

backDrop.addEventListener("click", ()=>{
    confirm("You are about to close you transaction")
    window.location.reload(true);
})
//to get the cost of each item when you click the oder button
for (var i = 0; i < cta.length; i++) {
    cta[i].addEventListener("click", (foo) => {
      var mainCost = foo.target.value;
      //console.log(mainCost);
      backDrop.style.display = "block";
      emailForm.style.display = "block";
      document.querySelector(".dispaly_bill").innerHTML = "Your bill is: ₦" + mainCost;
      totalBill = mainCost ;
    });

};

//var main = mainCost;
//console.log(mainBillCost);

const API_publicKey = "FLWPUBK_TEST-71e80a403c78fcaa4b53d9768b574a87-X";

function payWithRave() {
    // this line grabs the email from the form so that the user can get an email notication from futterwave
    var customer_emaill = document.querySelector('input[type=email]').value;
    // this line grabs the ammount that the user can charged properlly. 
    var amountToPay = totalBill;
    //This is a REGEX filter to ensure that the email address is valid E.g contains (@ symbol, .something)
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!customer_emaill || !filter.test(customer_emaill)) {
        alert("Please add a valid Email address")
    } else {

        var x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: customer_emaill,
            amount: amountToPay,
            customer_phone: "2348011223344",
            currency: "NGN",
            txref: "oslo-" + Date.now(),
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function () {
                window.location.reload(true);
                // Redirect()
            },
            callback: function (response) {
                var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
                console.log("This is the response returned after a charge", response);
                if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                    alert("Transaction was successful\n Thank You");
                    redirectHome();
                    //document.write("thank you for shopping with us"); // redirect to a success page
                } else {
                    
                    alert("Transaction not successful\n Try Again");
                    window.location.reload(true);
                    // redirect to a failure page.
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        });
    }
}



function redirectHome() {
    window.location.assign("../index.html");
}
