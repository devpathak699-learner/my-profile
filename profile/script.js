document.addEventListener('DOMContentLoaded', () => {
    const signatureCanvas = document.getElementById('signatureCanvas');
    if (signatureCanvas) {
        const ctx = signatureCanvas.getContext('2d');
        let drawing = false;

        signatureCanvas.addEventListener('mousedown', () => drawing = true);
        signatureCanvas.addEventListener('mouseup', () => {
            drawing = false;
            ctx.beginPath();
        });
        signatureCanvas.addEventListener('mousemove', draw);

        function draw(event) {
            if (!drawing) return;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#2c3e50';

            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
        }
    }

    const showQualBtn = document.getElementById('showQualBtn');
    const qualDetails = document.getElementById('qualDetails');

    if (showQualBtn) {
        showQualBtn.addEventListener('click', () => {
            if (qualDetails.style.display === 'none') {
                qualDetails.style.display = 'block';
                showQualBtn.textContent = 'Hide Qualification';
            } else {
                qualDetails.style.display = 'none';
                showQualBtn.textContent = 'Show Qualification';
            }
        });
    }

    const showCertBtn = document.getElementById('showCertBtn');
    const certDetails = document.getElementById('certDetails');

    if (showCertBtn) {
        showCertBtn.addEventListener('click', () => {
            if (certDetails.style.display === 'none') {
                certDetails.style.display = 'block';
                showCertBtn.textContent = 'Hide Certificates';
            } else {
                certDetails.style.display = 'none';
                showCertBtn.textContent = 'Show Certificates';
            }
        });
    }

    // GSAP Animations
    gsap.from('header', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.profile-img', { duration: 1.5, scale: 0.5, opacity: 0, ease: 'elastic' });
    gsap.from('h1', { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from('h2', { duration: 1, x: 100, opacity: 0, delay: 0.5 });
    gsap.from('.section', { duration: 1, y: 50, opacity: 0, stagger: 0.3, delay: 1 });
});
