function updateActiveNavLink() {
    const sections = ['about', 'projects', 'certificates', 'final-report', 'aboutme'];
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    // Check which section is currently in view
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            // If section is in viewport (with some offset for better UX)
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });

    // Update active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initSmoothScrolling();
    updateActiveNavLink();

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
});

function typeWriter() {
    const text = "Jason Rey B. Miran";
    const typedTextElement = document.getElementById("typed-text");
    let i = 0;

    function type() {
        if (i < text.length) {
            typedTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust speed here (100ms = fast, 200ms = slower)
        }
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
}

let currentPDFUrl = '';

// PDF Modal functions
function openPDFModal(pdfUrl, title) {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const modalTitle = document.getElementById('pdfModalTitle');

    currentPDFUrl = pdfUrl;
    modalTitle.textContent = title;
    pdfViewer.src = pdfUrl;
    modal.style.display = 'block';

    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closePDFModal() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');

    modal.style.display = 'none';
    pdfViewer.src = ''; // Clear the PDF to stop loading

    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

function downloadPDF() {
    if (currentPDFUrl) {
        const link = document.createElement('a');
        link.href = currentPDFUrl;
        link.download = currentPDFUrl.split('/').pop(); // Get filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Close PDF modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('pdfModal');
    const imageModal = document.getElementById('imageModal');

    if (event.target === modal) {
        closePDFModal();
    } else if (event.target === imageModal) {
        closeModal();
    }
}

// Close modals with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePDFModal();
        closeModal();
    }
});

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', typeWriter);
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/MIRAN_CV_2025.pdf';
    link.download = 'MIRAN_CV_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Modal functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = imageSrc;
    modal.style.display = 'block';

    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';

    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Existing functions...
function typeWriter() {
    const text = "Jason Rey B. Miran";
    const typedTextElement = document.getElementById("typed-text");
    let i = 0;

    function type() {
        if (i < text.length) {
            typedTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1000);
}

document.addEventListener('DOMContentLoaded', typeWriter);

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/MIRAN_CV_2025.pdf';
    link.download = 'MIRAN_CV_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function toggleDescription(button, event) {
    // Prevent the project container click event from firing
    event.stopPropagation();

    const container = button.parentElement;
    const preview = container.querySelector('.description-preview');
    const full = container.querySelector('.description-full');

    if (preview.style.display !== 'none') {
        // Show full description
        preview.style.display = 'none';
        full.style.display = 'inline';
        button.textContent = 'See Less';
    } else {
        // Show preview description
        preview.style.display = 'inline';
        full.style.display = 'none';
        button.textContent = 'See More';
    }
}
// Add this to your existing JavaScript section

// AQMS Modal functions
function openAQMSModal() {
    const modal = document.getElementById('aqmsModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAQMSModal() {
    const modal = document.getElementById('aqmsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadAQMSReport() {
    // Add your AQMS report download functionality here
    const link = document.createElement('a');
    link.href = 'assets/aqms.pdf';
    link.download = 'AQMS-Capstone-Project-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Update the existing window.onclick function to include AQMS modal
window.onclick = function (event) {
    const pdfModal = document.getElementById('pdfModal');
    const imageModal = document.getElementById('imageModal');
    const aqmsModal = document.getElementById('aqmsModal');

    if (event.target === pdfModal) {
        closePDFModal();
    } else if (event.target === imageModal) {
        closeModal();
    } else if (event.target === aqmsModal) {
        closeAQMSModal();
    }
}

// Update the existing keydown event listener
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePDFModal();
        closeModal();
        closeAQMSModal();
    }
});