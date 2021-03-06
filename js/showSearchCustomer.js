/*
 * @Description: get string as customer name or address or contact person name and the option of search, search in database and return list of customer
 * @input: none
 * @return: array *
 *
 * */

function showSearchCustomer() {
    //get the value of the search input by ID
    var searchValue = document.getElementById("inputSearchCustomer").value;
    //get the option of the search input by ID
    var searchOption = document.getElementById("optionSearchCustomer").value;
    //check if the string is empty
    if (searchValue == "") {
        //alert user to input a text
        alert("Please input text!");
        //document.getElementById("tableSearchCustomer").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //once the page is load, display the list of customer to element id = tableSearchCustomer
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("tableResultSearchCustomer").innerHTML = xmlhttp.responseText;
            }
        };

        //open file to run the search based on the params in url
        xmlhttp.open("GET","/php/searchCustomer.php?search="+searchValue+"&option="+searchOption,true);
        //send the request to server
        xmlhttp.send();
    }
}