# 🚀 Promptopia – Discover, Create & Share AI Prompts

Promptopia is a modern, full-stack AI prompt-sharing platform where users can discover, create, manage, and share high-quality AI prompts with the community.

Users can authenticate securely using Google OAuth 2.0, publish their own prompts, explore prompts created by other users, visit user profiles, and copy any prompt instantly with a single click.

Built with **Next.js, MongoDB, NextAuth.js, and Tailwind CSS**, Promptopia provides a seamless and fully responsive experience across desktop, tablet, and mobile devices.

---

## ✨ Features

### 🔐 Authentication

- Secure sign-in using Google OAuth 2.0.
- Sign out functionality.
- Authentication powered by NextAuth.js.
- Protected routes for authenticated users.
- User session management.

### 📝 Create & Manage Prompts

- Create and publish your own AI prompts.
- Add a title, prompt content, and relevant tags.
- Edit your previously created prompts.
- Delete your own prompts.
- Associate every prompt with its creator.

### 🔍 Explore Prompts

- Discover prompts created by other users.
- Browse prompts from the community.
- Search prompts using keywords.
- Filter and discover prompts using tags.
- Explore different categories of AI prompts.

### 👤 User Profiles

- View other users' public profiles.
- Display user profile images and names.
- See all prompts created by a particular user.
- Navigate between profiles and their published prompts.

### 📋 Copy Prompt

- Copy the complete prompt with one click.
- Quickly reuse prompts in ChatGPT and other AI tools.
- Simple and user-friendly copy-to-clipboard functionality.

### 📱 Responsive Design

- Fully responsive UI for desktop, tablet, and mobile.
- Modern and clean user interface.
- Smooth navigation and user interactions.
- Optimized layouts for different screen sizes.

---

## 🛠️ Tech Stack

| Technology       | Purpose                               |
| ---------------- | ------------------------------------- |
| Next.js          | Full-stack React framework            |
| React.js         | Frontend UI development               |
| Tailwind CSS     | Styling and responsive design         |
| MongoDB Atlas    | Cloud database                        |
| Mongoose         | MongoDB object modeling               |
| NextAuth.js      | Authentication and session management |
| Google OAuth 2.0 | Google authentication                 |
| JavaScript       | Application development               |

---

## 📸 Application Pages

| Page          | Description                                 |
| ------------- | ------------------------------------------- |
| Home          | Explore and search community prompts        |
| Sign In       | Authenticate using Google                   |
| Create Prompt | Publish a new AI prompt                     |
| Edit Prompt   | Update an existing prompt                   |
| User Profile  | View user information and published prompts |
| My Prompts    | Manage your own prompts                     |

---

## 📂 Project Structure

```text
promptopia/
│
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js
│   │
│   ├── create-prompt/
│   │   └── page.jsx
│   │
│   ├── update-prompt/
│   │   └── page.jsx
│   │
│   ├── profile/
│   │   └── [id]/
│   │       └── page.jsx
│   │
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
│
├── components/
│   ├── Nav.jsx
│   ├── Feed.jsx
│   ├── Form.jsx
│   ├── PromptCard.jsx
│   └── Provider.jsx
│
├── models/
│   ├── user.js
│   └── prompt.js
│
├── utils/
│   └── database.js
│
├── public/
│
├── styles/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/RaviiSharma/promptopia.git
```

### 2. Navigate to the Project

```bash
cd promptopia
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

Replace the placeholder values with your actual credentials.

### 5. Configure Google OAuth 2.0

1. Visit [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new Google Cloud project.
3. Configure the OAuth consent screen.
4. Create OAuth 2.0 credentials.
5. Select Web Application.
6. Add the following authorized redirect URI:

```text
http://localhost:3000/api/auth/callback/google
```

7. Copy your Google Client ID and Client Secret into the `.env` file.

### 6. Configure MongoDB Atlas

1. Visit [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
2. Create a MongoDB cluster.
3. Create a database user.
4. Configure your network access.
5. Copy your MongoDB connection string.
6. Add it to your `.env` file as `MONGODB_URI`.

### 7. Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🗄️ Database Models

### User Model

Stores user authentication and profile information.

| Field    | Type   | Description          |
| -------- | ------ | -------------------- |
| username | String | User's username      |
| email    | String | User's email         |
| image    | String | Google profile image |

### Prompt Model

Stores prompts created by users.

| Field   | Type     | Description             |
| ------- | -------- | ----------------------- |
| creator | ObjectId | Reference to User       |
| prompt  | String   | Complete prompt content |
| tag     | String   | Prompt category or tag  |

---

## 🔒 Security

- Google OAuth 2.0 authentication.
- Secure session management.
- Environment variables for sensitive credentials.
- Protected prompt management operations.
- Users can edit and delete only their own prompts.
- MongoDB database connection management.

---

## 🚀 Future Enhancements

- [ ] Like and bookmark prompts.
- [ ] Advanced search and tag filtering.
- [ ] Trending and most popular prompts.
- [ ] Prompt categories and collections.
- [ ] User follow system.
- [ ] Pagination and infinite scrolling.
- [ ] AI-powered prompt improvement.
- [ ] Public and private prompts.
- [ ] Share prompts through unique URLs.

---

## 🌐 Deployment

The application can be deployed using [Vercel](https://vercel.com/).

Before deployment:

1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Configure production environment variables.
4. Add your production domain to Google OAuth authorized origins.
5. Add your production callback URL:

```text
https://your-domain.com/api/auth/callback/google
```

6. Deploy your application.

---

## 👨‍💻 Author

**Ravi**

Full Stack Developer | MERN Stack Developer

- GitHub: https://github.com/RaviiSharma
- LinkedIn: https://www.linkedin.com/in/ravi-kumar-sharma-/

---

## ⭐ Support

If you find Promptopia useful, please consider giving this repository a ⭐ on GitHub.

**Discover. Create. Share. Inspire.**

Made with ❤️ using Next.js.
