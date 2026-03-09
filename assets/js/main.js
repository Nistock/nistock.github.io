function toggleOp(id) {
    const el = document.getElementById(id);
    if (el) {
        // Si l'utilisateur clique sur le bouton EXECUTE, on ne veut pas toggle l'accordéon
        // (La navigation vers la page se fera normalement par le lien <a>)
        el.classList.toggle('is-open');
    }
}

// Empêcher la propagation du clic sur le bouton EXECUTE pour éviter de fermer l'accordéon en naviguant
document.addEventListener('DOMContentLoaded', () => {
    const executeButtons = document.querySelectorAll('.btn-execute');
    executeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});