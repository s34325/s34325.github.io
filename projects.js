// certificate category filter
const tabs = document.querySelectorAll('.cert-tab');
const groups = document.querySelectorAll('.cert-group');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        groups.forEach(group => {
            if (filter === 'all' || group.dataset.group === filter) {
                group.style.display = '';
            } else {
                group.style.display = 'none';
            }
        });
    });
});

// certificate click-to-view modal
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalBadge = document.getElementById('certModalBadge');
const certModalTitle = document.getElementById('certModalTitle');
const certModalDesc = document.getElementById('certModalDesc');
const certModalClose = document.getElementById('certModalClose');
const certModalRelevanceBox = document.getElementById('certModalRelevanceBox');
const certModalRelevance = document.getElementById('certModalRelevance');

document.querySelectorAll('.project-card[data-cat]').forEach(card => {
    card.addEventListener('click', () => {
        certModalImg.src = card.dataset.img;
        certModalImg.alt = card.dataset.title || 'เกียรติบัตร';
        certModalBadge.textContent = card.dataset.badge || '';
        certModalTitle.textContent = card.dataset.title || '';
        certModalDesc.textContent = card.dataset.desc || '';
        if (card.dataset.relevance) {
            certModalRelevance.textContent = card.dataset.relevance;
            certModalRelevanceBox.style.display = '';
        } else {
            certModalRelevanceBox.style.display = 'none';
        }
        certModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

// ปิด Modal เมื่อคลิกปุ่มกากบาท พื้นหลัง หรือกด ESC
function closeCertModal() {
    certModal.classList.remove('open');
    document.body.style.overflow = '';
}
certModalClose.addEventListener('click', closeCertModal);
certModal.addEventListener('click', (e) => {
    if (e.target === certModal) closeCertModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
});
