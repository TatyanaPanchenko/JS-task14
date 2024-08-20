const postsList = document.querySelector(".posts-list");
const renderPosts = (element) => {
  const newItemTitle = element.title[0].toUpperCase() + element.title.slice(1);
  const list = document.createElement("div");
  list.classList.add("card");
  list.innerHTML = `
<input type="checkbox">
  <div class="card-inner"><h2>Post ${element.id}</h2>
    <div>${newItemTitle}</div></div>
<button class="delete">Delete</button>
`;
  postsList.appendChild(list);
};
const posts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((item) => {
      renderPosts(item);
    });
  });

postsList.addEventListener("click", (event) => {
  if (event.target.parentElement.matches(".card")) {
    event.target.parentElement.classList.toggle("checked");
  }
  const checkedElements = document.querySelectorAll(".checked");
  if (event.target.matches(".delete")) {
    event.target.parentElement.remove();
    checkedElements.forEach((item) => item.remove());
  }
});
