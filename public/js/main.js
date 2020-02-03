const articles = document.getElementById('articles');

if (articles) {
    articles.addEventListener('click', (e) => {
        if (e.target.className === 'btn btn-danger text-white delete-article') {
            if (confirm('Are you Sure?')) {
                const id = e.target.getAttribute('data-id');

                fetch(`/PHP/Symfony/symphart/public/article/delete/${id}`, {
                    method: "DELETE"
                }).then(res => window.location.reload());
            }
        }
    })
}