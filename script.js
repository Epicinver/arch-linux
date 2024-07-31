document.getElementById('startButton').addEventListener('click', startInstallation);

function startInstallation() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    const steps = [
        'Downloading Arch Linux...',
        'Creating partitions...',
        'Formatting partitions...',
        'Installing base system...',
        'Configuring system...',
        'Installing bootloader...',
        'Installation complete! Rebooting...'
    ];

    let stepIndex = 0;

    function nextStep() {
        if (stepIndex < steps.length) {
            output.innerHTML += `<p>${steps[stepIndex]}</p>`;
            stepIndex++;
            setTimeout(nextStep, 2000); // Simulate time delay for each step
        }
    }

    nextStep();
}
