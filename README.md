# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## 🗄️ Database Setup (PostgreSQL)

This project uses PostgreSQL as the database. To import the initial database:

### Prerequisites

1. Ensure PostgreSQL is installed and running on your system
2. Create a new database for the project (if it doesn't exist)

### Import Database

1. **Create the database** (if needed):

   ```bash
   createdb -U postgres your_database_name
   ```

   Or using `psql`:

   ```bash
   psql -U postgres
   CREATE DATABASE your_database_name;
   \q
   ```

2. **Import the database dump**:

   ```bash
   psql -U postgres -d your_database_name -f starting_db.sql
   ```

   Or if you need to specify a host and port:

   ```bash
   psql -h localhost -p 5432 -U postgres -d your_database_name -f starting_db.sql
   ```

3. **Configure environment variables**:

   Make sure your `.env` file includes the following PostgreSQL configuration:

   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=your_database_name
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your_password
   DATABASE_SSL=false
   ```

   Or use a connection string:

   ```env
   DATABASE_CLIENT=postgres
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/your_database_name
   ```

4. **Verify the import**:

   Connect to your database to verify the tables were created:

   ```bash
   psql -U postgres -d your_database_name
   \dt
   \q
   ```

### Alternative: Using pg_restore (for custom format dumps)

If you have a custom format dump file:

```bash
pg_restore -U postgres -d your_database_name -c starting_db.dump
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
