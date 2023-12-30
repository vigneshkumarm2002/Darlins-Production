fetch('./modules/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    const footerElement = document.getElementById("fetchFooter");
    footerElement.innerHTML = html;
  })
  .catch(error => {
    console.error("Error fetching footer:", error);
  });

