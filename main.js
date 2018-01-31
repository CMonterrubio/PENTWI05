function Calculate(cost, rate,weight, qty)
{
    try
    {
        var temp = (cost * qty);
        var tax = temp * rate;
        document.sampleform.total.value = temp+tax;
        var shippindate = document.getElementById("shipdate");
        console.log(shippindate.value);
    }
    catch(err)
    {
        alert(err.message);
    }
}

function validate()
{
    try
    {
        //remove everything but digits
        document.sampleform.basecost.value= document.getElementById("basecost").value.toString().replace(/[^0-9]/,'');
        document.sampleform.weight.value = document.getElementById("weight").value.toString().replace(/[^0-9]/,'');

        var cost = document.sampleform.basecost.value;
        var rate = document.sampleform.taxrate.value;
        var weight  = document.sampleform.weight.value;
        var qty = document.getElementById("qty").value;
        
        if (isNaN(cost))
        {
            alert("Enter a valid number for Initial cost");
            return;
        }
        else  if (isNaN(rate))
        {
            alert("Enter a valid number for Tax");
            return;
        }
        else if (isNaN(weight))
        {
            alert("Enter a valid number for Weight");
            return;
        }
        Calculate (cost, rate, weight, qty);

    }
    catch(err)
    {
        alert(err.message);
    }
}