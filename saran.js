function kirimSaran(event) {
    event.preventDefault();

    const inputNama = document.getElementById('namaPengunjung');
    const inputPesan = document.getElementById('pesanPengunjung');
    const containerPesan = document.getElementById('daftarPesan');

    const sekarang = new Date();
    const waktuString = sekarang.toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const cardPesan = document.createElement('div');
    cardPesan.className = "bg-white p-4 rounded border border-stone-300 shadow-sm";
    
    cardPesan.innerHTML = `
        <div class="flex justify-between items-center text-xs text-stone-500 font-mono mb-1">
            <span class="font-bold text-slate-900">${escapeHtml(inputNama.value)}</span>
            <span>${waktuString}</span>
        </div>
        <p class="text-xs text-stone-700">${escapeHtml(inputPesan.value)}</p>
    `;

    containerPesan.prepend(cardPesan);

    inputNama.value = '';
    inputPesan.value = '';
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}