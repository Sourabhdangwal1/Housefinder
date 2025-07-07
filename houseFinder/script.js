document.getElementById("houseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let city = document.getElementById("city").value;
    let location = document.getElementById("location").value;
    let price = document.getElementById("price").value;
    let members = document.getElementById("members").value;
    let contact = document.getElementById("contact").value;

    if (!city || !location || !price || !members || !contact) {
        alert("Please fill in all fields.");
    } else {
        alert("Your request has been submitted!");
    }
});
