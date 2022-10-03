document.querySelectorAll(".box").forEach(carousel =>{
    const items = carousel.querySelectorAll(".contain1");
    const buttonsHtml = Array.from(items,() =>{
       return `<span class="PC"></span>`;
    });
    
    carousel.insertAdjacentHTML("beforeend", `
    <div class="head">
       ${buttonsHtml.join("") }
     </div>
     `);
 
    const buttons = carousel.querySelectorAll(".PC");
    buttons.forEach((button,i) => {
     button.addEventListener("click",() => {
         items.forEach(item =>item.classList.remove("contain1--selected"));
         buttons.forEach(button => button.classList.remove("PC--selected"));
     
         items[i].classList.add("contain1--selected");
         button.classList.add("PC--selected")
     });
    });
         items[0].classList.add("contain1--selected");
         buttons[0].classList.add("PC--selected")
 });