$(document).ready( (e)=>{
   $(".clickEvent").on('click', (e)=>{
       console.log(e);
       let itemName = $(e.currentTarget).attr("data-item");
       alert("you bought: " + itemName);
   })
});
