function performSearch() {
  const searchInput = document.getElementById('search').value;
  if (searchInput.trim() === '') {
      alert('Please enter a search term.');
  } else {
      alert('Searching for: ' + searchInput);
  }
}
