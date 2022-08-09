function ChangeDisplyBox(id, secid) {
    const input = document.getElementById('input');
    if (input.value.length == 10) {
        const OtpPage = document.getElementById('otp-container');
        const DisplayPage = document.getElementById('inputNo');
        const DisplayOtp = OtpPage.innerHTML;
        DisplayPage.innerHTML = DisplayOtp;
    } else {
        alert("Enter the phone number");
    }

}
