const form = document.getElementsByTagName("form")[0]
form.addEventListener('submit', function(e) {
    e.preventDefault();
    M.toast({html: "Sending..."})
    Email.send({
        SecureToken: "5c8da76a-6f88-4b01-82f3-b82c73b46e48",
        To : 'christina@insighttree.net',
        From : "InsightT19@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : `Name: ${document.getElementById("first-name").value}<br>Email address: ${document.getElementById("email").value}<br>Message:<br>${document.getElementById("message").value}`
    }).then(() => {
        const modal = M.Modal.getInstance(document.getElementsByClassName("modal")[0]);
        modal.close();
        M.toast({html: "Sent!"})
    });
})