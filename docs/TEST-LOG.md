# Test Log

## Functional and Responsive Testing

| Test | Input / Condition               | Expected Result                  | Actual Result                  | Status |
|------|---------------------------------|----------------------------------|--------------------------------|--------|
| 1    | Open page at 320px              | Single-column mobile layout      | Single-column layout displayed | Pass   |
| 2    | Open page at 375px              | No horizontal scrolling          | No horizontal scrolling        | Pass   |
| 3    | Open page at 414px              | Mobile layout works correctly    | Mobile layout works correctly  | Pass   |
| 4    | Open page at 768px              | Two-column tablet layout         | Two-column layout displayed    | Pass   |
| 5    | Open page at 834px              | Two-column tablet layout         | Two-column layout displayed    | Pass   |
| 6    | Open page at 1024px             | Three-column desktop cards       | Three-column layout displayed  | Pass   |
| 7    | Open page at 1280px             | Capped and centred layout        | Layout displayed correctly     | Pass   |
| 8    | Open page at 1440px             | Full desktop layout              | Layout displayed correctly     | Pass   |
| 9    | Submit empty contact form       | Validation errors displayed      | Validation errors displayed    | Pass   |
| 10   | Enter invalid email             | Email validation error displayed | Error displayed                | Pass   |
| 11   | Enter valid contact details     | Form validation succeeds         | Success message displayed      | Pass   |
| 12   | Submit invalid newsletter email | Invalid email rejected           | Invalid email rejected         | Pass   |
| 13   | Submit valid newsletter email   | Success message displayed        | Success message displayed      | Pass   |
| 14   | Click Back to Top               | Page returns to top              | Page returned to top           | Pass   | 
| 15   | Open mobile menu                | Navigation menu opens            | Navigation menu opens          | Pass   |

## Viewport Results

| Viewport | Result |
|----------|--------|
| 320px    | Pass   |
| 375px    | Pass   |
| 414px    | Pass   |
| 768px    | Pass   |
| 834px    | Pass   |
| 1024px   | Pass   |
| 1280px   | Pass   |
| 1440px   | Pass   |

## Contrast Checks

| Element         | Colour / Background             | Result |
|-----------------|---------------------------------|--------|
| Main body text  | Dark text on light background   | Pass   |
| Navigation text | White on dark orange background | Pass   |
| Primary buttons | White on orange background      | Pass   |

## Defects and Fixes

### Defect 1 — Large category and service images

**Problem:** Images appeared too large on small screens.
**Fix:** Added responsive image sizing with a controlled height and `object-fit: cover`.
**Result:** Images fit correctly on mobile and desktop layouts.

### Defect 2 — Theme colour update

**Problem:** The original green colour theme was changed during design refinement.
**Fix:** Updated the main theme colours to orange and yellow.
**Result:** The final page uses the selected orange/yellow visual theme.

## Final Result

The TechLaunch landing page was tested across the required mobile, tablet, and desktop viewport sizes. Contact and newsletter forms were tested using client-side validation. No horizontal scrolling was observed during the responsive checks.