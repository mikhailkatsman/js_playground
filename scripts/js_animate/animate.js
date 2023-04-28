const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
	newspaper.animate(
        [
            { transform: "rotate(0) scale(1)" },
            { transform: "rotate(360deg) scale(0)" }, 
        ], 
        {
            duration: 2000,
	        iterations: 1,
        }
    );
});
