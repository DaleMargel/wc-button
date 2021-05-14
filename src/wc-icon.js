let template = document.createElement('template');
template.innerHTML = `
<style>
	:host { display: inline }
	svg {
		width: 1em;
		height: 1em;
		fill: currentColor;
		position: relative; top: 3px;
	}
</style>
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<use href=""></use>
</svg>`;

class WcIcon extends HTMLElement {
	constructor() { super();
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(template.content.cloneNode(true));
	}
	static get observedAttributes() { return ['name'] }
	attributeChangedCallback(name, oldVal, newVal) {
		const use = this.shadowRoot.querySelector('use');
		const path = `./bootstrap-icons.svg#${newVal}`;
		use.setAttribute('href',path);
	}
}
try{ customElements.define("wc-icon",WcIcon) }
catch(NotSupportedError){/* duplicate */}
export { WcIcon }
