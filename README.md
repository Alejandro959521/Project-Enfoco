
# Enfoco Cuadros — Online Art & Frame Shop

An e-commerce platform for selling frames and artwork, featuring a product catalog, an admin panel, and cloud image storage.

🔗 **Live Demo:** [project-enfoco-b548.onrender.com](https://project-enfoco-b548.onrender.com)

## Features

- Product catalog (frames/art pieces)
- Image storage and management with Cloudinary
- Admin panel (Flask-Admin) for product management
- API documented with Flask-Swagger
- Contact form (EmailJS)
- Responsive design with Tailwind CSS

## Tech Stack

**Frontend**
- React 16
- React Router DOM
- Tailwind CSS
- Webpack + Babel
- EmailJS
- Font Awesome

**Backend**
- Python + Flask
- SQLAlchemy (ORM) + Flask-Migrate (Alembic migrations)
- PostgreSQL (`psycopg2`)
- Flask-Admin (admin panel)
- Flask-CORS
- Cloudinary (image storage)
- Gunicorn (production server))

## Project Structure

\`\`\`
Project-Enfoco/
├── src/                # Frontend in React
├── api/
│   ├── models.py        # Database models
│   ├── routes.py        # API endpoints
│   ├── admin.py          # Flask-Admin configuration
│   └── commands.py       # Custom CLI commands
├── app.py               # Application entry point
└── requirements.txt
\`\`\`

## Installation

git clone https://github.com/Alejandro959521/Project-Enfoco.git
cd Project-Enfoco

# Backend
pip install -r requirements.txt

# Frontend
npm install
\`\`\`

## Environment Variables

create a `.env` file in the root directory:

| Variable             | Description                            |
|----------------------|--------------------------------------------|
| `DATABASE_URL`       | PostgreSQL connection string            |
| `FLASK_DEBUG`        | `1` for development mode                 |
| `CLOUDINARY_URL`     | Credenciales de Cloudinary |

## Uso

\`\`\`bash
# Backend
pipenv run migrate      # Apply migrations
python app.py

# Frontend
npm start
\`\`\`

## Deployment

Deployed on Render**: [project-enfoco-b548.onrender.com](https://project-enfoco-b548.onrender.com)

## Author

**Miguel Alejandro** — [GitHub](https://github.com/Alejandro959521)
