$(document).ready(()=>{
    $(".icon1").click(()=>{
        $(".text1").toggle();
        
    })
    $(".text1").click(()=>{
        $(".icon1").toggle();
    })
    $(".icon3").click(()=>{
        $(".text3").toggle();
    })






})
$("form#form").submit((e)=>{
    e.preventDefault();
    let userName = $("input#fname").val();
    let userEmail = $("input#email").val();
    let userText = $("input#textarea").val();

   alert(`${userName}, we have received your message. Thank you fro reaching out to us.`)
})
