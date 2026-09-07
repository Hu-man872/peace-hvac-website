const FIELD_MESSAGES = {
  name: "Enter your name so the team knows who is enquiring.",
  phone: "Enter a phone number the team can use to respond.",
  location: "Enter the project city or location.",
  service: "Choose the closest service requirement.",
  requirement: "Add a short description of the HVAC requirement."
};

export function buildQuoteMessage(values) {
  const lines = [
    "Hello PEACE HVAC Engineers, I would like to request a quote.",
    "",
    `Name: ${values.name.trim()}`,
    `Company: ${values.company.trim() || "Not specified"}`,
    `Phone: ${values.phone.trim()}`,
    `Location: ${values.location.trim()}`,
    `Service: ${values.service.trim()}`,
    `Requirement: ${values.requirement.trim()}`
  ];

  return lines.join("\n");
}

export function buildWhatsAppUrl(number, values) {
  return `https://wa.me/${number}?text=${encodeURIComponent(buildQuoteMessage(values))}`;
}

export function validateQuote(values) {
  const errors = {};
  for (const field of ["name", "phone", "location", "service", "requirement"]) {
    if (!values[field]?.trim()) errors[field] = FIELD_MESSAGES[field];
  }

  if (values.phone?.trim() && !/^[+()\d\s-]{8,20}$/.test(values.phone.trim())) {
    errors.phone = "Use a valid phone number with digits and an optional country code.";
  }

  return errors;
}

export function initQuoteForm() {
  const form = document.querySelector("[data-quote-form]");
  if (!(form instanceof HTMLFormElement)) return;

  const status = form.querySelector("[data-form-status]");
  const number = form.dataset.whatsappNumber;
  const requestedService = new URLSearchParams(window.location.search).get("service");
  const serviceSelect = form.elements.namedItem("service");

  if (serviceSelect instanceof HTMLSelectElement && requestedService) {
    const isKnownService = Array.from(serviceSelect.options).some(
      (option) => option.value === requestedService
    );
    if (isKnownService) serviceSelect.value = requestedService;
  }

  const clearErrors = () => {
    form.querySelectorAll("[aria-invalid='true']").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll("[data-error-for]").forEach((node) => {
      node.textContent = "";
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const errors = validateQuote(values);

    if (Object.keys(errors).length > 0) {
      for (const [fieldName, message] of Object.entries(errors)) {
        const field = form.elements.namedItem(fieldName);
        if (field instanceof HTMLElement) field.setAttribute("aria-invalid", "true");
        const error = form.querySelector(`[data-error-for="${fieldName}"]`);
        if (error) error.textContent = message;
      }
      const firstInvalid = form.querySelector("[aria-invalid='true']");
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      if (status) status.textContent = "Check the highlighted fields and try again.";
      return;
    }

    if (!number) {
      if (status) status.textContent = "WhatsApp is unavailable. Please call or email the PEACE team.";
      return;
    }

    if (status) status.textContent = "Your enquiry is ready. WhatsApp will open in a new tab.";
    window.open(buildWhatsAppUrl(number, values), "_blank", "noopener,noreferrer");
  });
}
