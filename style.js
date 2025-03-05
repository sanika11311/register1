function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const aadhar = document.getElementById('aadhar').value.trim();
    const panCard = document.getElementById('panCard').value.trim();
    const dob = document.getElementById('dob').value.trim();

    const subject1 = document.getElementById('subject1').value;
    const subject2 = document.getElementById('subject2').value;
    const subject3 = document.getElementById('subject3').value;
    const subject4 = document.getElementById('subject4').value;
    const subject5 = document.getElementById('subject5').value;
    const subject6 = document.getElementById('subject6').value;

    const nameParts = fullName.split(" ");
    if (nameParts.length < 3) {
        alert("Please enter your full name with First, Middle, and Last name.");
        return false;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    const aadharPattern = /^[0-9]{12}$/;
    if (!aadharPattern.test(aadhar)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }

    const panCardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panCardPattern.test(panCard)) {
        alert("Please enter a valid PAN card number.");
        return false;
    }

    if (!dob) {
        alert("Please select your Date of Birth.");
        return false;
    }

    const marks = [subject1, subject2, subject3, subject4, subject5, subject6];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            alert("Please enter valid marks between 0 and 100 for all subjects.");
            return false;
        }
    }

    const subjectMarks = marks.map(Number);
    subjectMarks.sort((a, b) => b - a);
    const bestFiveMarks = subjectMarks.slice(0, 5);
    const totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);
    const percentage = (totalMarks / 500) * 100;

    const percentageDisplay = document.getElementById('percentageDisplay');
    percentageDisplay.innerHTML = `Best Five Subjects Total: ${totalMarks} / 500<br>Percentage: ${percentage.toFixed(2)}%`;

    return false;
}
