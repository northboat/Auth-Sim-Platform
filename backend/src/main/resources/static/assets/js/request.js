function sendRequest() {
    const data = { name: 'northboat' }; // 这里可以是你想要发送的数据

    fetch('/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Response from server: ' + data["message"]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}