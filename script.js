function submitbutton() {
                    
    const selectedCheckbox = document.querySelector('input[name="socialMedia"]:checked');

  
    const displayInput = document.getElementById('displayInput');
    displayInput.value = selectedCheckbox ? selectedCheckbox.value : '';

   
    if (selectedCheckbox) {
        const link = selectedCheckbox.getAttribute('data-link');
        window.open(link, '_blank');
    }
}
