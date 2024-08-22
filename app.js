const items = document.querySelectorAll('.work-list li');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');

items.forEach(item => {
    item.addEventListener('mouseover', function() {
        popupText.textContent = this.getAttribute('data-project');
        popup.style.display = 'block';

        // Add highlight class to the hovered item
        this.classList.add('highlighted');
    });

    item.addEventListener('mouseout', function() {
        popup.style.display = 'none';

        // Remove highlight class from the item
        this.classList.remove('highlighted');
    });
});
