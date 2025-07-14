fetch('elements/embed.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('embed').innerHTML = data;
    });

fetch('elements/meta.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('meta').innerHTML = data;
    });