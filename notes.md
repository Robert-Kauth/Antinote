# Think in components:

## Home Page:

- Navbar component:
	- NavLinks:
			1. Home NavLink
			2. Note books NavLink
			3. Notes NavLink
	- Profile Dropdown Button component
	- Logout button Component

---

- Profile Dropdown Component
  - User info Component
    - username
    - user email
  - Notebooks component
    - My notebooks title
    - Notebook card component (x4 ?)
    - Create new Notebook button component
  - Recent Notes component
    - Title = Recent Notes
    - Recent notes card component

---

- Most recent Notebook component
  - Title = Last updated Notebook title
  - Notebook note card components (x9 ?)

---
---

## Notebooks Page:

- Navbar component:
	- NavLinks:
			1. Home NavLink
			2. Note books NavLink
			3. Notes NavLink
	- Profile Dropdown Button component
	- Logout button Component

---

- Profile Dropdown Component
  - User info Component
    - username
    - user email
  - Notebooks component
    - My notebooks title
    - Notebook card component (x4 ?)
    - Create new Notebook button component
  - Recent Notes component
    - Title = Recent Notes
    - Recent notes card component

---

- Current Notebook component
  - Current Notebook Title
  - Note card components

---

- Note Creation Component
  - Note Title Input Component
  - Text Area Component
  - Crud Buttons component
    - Save button
    - edit button
    - delete button

---
---

## Notes Page:

- Navbar component:
	- NavLinks:
			1. Home NavLink
			2. Note books NavLink
			3. Notes NavLink
	- Profile Dropdown Button component
	- Logout button Component

---

- Profile Dropdown Component
  - User info Component
    - username
    - user email
  - Notebooks component
    - My notebooks title
    - Notebook card component (x4 ?)
    - Create new Notebook button component
  - Recent Notes component
    - Title = Recent Notes
    - Recent notes card component

---

- Notbook Feed component
  - Notebook feed component (displays all notes in specific notebook)
    - Note book title
    - note card components

```js
// faker seed data templates
{
          userId: 1,
          notebookId: 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 2,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 3,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 4,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
        {
          userId: 1,
          notebookId: 5,
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences(),
        },
```
---

Notebook card and noteCard essentially display the same thing. Choose one and delete the other.
- noteBook card would be better named NoteCard and is the one to keep as it is rendered on almost all the pages anyway
-
