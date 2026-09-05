/**
 * VYERA Research - Phase 1 Frontend Logic
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
    const peptideSelect = document.getElementById('peptide');
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
                
                // Visual feedback: focus the select element momentarily (optional polish)
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
     * 3. Form Submission Handling (Phase 1 Stub)
     * Validates and prevents default submission until Phase 2 API is ready.
     */
    const interestForm = document.getElementById('interest-form');
    
    if (interestForm) {
        interestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather values for logging (proving logic works for Phase 2)
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                peptide: document.getElementById('peptide').value,
                quantity: document.getElementById('quantity').value
            };
            
            console.log('Phase 1 - Form Intercepted:', formData);
            
            // Temporary UI feedback
            const submitBtn = interestForm.querySelector('.submit-button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Processing...';
            submitBtn.style.backgroundColor = '#555';
            submitBtn.style.color = '#fff';
            
            // Simulate processing time
            setTimeout(() => {
                alert(`Thank you, ${formData.name}. Phase 1 execution successful.\nBackend Supabase integration and WhatsApp redirection will be activated in Phase 2.`);
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                interestForm.reset();
            }, 800);
        });
    }
});
