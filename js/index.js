document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('click', e => {
		const target = e.target
		const galleryButtons = document.querySelectorAll('.gallery__button')
		const html = document.documentElement

		if (target.closest('.gallery__button')) {
			galleryButtons.forEach(button => button.classList.remove('gallery__button__active'))
			target.classList.add('gallery__button__active')
		}

		if (target.closest('.header__burger')) {
			html.classList.toggle('menu-open')
		}
	})

	document.addEventListener('scroll', () => {
		const header = document.querySelector(".header")
		if(window.scrollY > 200){
			header.classList.add("header__scroled")
		}
		else{
			header.classList.remove("header__scroled")
		}
	})

	Fancybox.bind('[data-fancybox="gallery"]', {
		// Your custom options for a specific gallery
	})

	const mixer = mixitup('.gallery__items')
})


