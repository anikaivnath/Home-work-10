const btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => {
    btn.classList.add("hovered");
    btn.style.backgroundColor="rgb(253, 166, 181)";
    
    
});

btn.addEventListener("mouseout", () => {
    btn.classList.remove("hovered");
    btn.style.backgroundColor="rgb(152, 166, 190)";
});
