// João Victor Santos Ruas

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    const newComment = commentInput.value;

    if (newComment.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = newComment;
        commentList.appendChild(listItem);
        commentInput.value = "";
    }
}