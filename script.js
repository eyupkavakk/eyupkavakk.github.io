const form = document.getElementById('form');
const result = document.getElementById('result');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitBtn.classList.add('loading');
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        submitBtn.classList.remove('loading');
        if (data.success) {
            form.reset();
            result.innerHTML = "Mesajınız başarıyla gönderildi!";
            result.style.display = "block";
            result.style.color = "green";
        } else {
            result.innerHTML = "Bir hata oluştu. Lütfen tekrar deneyin.";
            result.style.display = "block";
            result.style.color = "red";
        }
        
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    })
    .catch(error => {
        submitBtn.classList.remove('loading');
        result.innerHTML = "Bir hata oluştu. Lütfen tekrar deneyin.";
        result.style.display = "block";
        result.style.color = "red";
    });
}); 