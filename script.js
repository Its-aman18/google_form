const form = document.getElementById("applicationForm");
const submitBtn = document.getElementById("submitBtn");

document.querySelector('input[name="_next"]').value = window.location.href;

form.addEventListener("submit", function (e) {
    const teams = document.querySelectorAll(
        'input[name="Teams_Applied"]:checked'
    );

    if (teams.length === 0) {
        e.preventDefault();
        document.getElementById("teamsError").style.display = "block";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting...";
});

document.getElementById("mobile").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
});
