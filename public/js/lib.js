var select = (function() {

	function addClass(newClass) {
		for (var i = 0; i < this.length; i++) {
			this[i].className += ' ' + newClass;
		}
		return this;
	}

	function removeClass(classToRemove) {
		for (var i = 0; i < this.length; i++) {
			var oldClasses = this[i].className.split(' ');
			var newClasses = [];

			for (var j = 0; j < oldClasses.length; j++) {
				if (oldClasses[j] !== classToRemove) {
					newClasses.push(oldClasses[j]);
				}
			}
			this[i].className = newClasses.join(' ');
		}
		return this;
	}

	function changeText(newContent) {
		for (var i = 0; i < this.length; i++) {
			this[i].textContent = newContent;
		}
		return this;
	}

	function hide() {
		for (var i = 0; i < this.length; i++) {
			this[i].style.display = 'none';
		}
		return this;
	}

	function show(str) {
		if (str) {
			for (var i = 0; i < this.length; i++) {
				this[i].style.display = str;
			}
		}
		else {
			for (var i = 0; i < this.length; i++) {
				this[i].style.display = 'block';
			}
		}
		return this;
	}

	function on(event, foo) {
		for (var i = 0; i < this.length; i++) {
			this[i].addEventListener(event, foo);
		}
		return this;
	}

	function html(newContent) {
		for (var i = 0; i < this.length; i++) {
			this[i].innerHTML = newContent;
		}
		return this;
	}

	function addText(newContent) {
		for (var i = 0; i < this.length; i++) {
			this[i].textContent += newContent;
		}
		return this;
	}

	function select(queryString) {
		var selectedElems = document.querySelectorAll(queryString);
		selectedElems.addClass = addClass;
		selectedElems.removeClass = removeClass;
		selectedElems.changeText = changeText;
		selectedElems.addText = addText;
		selectedElems.html = html;
		selectedElems.on = on;
		selectedElems.show = show;
		selectedElems.hide = hide;

		return (selectedElems);
	}

	return select;
})();
