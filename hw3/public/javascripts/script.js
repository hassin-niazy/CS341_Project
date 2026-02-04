//This is the javascript code for our App.
//Author: Hassinullah Niazy


eventHandler = function(event){

/* do stuff */

}
$(function(){
    $(".foo").click(eventHandler);
});



            //Events when button clicked
            $("#myButton1").click(function(){
                
                // Variables to store our customer entered values-->
                var noteVegan = $("#notes").val().trim().toLowerCase();
                var note = $("#notes").val();
                var topping = $("input[name='radio']:checked").val();
                var quantity = $("#qty").val();

                if (noteVegan === "vegan"){
                    alert("The cheesecake has dairy.")
                } else {

                    $("#OrderDiv").hide();
                    $("#notes").hide();
                    $("#myButton1").hide();

                    $("#quantity").text("Quantity: " + quantity);
                    $("#topping").text("Topping: " + topping);
                    $("#comment").text("Note: " + note);

                    $("#hiddenDiv").show();   
                }
            });
            
            // For the dropdown hover menu, I used some ChatGPT and some w3schools to find the correct tags.
           // Show dropdown on hover
            $("#currentMonth").hover(
                function() {
                $("#monthDropdown").stop(true, true).slideDown(200);
                },
                function() {

                // Delay hiding so user can move to dropdown
                setTimeout(function() {
                    if (!$("#monthDropdown").is(":hover")) 
                    { $("#monthDropdown").slideUp(200);
                    }

                }, 200);
                }
            );

            // Keep dropdown open if hovering over it
            $("#monthDropdown").hover(
                function() {
                $(this).stop(true, true).show();
                },
                function() {
                $(this).slideUp(200);
                }
            );

            // Click on a month to select it
            $("#monthDropdown div").click(function() {
                var selectedMonth = $(this).text();
                $("#currentMonth").text(selectedMonth);
                $("#monthDropdown").slideUp(200);
            }); 
       