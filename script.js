document.getElementById('sendNotificationBtn1').addEventListener('click', function() {
    sendNotification('https://mockedgateway.onrender.com/completeUc1Notification', 'result1');
});

document.getElementById('sendNotificationBtn2').addEventListener('click', function() {
    sendNotification('https://mockedgateway.onrender.com/completeUc2Notification', 'result2'); // Change to your second API URL
});

function sendNotification(url, resultDivId) {
    const xhr = new XMLHttpRequest();
    const data = {
        ID_ORANGE: 'idorange',
        username: 'DTW Tester'
    };

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const resultDiv = document.getElementById(resultDivId);
            resultDiv.style.display = 'block';
            if (xhr.status === 200) {
                resultDiv.className = 'result success';
                resultDiv.innerHTML = `<p>${JSON.parse(xhr.responseText).message}</p>`;
            } else {
                resultDiv.className = 'result error';
                resultDiv.innerHTML = `<p>Error: ${xhr.status} - ${xhr.statusText}</p>`;
            }
        }
    };

    xhr.send(JSON.stringify(data));
}
