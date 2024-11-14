function sendRequest() {
    const data = { username: 'northboat' }; // 这里可以是你想要发送的数据

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
            alert('Response from server: ' + data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function logout(){
    fetch('/logout', {
        method: 'POST',
        credentials: 'same-origin'  // 保证发送请求时包括身份验证信息
    })
        .then(response => {
            if (response.ok) {
                // 执行注销后跳转或其他操作
            }
        })
        .catch(error => console.error('Logout failed:', error));
}