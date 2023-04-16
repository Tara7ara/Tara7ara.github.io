	//Juego de piedra papel y tijeras
	function jugar(eleccionUsuario) {
		const CPUinfo = obtenerEleccionPC();
		const resultado = determinarGanador(eleccionUsuario, CPUinfo);
		mostrarResultado(resultado, eleccionUsuario, CPUinfo);
	}

	function obtenerEleccionPC() {
		const opciones = ['fuego', 'piedra', 'agua', 'aire', 'papel', 'esponja', 'tijera'];
		const indice = Math.floor(Math.random() * 7);
		return opciones[indice];
	}

	function determinarGanador(eleccionUsuario, CPUinfo) {
		if (eleccionUsuario === CPUinfo) {
		return 'empate';
	}
  
	switch (eleccionUsuario) {
		case 'tijera':
			if (CPUinfo === 'aire' || CPUinfo === 'papel' || CPUinfo === 'esponja') {
			return 'ganaste';
		}
		break;
		case 'esponja':
			if (CPUinfo === 'papel' || CPUinfo === 'aire' || CPUinfo === 'agua') {
			return 'ganaste';
		}
		break;
		case 'papel':
			if (CPUinfo === 'aire' || CPUinfo === 'piedra' || CPUinfo === 'agua') {
			return 'ganaste';
		}
		break;
		case 'aire':
			if (CPUinfo === 'fuego' || CPUinfo === 'piedra' || CPUinfo === 'agua') {
			return 'ganaste';
		}
		break;
		case 'fuego':
			if (CPUinfo === 'piedra' || CPUinfo === 'esponja' || CPUinfo === 'tijera') {
			return 'ganaste';
		}
		break;
		case 'piedra':
			if (CPUinfo === 'tijera' || CPUinfo === 'fuego' || CPUinfo === 'esponja') {
			return 'ganaste';
		}
		break;
		case 'agua':
			if (CPUinfo === 'fuego' || CPUinfo === 'piedra' || CPUinfo === 'tijera') {
			return 'ganaste';
		}
		break;
	}

	return 'perdiste';
	}

		function mostrarResultado(resultado, eleccionUsuario, CPUinfo) {
		  const resultadoElem = document.getElementById('resultado');
		  const bodyElem = document.querySelector('body');

		  resultadoElem.textContent = `Elegiste ${eleccionUsuario}, la CPU eligió ${CPUinfo}. Resultado: ${resultado}`;

		  if (resultado === 'ganaste') {
			bodyElem.classList.add('ganaste');
			setTimeout(() => {
			  bodyElem.classList.remove('ganaste');
			}, 1500);
		  } else if (resultado === 'perdiste') {
			bodyElem.classList.add('perdiste');
			setTimeout(() => {
			  bodyElem.classList.remove('perdiste');
			}, 1500);
		  }
		}
	
	//para ocultar las reglas si esta en un telf
	document.addEventListener('DOMContentLoaded', function() {
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	const notas = document.getElementById('notas');

	if (isMobile) {
		notas.classList.add('hide-on-mobile');
	}
	
	//Moviminto rand boton
	const button = document.getElementById('teleport');
	const container = document.getElementById('container');

	button.addEventListener('mouseover', () => {
		const newTop = Math.floor(Math.random() * (container.offsetHeight - button.offsetHeight));
		const newLeft = Math.floor(Math.random() * (container.offsetWidth - button.offsetWidth));
		button.style.top = newTop + 'px';
		button.style.left = newLeft + 'px';
	});
	
	button.addEventListener('click', () => {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	if (randomNumber === 1) {
		alert('No hay nada que ver...');
	} else if (randomNumber === 2) {
		alert('¿Me estabas intentando hackearme?');
	} else {
		alert('QUE HACES TOCANDOMEEEEEEEEEEEEEEEE');
	}
	});
});