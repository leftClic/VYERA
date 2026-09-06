/**
 * VYERA Research - Phase 3 Frontend Logic
 * Strictly Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * 1. Smooth Scrolling for Anchor Links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /**
     * 2. Catalog Inquiry Mapping
     * Connects product card 'Inquire' buttons directly to the form's select element
     */
    const inquiryButtons = document.querySelectorAll('.select-btn');
    const peptideSelect = document.getElementById('productSelect');
    const formSection = document.getElementById('interest-form-section');

    inquiryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedPeptide = e.target.getAttribute('data-peptide');
            
            if (peptideSelect && selectedPeptide) {
                // Find matching option and select it
                for (let i = 0; i < peptideSelect.options.length; i++) {
                    if (peptideSelect.options[i].value === selectedPeptide) {
                        peptideSelect.selectedIndex = i;
                        break;
                    }
                }
                
                // Visual feedback: focus the select element momentarily
                peptideSelect.classList.add('highlight');
                setTimeout(() => peptideSelect.classList.remove('highlight'), 1000);
            }
            
            // Scroll user smoothly down to the form
            if (formSection) {
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /**
     * 3. Form Submission Handling (Phase 3 Integration)
     * Intercepts submit, sends fetch to backend, redirects to WhatsApp
     */
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default page reload
            
            const submitBtn = leadForm.querySelector('.submit-button');
            const originalText = submitBtn.textContent;
            
            // UI Feedback
            submitBtn.textContent = 'Procesando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
            
            // Extract DOM values
            const fullName = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const productSelect = document.getElementById('productSelect').value;
            const quantity = document.getElementById('quantity').value;
            
            const payload = { fullName, phone, productSelect, quantity };
            
            try {
                // Asynchronous POST request to Render backend
                const response = await fetch('https://vyera-backend.onrender.com/api/leads', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                
                if (response.ok) {
                    // Success! Construct WhatsApp URL
                    const waNumber = '50587618158';
                    const rawMessage = `Hola VYERA Research. Soy ${fullName}. Me interesa el compuesto ${productSelect} (${quantity} unidades). Mi número es ${phone}.`;
                    const encodedMessage = encodeURIComponent(rawMessage);
                    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
                    
                    // Redirect to WhatsApp immediately
                    window.location.href = waUrl;
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Network response was not ok.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Ocurrió un error al procesar su solicitud. Por favor, intente de nuevo.');
                
                // Revert UI State
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            }
        });
    }
});
