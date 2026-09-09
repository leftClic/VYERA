const translations = {
    "en": {
        "nav_catalog": "Catalog",
        "nav_inquiry": "Inquiry",
        "nav_research": "RESEARCH",
        "nav_compounds": "COMPOUNDS",
        "nav_about": "ABOUT",
        "nav_contact": "CONTACT",
        "hero_title_new": "SCIENCE BEYOND<br>THE EXPECTED",
        "hero_subtitle_new": "ADVANCING RESEARCH.<br>EXPANDING POSSIBILITIES.",
        "hero_cta": "EXPLORE CATALOG",
        "hero_top_left_1": "PURITY<br>PRECISION<br>POTENTIAL",
        "hero_top_left_2": "RESEARCH<br>FOR A<br>HEALTHIER<br>TOMORROW",
        "hero_top_right": "MORE<br>THAN<br>PEPTIDES",
        "catalog_title": "Research Compounds",
        "catalog_inquire": "Inquire",
        "inquiry_img_title": "DISCIPLINE<br><br>INNOVATION<br><br>LONGEVITY",
        "inquiry_img_desc": "Committed to the science that improves lives.",
        "form_title": "RESEARCH INQUIRY",
        "form_desc": "Submit your interest. Our team will contact you securely via WhatsApp to process your request.",
        "form_name": "Full Name",
        "form_phone": "Phone Number",
        "form_compound": "Select Compound",
        "form_compound_default": "Select a compound...",
        "form_qty": "Quantity (Vials)",
        "form_submit": "Submit Inquiry",
        "badge_1_title": "ADVANCED SCIENCE",
        "badge_1_desc": "We explore the potential of cutting-edge compounds with the highest quality standards.",
        "badge_2_title": "SCIENTIFIC EVIDENCE",
        "badge_2_desc": "Based on research and data for a reliable and transparent approach.",
        "badge_3_title": "A HEALTHIER TOMORROW",
        "badge_3_desc": "Driving progress in health, performance and longevity.",
        "footer_motto_1": "SCIENCE",
        "footer_motto_2": "HEALTH",
        "footer_motto_3": "LONGEVITY",
        "footer_disclaimer": "All products are strictly for research and laboratory use only. Not for human consumption.",
        "footer_copyright": "© 2026 VYERA Research. All rights reserved."
    },
    "es": {
        "nav_catalog": "Catálogo",
        "nav_inquiry": "Consulta",
        "nav_research": "INVESTIGACIÓN",
        "nav_compounds": "COMPUESTOS",
        "nav_about": "NOSOTROS",
        "nav_contact": "CONTACTO",
        "hero_title_new": "CIENCIA MÁS ALLÁ<br>DE LO ESPERADO",
        "hero_subtitle_new": "AVANZANDO LA INVESTIGACIÓN.<br>EXPANDIENDO POSIBILIDADES.",
        "hero_cta": "EXPLORAR CATÁLOGO",
        "hero_top_left_1": "PUREZA<br>PRECISIÓN<br>POTENCIAL",
        "hero_top_left_2": "INVESTIGACIÓN<br>PARA UN<br>MAÑANA MÁS<br>SALUDABLE",
        "hero_top_right": "MÁS<br>QUE<br>PÉPTIDOS",
        "catalog_title": "Compuestos de Investigación",
        "catalog_inquire": "Consultar",
        "inquiry_img_title": "DISCIPLINA<br><br>INNOVACIÓN<br><br>LONGEVIDAD",
        "inquiry_img_desc": "Comprometidos con la ciencia que mejora vidas.",
        "form_title": "CONSULTA DE INVESTIGACIÓN",
        "form_desc": "Envíe su interés. Nuestro equipo lo contactará de forma segura a través de WhatsApp para procesar su solicitud.",
        "form_name": "Nombre Completo",
        "form_phone": "Número de Teléfono",
        "form_compound": "Seleccione el Compuesto",
        "form_compound_default": "Seleccione un compuesto...",
        "form_qty": "Cantidad (Viales)",
        "form_submit": "Enviar Consulta",
        "badge_1_title": "CIENCIA AVANZADA",
        "badge_1_desc": "Exploramos el potencial de compuestos de vanguardia con los más altos estándares de calidad.",
        "badge_2_title": "EVIDENCIA CIENTÍFICA",
        "badge_2_desc": "Basado en investigaciones y datos para un enfoque confiable y transparente.",
        "badge_3_title": "UN MAÑANA MÁS SALUDABLE",
        "badge_3_desc": "Impulsando el progreso en salud, rendimiento y longevidad.",
        "footer_motto_1": "CIENCIA",
        "footer_motto_2": "SALUD",
        "footer_motto_3": "LONGEVIDAD",
        "footer_disclaimer": "Todos los productos son estrictamente para investigación y uso en laboratorio. No para consumo humano.",
        "footer_copyright": "© 2026 VYERA Research. Todos los derechos reservados."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggle");
    let currentLang = localStorage.getItem("vyera_lang") || "en";
    
    const updateLanguage = (lang) => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                if (translations[lang][key].includes("<br>")) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === "en" ? "ES" : "EN";
        }
        
        localStorage.setItem("vyera_lang", lang);
        document.documentElement.lang = lang;
    };
    
    updateLanguage(currentLang);
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "es" : "en";
            updateLanguage(currentLang);
        });
    }
});