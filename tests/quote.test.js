import test from "node:test";
import assert from "node:assert/strict";

import { buildQuoteMessage, buildWhatsAppUrl, validateQuote } from "../src/scripts/quote.js";

const validValues = {
  name: "Anita Rao",
  company: "Acme Facilities",
  phone: "+91 98765 43210",
  location: "Bengaluru",
  service: "HVAC maintenance",
  requirement: "Preventive maintenance for an office VRF system."
};

test("buildQuoteMessage produces a complete structured enquiry", () => {
  const message = buildQuoteMessage(validValues);
  assert.match(message, /Name: Anita Rao/);
  assert.match(message, /Service: HVAC maintenance/);
  assert.match(message, /Requirement: Preventive maintenance/);
});

test("buildWhatsAppUrl safely encodes user-entered content", () => {
  const url = buildWhatsAppUrl("919964838300", { ...validValues, name: "A & B" });
  assert.ok(url.startsWith("https://wa.me/919964838300?text="));
  assert.match(url, /A%20%26%20B/);
});

test("validateQuote reports required fields and malformed phone numbers", () => {
  const missing = validateQuote({ name: "", company: "", phone: "abc", location: "", service: "", requirement: "" });
  assert.deepEqual(Object.keys(missing).sort(), ["location", "name", "phone", "requirement", "service"]);
  assert.match(missing.phone, /valid phone number/);
});

test("validateQuote accepts a complete enquiry", () => {
  assert.deepEqual(validateQuote(validValues), {});
});
