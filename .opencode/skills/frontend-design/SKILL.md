---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Apache-2.0
---

# Frontend Design

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. Make deliberate, opinionated choices about palette, typography, and layout that are specific to the brief, and take one real aesthetic risk you can justify.

## Ground it in the subject

If the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. Use the subject's own world, materials, instruments, artifacts, and vernacular as the source for distinctive choices.

## Design principles

- Make the hero a thesis: open with the most characteristic thing in the subject's world.
- Pair display and body type deliberately, with a clear type scale and intentional weights and spacing.
- Use structure as information. Labels, dividers, numbering, and signposts should encode something true about the content.
- Use motion deliberately. Prefer one coherent interaction over scattered effects, and respect reduced-motion preferences.
- Match complexity to the vision: maximalist directions need execution; minimal directions need precision.
- Treat copy as design material. Use specific, active, user-oriented language rather than filler.

## Process

Work in two passes:

1. Brainstorm a compact design plan: named colors, type roles, layout concept, a simple wireframe, and one signature element.
2. Critique the plan against the brief. Remove generic defaults and revise choices that are not specific to the subject before writing code.

When writing CSS, keep selectors intentional and avoid specificity conflicts. Review the result visually when possible, then remove one decorative element that does not serve the content.

## Restraint and quality floor

Spend boldness in one place and keep the surrounding system disciplined. Ensure responsive behavior, visible keyboard focus, usable contrast, and reduced-motion support. Words should make the interface easier to understand; each element should do exactly one job.

Source: https://github.com/anthropics/skills/tree/main/skills/frontend-design
