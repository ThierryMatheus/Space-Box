	const cadastro = document.querySelector(".cadastro")
		const jogar = document.querySelector(".jogar")


		jogar.addEventListener("click", event => {
			event.preventDefault()
			jogar.classList.add("hidden")
			jogar.style.display = "none"

		})


		jogar.addEventListener("click", event => {
			event.preventDefault()
			cadastro.classList.add("show")

		})