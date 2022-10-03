document.querySelectorAll(".row2").forEach(carousel =>{
    const items = carousel.querySelectorAll(".contain");
    const buttonsHtml = Array.from(items,() =>{
       return `<span class="buut"></span>`;
    });
    
    carousel.insertAdjacentHTML("beforeend", `
    <div class="head">
       ${buttonsHtml.join("") }
     </div>
     `);
 
    const buttons = carousel.querySelectorAll(".buut");
    buttons.forEach((button,i) => {
     button.addEventListener("click",() => {
         items.forEach(item =>item.classList.remove("contain--selected"));
         buttons.forEach(button => button.classList.remove("buut--selected"));
     
         items[i].classList.add("contain--selected");
         button.classList.add("buut--selected")
     });
    });
         items[0].classList.add("contain--selected");
         buttons[0].classList.add("buut--selected")
 });