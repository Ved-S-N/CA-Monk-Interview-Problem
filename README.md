# CA Monk – Blog Application (Frontend Internship Assignment)

This project is a blog application built as part of the **CA Monk Frontend Internship Assignment (Round 1)**.  
It demonstrates a modern React application using **TypeScript**, **TanStack Query**, **Tailwind CSS**, and **shadcn/ui**, following the provided UI reference (Blog list on the left + Blog details on the right).

---

## ✅ Tech Stack / Libraries Used

- **React + Vite**
- **TypeScript**
- **TanStack Query (@tanstack/react-query)** – Server state management & data fetching
- **Tailwind CSS** – Styling and responsive layout
- **shadcn/ui** – UI component library (Sheet, Card, Input, Button, Textarea, etc.)
- **Radix UI** (via shadcn/ui) – Accessible UI primitives
- **Font Awesome** – Icons used in UI
- **JSON Server** – Mock backend for blogs API

---

## ✅ Features Implemented (As Required)

### ✅ 1) Get All Blogs

- Fetches all blogs using:
  - `GET /blogs`
- Uses **TanStack Query** for:
  - loading state
  - error handling
  - caching and server state management
- Displays blog cards in the **left panel** showing:
  - category
  - title
  - description
  - date

---

### ✅ 2) Get Blog by ID

- Fetches blog details using:
  - `GET /blogs/:id`
- Uses **TanStack Query** for server state management
- Displays blog details in the **right panel** showing:
  - cover image
  - title
  - metadata section (category / read time / date)
  - full plain-text content

---

### ✅ 3) Create a New Blog

- Creates a blog using:
  - `POST /blogs`
- Uses **TanStack Mutation**
- Automatically refreshes blog list after create using:
  ✅ `invalidateQueries(["blogs"])`
- Form opens using a **shadcn/ui Sheet (slide-over panel)** for a modern UX

---

## 🎨 UI / UX Enhancements

- Clean layout inspired by reference design:
  - Left panel: Latest Articles (scrollable)
  - Right panel: Blog Detail View
- Active blog highlight uses a **left-side blue indicator**
- Consistent spacing, typography, and layout using **Tailwind CSS**
- Form styled using **shadcn/ui components**
- Font Awesome icons used in interaction elements
- Responsive layout support

---

## 🔗 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/blogs`     | Get all blogs  |
| GET    | `/blogs/:id` | Get blog by ID |
| POST   | `/blogs`     | Create a blog  |

---

## 📂 Project Structure

src/
api/
blogs.api.ts
http.ts
components/
BlogCard.tsx
BlogDetail.tsx
BlogForm.tsx
BlogList.tsx
Layout.tsx
ui/
lib/
utils.ts
pages/
BlogPage.tsx
providers/
QueryProvider.tsx
types/
blog.ts
App.tsx
main.tsx
index.css

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v18+)
- Git
- Basic React knowledge

---

## 🚀 Running the Project Locally

### 1) Clone the repository

```bash
git clone <repository-url>
cd camonk-interview

```

### 2) Install dependencies

```
npm install
```

3. Start JSON Server (Backend API)

```
npm run server

```

Backend runs on:

http://localhost:3001

4. Start the Development Server (Frontend)

Open another terminal and run:

```
npm run dev

```

Frontend runs on:

http://localhost:5173

Author

Ved S N
GitHub: https://github.com/Ved-S-N

```

```
