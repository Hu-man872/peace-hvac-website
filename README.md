# PEACE HVAC Engineers website

A fast, static company website built from the supplied 2026 company profile. It presents PEACE HVAC Engineers as an end-to-end HVAC engineering, execution and maintenance partner without inventing projects, figures or technical claims.

## Pages

- Home: capability overview, services, project lifecycle, safety and regional presence
- Services: air-conditioning projects, ductwork, copper piping and maintenance
- Projects: sectors, supplied client-experience evidence and installation imagery
- About: mission, safety policy, regional presence and supplier relationships
- Contact: direct contact details and a validated WhatsApp quote handoff

## Run locally

```powershell
pnpm install
pnpm dev
```

Open `http://127.0.0.1:4321`.

## Production checks

```powershell
pnpm check
pnpm test
pnpm build
pnpm preview
```

The deployable static output is generated in `dist/`.

## Configure the public URL

Copy `.env.example` to `.env` and replace the example origin with the final website domain. This enables canonical URLs and absolute social-sharing imagery during the build.

## Verify before public deployment

- Confirm which domain PEACE will use; the supplied profile contains conflicting website addresses.
- Confirm the current ISO 9001:2015 certification status before adding any certification claim or certificate image to the public pages.
- Confirm permission to publish the supplied client and supplier reference panels.
- Reconfirm every phone number and email address. One malformed nine-digit mobile number from the profile was intentionally omitted.
- Replace compressed website or brochure images with original, high-resolution project photography when available.
- Add any legally required privacy wording if the contact workflow changes from a WhatsApp handoff to stored form submissions.

## Implementation notes

- Astro static output; no server or database is required.
- Local font files are bundled with the build.
- The quote form validates input in the browser and prepares a WhatsApp message. It does not claim that an enquiry has been stored or sent by a backend.
- Displayed business facts come from the user-supplied company profile. Visual assets come from that profile and PEACE's previous public website; their source is recorded alongside the local files.
