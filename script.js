function runCode() {
    const code = document.getElementById('codeEditor').value;
    try {
      const result = eval(code);
      document.getElementById('output').innerText = result;
    } catch (error) {
      document.getElementById('output').innerText = `Error: ${error.message}`;
    }
  }
  
  document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;
  
    const commentList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.innerText = `${userName}: ${userComment}`;
    commentList.appendChild(newComment);
  
    // Clear the form
    document.getElementById('userName').value = '';
    document.getElementById('userComment').value = '';
  });
  