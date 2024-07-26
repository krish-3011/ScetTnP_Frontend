// src/miragejs/server.js
import { createServer, Model, Response } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      user: Model,
    },

    seeds(server) {
      // Seed data in dd-mm-yyyy format
      server.create('user', { enrollment: 'user123', date: '01-01-2024' });
    },

    routes() {
      this.namespace = 'api';

      this.post('/login', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let formattedDate = formatDate(attrs.date);  // Convert date format
        let user = schema.users.findBy({ enrollment: attrs.enrollment, date: formattedDate });

        if (user) {
          return user;
        } else {
          return new Response(401, {}, { error: 'Invalid credentials' });
        }
      });
    },
  });

  return server;
}

// Function to convert date from dd-mm-yyyy to yyyy-mm-dd
function formatDate(dateStr) {
  const [day, month, year] = dateStr.split('-');
  return `${year}-${month}-${day}`;
}
