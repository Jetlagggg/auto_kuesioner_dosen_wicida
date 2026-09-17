function isiKuesioner() {
    console.log("Memulai pengisian otomatis...");
    let countSelect = 0;
    let countText = 0;

    const dropdowns = document.querySelectorAll("select");
    dropdowns.forEach((select) => {
        if (select.options.length > 0) {
            select.selectedIndex = select.options.length - 1;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            countSelect++;
        }
    });

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((area) => {
        area.value = "Penyampaian materi sudah sangat baik dan jelas. Semoga dapat dipertahankan.";
        
        area.dispatchEvent(new Event('input', { bubbles: true }));
        area.dispatchEvent(new Event('change', { bubbles: true }));
        countText++;
    });

    alert(`Selesai Boss!\n- ${countSelect} Dropdown terisi.\n- ${countText} Esai terisi.\n\nCek dulu sebelum klik simpan ya!`);
}

isiKuesioner();