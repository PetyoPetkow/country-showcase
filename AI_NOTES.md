# Working With AI Tools

I used GitHub Copilot to primarily implement the search, filtering, and sorting functionality.

---

## Initial Prompt

> Since you don't have context on this project yet, first go through the folder structure and inspect the relevant components and hooks to understand how the project is currently structured.
>
> Once you have an understanding of the existing code, implement search, filtering, and sorting for the country cards.
>
> Requirements:
>
> - Search countries by name
> - Filter countries by continent
> - Sort countries by population or total area
> - For both sorting options, support ascending (smallest → largest) and descending (largest → smallest)
> - Search, filtering, and sorting should all work together
> - After sorting/filtering return only the first 12 countries
>
> Place the search, filter, and sorting controls inside the AppHeader. You can adjust the header layout/height if needed, while keeping the existing dark/light mode toggle.
>
> Important:
>
> - Reuse the existing Country type and country data
> - Don't duplicate the countries array in state just to store filtered/sorted results
> - Keep the existing loading, error, and refetch behavior working
> - Keep the existing responsive layout
> - Follow the existing React and Tailwind patterns in the project
> - Don't introduce new dependencies
> - Avoid changing unrelated components or files
> - Don't over-engineer the solution

## First-pass result

Copilot implemented the search, continent filtering, and sorting functionality and added the controls to the existing `AppHeader`.

The main functionality worked, including combining search, filtering, and sorting.

However, the sorting UI was not what I wanted. Copilot created two separate fields: one for selecting the field to sort by and another for selecting the sort direction.

I wanted a single select containing these five options:

- No sorting
- Population (A-Z)
- Population (Z-A)
- Total area (A-Z)
- Total area (Z-A)

Since there are only a few possible combinations, I preferred keeping them in one field instead of having two separate controls taking up additional space in the header.

I also wanted to add a debounce to the search input. Although the current country data is local and the filtering is inexpensive, I preferred not to run the filtering logic on every keystroke.

---

## Second Prompt

> I reviewed the implementation and want to make two changes.
>
> 1. Sorting UI:
>
> I don't want a separate sort-field select and sort-order select.
>
> Use a single sorting select with exactly these options:
>
> - No sorting
> - Population (A-Z)
> - Population (Z-A)
> - Total area (A-Z)
> - Total area (Z-A)
>
> The selected sorting option should contain both the field and direction. Do not add another select for the sort direction.
>
> 2. Search debounce:
>
> Add a 300ms debounce to the country name search so that filtering does not run on every keystroke.

## Second-pass result

Copilot implemented both requested changes. The sorting options are now contained in a single select, and the search input uses a 300ms debounce.

After that, I reviewed the code and made a few structural changes myself.

---

## What I changed after reviewing the AI output

I made a few changes after reviewing the generated implementation.

First, I changed the sorting labels from `(A-Z)` and `(Z-A)` to `(asc)` and `(desc)`. Since the sorting is numeric rather than alphabetical, I felt that `asc` and `desc` were clearer.

I also extracted the search input, continent filter, sort select, and dark/light mode toggle into separate components inside the `AppHeader` folder. This keeps `AppHeader` focused on the header layout and makes the individual controls easier to read and maintain.

I also removed the sticky behavior from the header on smaller screens. When testing the page on mobile, I found that the header took up a large portion of the viewport while scrolling. I kept it sticky on larger screens, where there is more available space.

Finally, I reviewed where the filtering, sorting, and `slice(0, 12)` logic was placed. I kept the data fetching inside `useCountries` and the display-related filtering and sorting in `App`.

## Would I ship the AI output as-is?

No. I reviewed the generated code and tested the different combinations rather than assuming it was correct.

I checked search, continent filtering, both sorting fields and directions, and the 12-result limit. I also tested what happens when there are no matches and made sure the loading, error, retry, responsive header, and theme behavior still work.

Before shipping, I'd also take another look at the component structure, state management, accessibility, and whether any of the generated code could be simplified.
