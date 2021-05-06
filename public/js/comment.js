const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();
  
    if (comment_text) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  };
    
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);