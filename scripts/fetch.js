fetch('./modules/footer.html')
  .then(response => response.text())
  .then(html => {
    const footerElement = document.getElementById("fetchFooter");
    footerElement.innerHTML = html;
  });


