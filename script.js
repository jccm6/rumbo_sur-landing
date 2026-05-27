/**
 * Rumbo Sur - Landing Page Interactive Script
 * Handles Tab navigation, Mobile menus, and custom WhatsApp redirects.
 */

document.addEventListener("DOMContentLoaded", () => {
	// ==========================================================================
	// MOBILE MENU TOGGLE
	// ==========================================================================
	const menuToggle = document.getElementById("menuToggle");
	const navLinks = document.getElementById("navLinks");

	if (menuToggle && navLinks) {
		menuToggle.addEventListener("click", () => {
			navLinks.classList.toggle("active");

			// Toggle menu icon between burger and close
			const icon = menuToggle.querySelector("i");
			if (icon) {
				if (navLinks.classList.contains("active")) {
					icon.setAttribute("data-lucide", "x");
				} else {
					icon.setAttribute("data-lucide", "menu");
				}
				lucide.createIcons();
			}
		});

		// Close menu when a link is clicked (on mobile)
		navLinks.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", () => {
				navLinks.classList.remove("active");
				const icon = menuToggle.querySelector("i");
				if (icon) {
					icon.setAttribute("data-lucide", "menu");
					lucide.createIcons();
				}
			});
		});
	}

	// ==========================================================================
	// HERO WIDGET TABS
	// ==========================================================================
	const tabCotizarBtn = document.getElementById("tabCotizarBtn");
	const tabRastrearBtn = document.getElementById("tabRastrearBtn");
	const paneCotizar = document.getElementById("paneCotizar");
	const paneRastrear = document.getElementById("paneRastrear");

	if (tabCotizarBtn && tabRastrearBtn && paneCotizar && paneRastrear) {
		// Switch to Cotizar Tab
		tabCotizarBtn.addEventListener("click", () => {
			tabCotizarBtn.classList.add("active");
			tabRastrearBtn.classList.remove("active");
			paneCotizar.classList.add("active");
			paneRastrear.classList.remove("active");
		});

		// Switch to Rastrear Tab
		tabRastrearBtn.addEventListener("click", () => {
			tabRastrearBtn.classList.add("active");
			tabCotizarBtn.classList.remove("active");
			paneRastrear.classList.add("active");
			paneCotizar.classList.remove("active");
		});
	}

	// ==========================================================================
	// WHATSAPP DYNAMIC REDIRECTS
	// ==========================================================================
	// !!! CONFIGURATION: Replace this with Rumbo Sur's real WhatsApp phone number !!!
	const WHATSAPP_PHONE = "56984380640";

	// 1. Calculate Tarifa Button (from Widget)
	const calcTarifaBtn = document.getElementById("calcTarifaBtn");
	const destinationSelect = document.getElementById("destinationSelect");

	if (calcTarifaBtn && destinationSelect) {
		calcTarifaBtn.addEventListener("click", () => {
			const destinationText = destinationSelect.options[destinationSelect.selectedIndex].text;
			const message =
				`¡Hola Rumbo Sur! 🇨🇱✈️🇻🇪 Quisiera realizar una cotización de envío.\n\n` +
				`📍 *Origen:* Santiago de Chile (Zenteno)\n` +
				`📍 *Destino:* ${destinationText}\n\n` +
				`Me gustaría recibir información sobre las tarifas de sus servicios aéreos (Alianza Zoom), marítimos y marítimo express de 30 días, así como coordinar el retiro gratuito a domicilio en Santiago. ¡Muchas gracias!`;

			const encodedMsg = encodeURIComponent(message);
			const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;
			window.open(url, "_blank");
		});
	}

	// 2. Tracking Button (from Widget)
	const rastrearBtn = document.getElementById("rastrearBtn");
	const trackingCodeInput = document.getElementById("trackingCodeInput");

	if (rastrearBtn && trackingCodeInput) {
		rastrearBtn.addEventListener("click", () => {
			const code = trackingCodeInput.value.trim();

			if (!code) {
				alert("Por favor ingresa un código de guía válido (ejemplo: RS-9082).");
				trackingCodeInput.focus();
				return;
			}

			const message =
				`¡Hola Rumbo Sur! 🔎📦 Quisiera consultar el estatus de mi envío.\n\n` +
				`🎫 *Código de Guía:* ${code}\n\n` +
				`Agradezco si me pueden indicar en qué parte del trayecto se encuentra actualmente.`;

			const encodedMsg = encodeURIComponent(message);
			const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;
			window.open(url, "_blank");
		});
	}

	// 3. Main Contact WhatsApp Button (from Contact Card)
	const contactWhatsAppBtn = document.getElementById("contactWhatsAppBtn");

	if (contactWhatsAppBtn) {
		contactWhatsAppBtn.addEventListener("click", (e) => {
			e.preventDefault();
			const message = `¡Hola Rumbo Sur! 👋 Quisiera recibir asesoría personalizada para un envío a Venezuela desde Zenteno, Santiago.`;
			const encodedMsg = encodeURIComponent(message);
			const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;
			window.open(url, "_blank");
		});
	}

	// ==========================================================================
	// SMOOTH SCROLL FOR NAV LINKS
	// ==========================================================================
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			const targetId = this.getAttribute("href");
			if (targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				e.preventDefault();
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});
});
