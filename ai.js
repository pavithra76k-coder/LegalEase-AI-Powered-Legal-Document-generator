function generateLegalDocument() {
    const name = document.getElementById("name").value;
    const type = document.getElementById("documentType").value;
    const details = document.getElementById("details").value;

    if (!name || !details) {
        alert("Please enter your name and document details.");
        return;
    }

    const result = `
LEGAL DOCUMENT
====================

Name: ${name}
Document Type: ${type}

Document Details:
${details}

This document was generated using LegalEase.
Please have a qualified legal professional review it
before using it for legal purposes.
`;

    const output = document.createElement("pre");
    output.textContent = result;
    document.body.appendChild(output);
}
